import split from "just-split";
import { sum } from "d3-array";
import { formatISO, parseISO, endOfMonth, endOfWeek, endOfDay } from "date-fns";
import { PeriodId } from "consts";
import { createEmptyPoints } from "utils/points";
import { useActivities } from "../use-activities";
import { useAccounts } from "../use-accounts";
import { getStartDate } from "./utils";
import { Account } from "models/account";
import { Activity } from "models/activity";

type Point = { date: Date; value: number };

type DataSet = {
  total: number;
  points: Point[];
};

type DataSetLevel = {
  time: DataSet;
  distance: DataSet;
};

export type DataByPeriod = {
  accountId: string;
  logoUrl: string;
  name: string;
  color: string;
  p1: DataSetLevel;
  p2: DataSetLevel;
  p3: DataSetLevel;
};

type ResponseData = {
  monthly: DataByPeriod[];
  weekly: DataByPeriod[];
  daily: DataByPeriod[];
};

type Response = {
  data: ResponseData | null;
  isLoading: boolean;
  isSyncingNewData: boolean;
};

type TimeAndDistanceSet = {
  times: { p1: number; p2: number; p3: number };
  distances: { p1: number; p2: number; p3: number };
};

const getKey = (point) => formatISO(point.date, { representation: "date" });

function getBaseTimeValues(
  currentActivity: Activity,
  previousActivity: Activity,
  threshold: number
) {
  const current = currentActivity.all_timestamps;
  const previous = previousActivity?.all_timestamps;

  const times = { p1: 0, p2: 0, p3: 0 };

  let delta: number;

  if (!previous) {
    delta = 0;
  } else {
    delta =
      (previous.dropoff_at || previous.cancel_at) -
      (current.accept_at || current.request_at);
  }

  times.p1 = delta < threshold ? delta : 0;

  const isValidP2 =
    (current.pickup_at || current.cancel_at) && current.accept_at;

  if (isValidP2) {
    times.p2 = (current.pickup_at || current.cancel_at) - current.accept_at;
  }

  const isValidP3 = current.dropoff_at && current.pickup_at;

  if (isValidP3) {
    times.p3 = current.dropoff_at - current.pickup_at;
  }

  return times;
}

function getBaseDistanceValues(currentActivity: Activity) {
  const p3 = Math.round(Number(currentActivity.distance));
  const p2 = p3 > 0 ? 3 : 0;

  return { p1: 0, p2, p3 };
}

function calculateTotals(map: Map<string, TimeAndDistanceSet>) {
  const totals = {
    times: {
      p1: 0,
      p2: 0,
      p3: 0,
    },
    distances: {
      p1: 0,
      p2: 0,
      p3: 0,
    },
  };

  for (const value of map.values()) {
    totals.times.p1 += value.times.p1;
    totals.times.p2 += value.times.p2;
    totals.times.p3 += value.times.p3;
    totals.distances.p1 += value.distances.p1;
    totals.distances.p2 += value.distances.p2;
    totals.distances.p3 += value.distances.p3;
  }

  return totals;
}

function splitPointsBy(points: Point[], count: number): Point[][] {
  return split(points, count).filter((chunk) => chunk.length === count);
}

function getWeeklyPoints(chunks: Point[][]) {
  return chunks.map((chunk) => {
    const date = endOfWeek(new Date(chunk[0].date));
    const value = sum(chunk.map((point) => point.value));

    return { date, value };
  });
}

function getMonthlyPoints(chunks: Point[][]) {
  return chunks.map((chunk) => {
    const date = endOfMonth(new Date(chunk[0].date));
    const value = sum(chunk.map((point) => point.value));

    return { date, value };
  });
}

function createPoints(map: Map<string, TimeAndDistanceSet>, from: Date) {
  const daily = {
    times: {
      p1: createEmptyPoints(from).map((point) => {
        const key = getKey(point);
        const value = map.get(key)?.times.p1 || 0;

        return { ...point, value };
      }),
      p2: createEmptyPoints(from).map((point) => {
        const key = getKey(point);
        const value = map.get(key)?.times.p2 || 0;

        return { ...point, value };
      }),
      p3: createEmptyPoints(from).map((point) => {
        const key = getKey(point);
        const value = map.get(key)?.times.p3 || 0;

        return { ...point, value };
      }),
    },
    distances: {
      p1: createEmptyPoints(from),
      p2: createEmptyPoints(from).map((point) => {
        const key = getKey(point);
        const value = map.get(key)?.distances.p2 || 0;

        return { ...point, value };
      }),
      p3: createEmptyPoints(from).map((point) => {
        const key = getKey(point);
        const value = map.get(key)?.distances.p3 || 0;

        return { ...point, value };
      }),
    },
  };

  const weekly = {
    times: {
      p1: getWeeklyPoints(splitPointsBy(daily.times.p1, 7)),
      p2: getWeeklyPoints(splitPointsBy(daily.times.p2, 7)),
      p3: getWeeklyPoints(splitPointsBy(daily.times.p3, 7)),
    },
    distances: {
      p1: getWeeklyPoints(splitPointsBy(daily.distances.p1, 7)),
      p2: getWeeklyPoints(splitPointsBy(daily.distances.p2, 7)),
      p3: getWeeklyPoints(splitPointsBy(daily.distances.p3, 7)),
    },
  };

  const monthly = {
    times: {
      p1: getMonthlyPoints(splitPointsBy(daily.times.p1, 31)),
      p2: getMonthlyPoints(splitPointsBy(daily.times.p2, 31)),
      p3: getMonthlyPoints(splitPointsBy(daily.times.p3, 31)),
    },
    distances: {
      p1: getMonthlyPoints(splitPointsBy(daily.distances.p1, 31)),
      p2: getMonthlyPoints(splitPointsBy(daily.distances.p2, 31)),
      p3: getMonthlyPoints(splitPointsBy(daily.distances.p3, 31)),
    },
  };

  return {
    daily,
    weekly,
    monthly,
  };
}

