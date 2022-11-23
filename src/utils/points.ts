import { eachDayOfInterval } from "date-fns";

export function createEmptyPoints(from: Date) {
  const today = new Date();

  const dates = eachDayOfInterval({ start: from, end: today });

  return dates.map((date) => ({ date: date, value: 0 }));
}
