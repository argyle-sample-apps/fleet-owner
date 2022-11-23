import type { ReactElement } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { clearCookies, downloadCSV, formatFileName } from "utils/general";
import WithBackButton from "layouts/with-back-button";
import { DateRange } from "react-day-picker";
import { Heading, TitleSmall, Paragraph } from "components/typography";
import { InlineButton, Button } from "components/button";
import { Splitter } from "components/splitter";
import { DownloadIcon, CalculateIcon } from "components/icons";
import { CalendarButton, Calendar } from "views/calendar";
import { useAtom } from "jotai";
import { selectedThresholdAtom } from "stores/global";
import { useCSV } from "hooks/use-csv";

export default function SettingsPage() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedThreshold, setSelectedThreshold] = useAtom(
    selectedThresholdAtom
  );

  const currentDate = new Date();
  const prvDateMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    currentDate.getMonth()
  );
  const defaultStartDate = new Date(prvDateMonth.setDate(1));

  const defaultEndDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  );

  const defaultSelected: DateRange = {
    from: defaultStartDate,
    to: defaultEndDate,
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  const csv = useCSV({
    threshold: selectedThreshold * 60,
    from: range?.from || defaultStartDate,
    to: range?.to || defaultEndDate,
  });

  const router = useRouter();

  return (
    <div className="flex flex-col px-4">
      <Heading>Settings</Heading>
      <Splitter className="my-5" />
      <div className="flex">
        <CalculateIcon />
        <TitleSmall className="ml-2">P1 calculation</TitleSmall>
      </div>
      <div className="relative mt-4 mb-5">
        <label className="absolute top-[5px] left-3 text-xs text-gray-T40">
          P1 offline time threshold, minutes
        </label>
        <input
          className="form-input"
          placeholder="60"
          aria-label="P1 offline time threshold, minutes"
          defaultValue={selectedThreshold}
          onChange={(e) => setSelectedThreshold(Number(e.target.value))}
        />
      </div>
      <Paragraph small className=" text-gray-T50">
        Time between activities after which the driver is considered to be
        offline.
      </Paragraph>
      <Splitter className="my-5" />
      <div className="flex">
        <DownloadIcon />
        <TitleSmall className="ml-2">Export data for all drivers</TitleSmall>
      </div>
      <Calendar
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
        range={range}
        setRange={setRange}
      />
      <CalendarButton
        onClick={() => setShowCalendar(!showCalendar)}
        startDate={range?.from}
        endDate={range?.to}
      />
      <Button
        disabled={!range}
        onClick={() => {
          if (!range) {
            return;
          }

          const filename = formatFileName(range?.from, range?.to);
          downloadCSV(csv, filename);
        }}
      >
        Download CSV
      </Button>
      <Splitter className="my-5" />

      <InlineButton
        className="mx-auto mb-2 text-center !text-black"
        onClick={() => {
          router.push("/connect");
        }}
      >
        Connect more accounts
      </InlineButton>
      <InlineButton
        className="mx-auto mb-5 text-center !text-red-600"
        onClick={() => {
          clearCookies();
          window.location.replace("/fleet-owner");
        }}
      >
        Delete my data
      </InlineButton>
    </div>
  );
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <WithBackButton>{page}</WithBackButton>;
};