function aggregate(activities: Activity[], threshold: number) {
  const map = new Map<string, TimeAndDistanceSet>();

  for (let i = 0; i < activities.length; i++) {
    const currentActivity = activities[i];
    const previousActivity = activities[i - 1];

    const times = getBaseTimeValues(
      currentActivity,
      previousActivity,
      threshold
    );
    const distances = getBaseDistanceValues(currentActivity);

    const date = parseISO(currentActivity.start_date);
    const key = formatISO(date, { representation: "date" });

    if (!map.has(key)) {
      map.set(key, { times, distances });
    } else {
      const existing = map.get(key);
      map.set(key, {
        times: {
          p1: existing.times.p1 + times.p1,
          p2: existing.times.p2 + times.p2,
          p3: existing.times.p3 + times.p3,
        },
        distances: {
          p1: existing.distances.p1 + distances.p1,
          p2: existing.distances.p2 + distances.p2,
          p3: existing.distances.p3 + distances.p3,
        },
      });
    }
  }

  return map;
}

function filter(activities: Activity[], account: Account) {
  return activities.filter((activity) => activity.account === account.id);
}

export type TimeAndDistanceParams =
  | {
      period: PeriodId;
      threshold: number;
    }
  | {
      from: Date;
      to: Date;
      threshold: number;
    };

export function useTimeAndDistance(params: TimeAndDistanceParams): Response {
  let from;
  let to;

  if ("period" in params) {
    from = getStartDate(params.period);
    to = endOfDay(new Date());
  } else {
    from = params.from;
    to = params.to;
  }

  const {
    data: accounts,
    isLoading: isAccountsLoading,
    isSyncingNewData,
  } = useAccounts();

  const { data: activities, isLoading: isActivitiesLoading } = useActivities({
    isSyncingNewData: isSyncingNewData,
    from: formatISO(from),
    to: formatISO(to),
  });

  if (
    !activities ||
    !activities?.length ||
    isAccountsLoading ||
    isActivitiesLoading
  ) {
    return {
      data: null,
      isLoading: true,
      isSyncingNewData,
    };
  }

  const data = {
    daily: [],
    weekly: [],
    monthly: [],
  };

  // iterate over accounts, figure out what `kind` of an account it is
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];

    if (
      account.link_item_details.kind === "employer" ||
      account.link_item_details.kind === "platform"
    ) {
      continue;
    }

    const filtered = filter(activities, account);
    const aggregated = aggregate(filtered, params.threshold);

    // calculate total using the map
    const totals = calculateTotals(aggregated);

    // create points for each day using the map
    const points = createPoints(aggregated, from);

    const base = {
      accountId: account.id,
      name: account.link_item_details.name,
      logoUrl: account.link_item_details.logo_url,
      color: account.color,
    };

    const daily = {
      ...base,
      p1: {
        time: {
          total: totals.times.p1,
          points: points.daily.times.p1,
        },
        distance: {
          total: totals.distances.p1,
          points: points.daily.distances.p1,
        },
      },
      p2: {
        time: {
          total: totals.times.p2,
          points: points.daily.times.p2,
        },
        distance: {
          total: totals.distances.p2,
          points: points.daily.distances.p2,
        },
      },
      p3: {
        time: {
          total: totals.times.p3,
          points: points.daily.times.p3,
        },
        distance: {
          total: totals.distances.p3,
          points: points.daily.distances.p3,
        },
      },
    };

    const weekly = {
      ...base,
      p1: {
        time: {
          total: totals.times.p1,
          points: points.weekly.times.p1,
        },
        distance: {
          total: totals.distances.p1,
          points: points.weekly.distances.p1,
        },
      },
      p2: {
        time: {
          total: totals.times.p2,
          points: points.weekly.times.p2,
        },
        distance: {
          total: totals.distances.p2,
          points: points.weekly.distances.p2,
        },
      },
      p3: {
        time: {
          total: totals.times.p3,
          points: points.weekly.times.p3,
        },
        distance: {
          total: totals.distances.p3,
          points: points.weekly.distances.p3,
        },
      },
    };

    const monthly = {
      ...base,
      p1: {
        time: {
          total: totals.times.p1,
          points: points.monthly.times.p1,
        },
        distance: {
          total: totals.distances.p1,
          points: points.monthly.distances.p1,
        },
      },
      p2: {
        time: {
          total: totals.times.p2,
          points: points.monthly.times.p2,
        },
        distance: {
          total: totals.distances.p2,
          points: points.monthly.distances.p2,
        },
      },
      p3: {
        time: {
          total: totals.times.p3,
          points: points.monthly.times.p3,
        },
        distance: {
          total: totals.distances.p3,
          points: points.monthly.distances.p3,
        },
      },
    };

    data.daily.push(daily);
    data.weekly.push(weekly);
    data.monthly.push(monthly);
  }

  return { data, isLoading: false, isSyncingNewData };
}
