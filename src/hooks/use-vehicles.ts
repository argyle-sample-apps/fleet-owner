import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchVehicles = async () => {
  const { data } = await axios.get(`/api/vehicles`);

  return data;
};

export function useVehicles() {
  return useQuery(["vehicles"], fetchVehicles);
}
