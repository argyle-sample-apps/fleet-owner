import axios from "axios";
import qs from "qs";
import { useQuery } from "@tanstack/react-query";
import { Activity } from "models/activity";

const fetchActivities = async (params: string) => {
  const { data } = await axios.get<Activity[]>(`/api/activities?${params}`);

  return data;
};

export function useActivities({
  from,
  to,
  isSyncingNewData,
}: {
  from: string;
  to: string;
  isSyncingNewData: boolean;
}) {
  const params = qs.stringify({ from, to });

  return useQuery(["activities", from, to], () => fetchActivities(params), {
    refetchInterval: isSyncingNewData ? 5000 : false,
  });
}
