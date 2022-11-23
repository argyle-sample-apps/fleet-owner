import { Subheading, TitleSmall } from "components/typography";
import { BottomSheet } from "components/bottom-sheet";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { DayPicker, DateRange } from "react-day-picker";
import { Button } from "components/button";
import { Splitter } from "components/splitter";

function formatPeriod(start, end) {
  const from = start
    ? format(start, "dd MMMM yyyy", { locale: enUS })
    : "Select start date";

  const to = end
    ? format(end, "dd MMM yyyy", { locale: enUS })
    : "Select end date";

  return `${from} - ${to}`;
}

export const CalendarButton = ({ onClick, startDate, endDate }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 h-[56px] w-full bg-gray-T04 text-left"
    >
      <div className="ml-3 mb-0 text-xs text-gray-T40">Select time period</div>
      <TitleSmall className="ml-3">
        {formatPeriod(startDate, endDate)}
      </TitleSmall>
    </button>
  );
};

type CalendarModalProps = {
  showCalendar: boolean;
  setShowCalendar: (boolean) => void;
  range: DateRange;
  setRange: (DateRange) => void;
};

export const Calendar = ({
  showCalendar,
  setShowCalendar,
  range,
  setRange,
}: CalendarModalProps) => {
  return (
    <BottomSheet isOpen={showCalendar} onClose={() => setShowCalendar(false)}>
      <Subheading className="mb-3 !text-black">Select time period</Subheading>
      <div>
        <p className="text-green">{formatPeriod(range?.from, range?.to)}</p>
        <Splitter className="mt-4 mb-3" />
        <DayPicker
          fixedWeeks
          showOutsideDays
          mode="range"
          defaultMonth={range?.to}
          selected={range}
          onSelect={setRange}
          toDate={new Date()}
          locale={enUS}
          weekStartsOn={1}
        />
      </div>
      <Splitter className="my-4" />
      <Button onClick={() => setShowCalendar(false)}>Done</Button>
    </BottomSheet>
  );
};
