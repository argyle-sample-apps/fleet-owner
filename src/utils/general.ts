import axios, { AxiosRequestConfig } from "axios";
import { deleteCookie } from "cookies-next";
import { PERIODS } from "consts";
import { format } from "date-fns";

export function getPeriodLabel(id) {
  return PERIODS.find((period) => period.id === id)?.label;
}

// fetch all results using pagination
export async function fetchAll<T>(
  url: string,
  config: AxiosRequestConfig
): Promise<T[]> {
  const fetch = async (url: string) => {
    const response = await axios.get<{ next: string | null; results: T[] }>(
      url,
      config
    );
    return response.data;
  };

  let data = await fetch(url);
  let results: T[] = [...data.results];

  while (data.next) {
    data = await fetch(data.next);
    results = [...results, ...data.results];
  }

  return results;
}

export const clearCookies = () => {
  const cookies = ["argyle-x-user-token", "argyle-x-user-id"];
  cookies.forEach((cookie) => deleteCookie(cookie));
};

export function downloadCSV(csv, filename) {
  const csvFile = new Blob([csv], { type: "text/csv" });

  const link = document.createElement("a");
  link.setAttribute("href", window.URL.createObjectURL(csvFile));
  link.setAttribute("download", `${filename}.csv`);

  document.body.appendChild(link);

  link.click();
}

export function formatFileName(startDate, endDate) {
  const from = format(startDate, "yyyy-MM-dd");
  const to = format(endDate, "yyyy-MM-dd");
  return `${from} - ${to}`;
}
