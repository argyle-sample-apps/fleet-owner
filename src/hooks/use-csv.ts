import { formatISO } from "date-fns";
import { useAccounts } from "./use-accounts";
import { useProfile } from "./use-profile";
import {
  TimeAndDistanceParams,
  useTimeAndDistance,
} from "./use-time-and-distance";
import { useVehicles } from "./use-vehicles";
import { parse } from "json2csv";

type Row = {
  date: string;
  account_id: string;
  link_item: string;
  full_name: string;
  vehicle: string;
  vin: string;
  time_p1: number;
  time_p2: number;
  time_p3: number;
  distance_p1: number;
  distance_p2: number;
  distance_p3: number;
};

export function useCSV(params: TimeAndDistanceParams): string {
  const {
    data: profile,
    isLoading: isProfileLoading,
    isError: isProfileError,
  } = useProfile();
  const {
    data: accounts,
    isLoading: isAccountsLoading,
    isError: isAccountsError,
  } = useAccounts();
  const {
    data: vehicles,
    isLoading: isVehiclesLoading,
    isError: isVehiclesError,
  } = useVehicles();

  const {
    data: timeAndDistance,
    isLoading: isTimeAndDistanceLoading,
    isSyncingNewData,
  } = useTimeAndDistance(params);

  if (
    isAccountsLoading ||
    isVehiclesLoading ||
    isProfileLoading ||
    isTimeAndDistanceLoading ||
    isSyncingNewData
  ) {
    return null;
  }

  if (isAccountsError || isVehiclesError || isProfileError) {
    return null;
  }

  const rows = [];

  const dataSets = timeAndDistance.daily;

  dataSets.forEach((dataSet) => {
    const allDates = dataSet.p1.distance.points.map((point) => point.date);

    let dates;

    if ("to" in params) {
      dates = allDates.filter((date) => date <= params.to);
    } else {
      dates = allDates;
    }

    const vehicle = vehicles.filter(
      (vehicle) => vehicle.account === dataSet.accountId
    )[0];

    dates.forEach((date, i) => {
      const row: Row = {
        date: formatISO(date),
        account_id: dataSet.accountId,
        link_item: dataSet.name,
        full_name: profile.full_name,
        vehicle: vehicle.make + " " + vehicle.model,
        vin: vehicle.vin,
        time_p1: dataSet.p1.time.points[i].value,
        time_p2: dataSet.p2.time.points[i].value,
        time_p3: dataSet.p3.time.points[i].value,
        distance_p1: dataSet.p1.distance.points[i].value,
        distance_p2: dataSet.p2.distance.points[i].value,
        distance_p3: dataSet.p3.distance.points[i].value,
      };

      rows.push(row);
    });
  });

  return parse(rows);
}
