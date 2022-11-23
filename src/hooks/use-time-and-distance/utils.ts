import { PeriodId } from "consts";
import {
  endOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subWeeks,
  subYears,
} from "date-fns";

export function getStartDate(period: PeriodId) {
  const currentDate = endOfDay(new Date());

  let fromDate: Date;

  switch (period) {
    case "ytd":
      // get first day of current year
      fromDate = startOfYear(currentDate);
      break;
    case "mtd":
      // get first day of current month
      fromDate = startOfMonth(currentDate);
      break;
    case "wtd":
      // get first day of current week
      fromDate = startOfWeek(currentDate);
      break;
    case "last12m":
      // substract 12 months from current
      fromDate = subMonths(currentDate, 12);
      break;
    case "last3m":
      // substract 3 months from current
      fromDate = subMonths(currentDate, 3);
      break;
    case "last4w":
      // substract 4 weeks from current
      fromDate = subWeeks(currentDate, 4);
      break;
    case "last7d":
      // substract 7 days from current
      fromDate = subDays(currentDate, 7);
      break;
    default:
      fromDate = subYears(currentDate, 2);
      break;
  }

  return fromDate;
}
