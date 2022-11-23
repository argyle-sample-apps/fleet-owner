import { TabButton } from "components/button";
import { SmallChevronDown } from "components/icons";
import { PeriodId } from "consts";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { selectedGranularityAtom, selectedPeriodAtom } from "stores/global";
import { getPeriodLabel } from "utils/general";

type DatePickerProps = {
  onClick: () => void;
};

type GranularityButtonsProps = {
  period: PeriodId;
};

const monthlyWeekly = ["ytd", "last12m", "last3m"];
const weeklyDaily = ["mtd", "last4w"];
const daily = ["wtd", "last7d"];

const GranularityButtons = ({ period }: GranularityButtonsProps) => {
  const selectedPeriod = useAtomValue(selectedPeriodAtom);
  const [selectedGranularity, setSelectedGranularity] = useAtom(
    selectedGranularityAtom
  );

  useEffect(() => {
    const isWeeklyDaily = weeklyDaily.includes(selectedPeriod);
    const isMonthlyWeekly = monthlyWeekly.includes(selectedPeriod);
    const isDaily = daily.includes(selectedPeriod);

    if (isWeeklyDaily && selectedGranularity === "monthly") {
      setSelectedGranularity("weekly");
    }

    if (isMonthlyWeekly && selectedGranularity === "daily") {
      setSelectedGranularity("weekly");
    }

    if (
      isDaily &&
      (selectedGranularity === "weekly" || selectedGranularity === "monthly")
    ) {
      setSelectedGranularity("daily");
    }
  }, [selectedPeriod, selectedGranularity, setSelectedGranularity]);

  if (monthlyWeekly.includes(period)) {
    return (
      <>
        <TabButton
          isActive={selectedGranularity === "monthly"}
          onClick={() => setSelectedGranularity("monthly")}
          className="mr-5"
        >
          Monthly
        </TabButton>
        <TabButton
          isActive={selectedGranularity === "weekly"}
          onClick={() => setSelectedGranularity("weekly")}
        >
          Weekly
        </TabButton>
      </>
    );
  }

  if (weeklyDaily.includes(period)) {
    return (
      <>
        <TabButton
          isActive={selectedGranularity === "weekly"}
          onClick={() => setSelectedGranularity("weekly")}
          className="mr-5"
        >
          Weekly
        </TabButton>
        <TabButton
          isActive={selectedGranularity === "daily"}
          onClick={() => setSelectedGranularity("daily")}
        >
          Daily
        </TabButton>
      </>
    );
  }

  if (daily.includes(period)) {
    return (
      <>
        <TabButton
          isActive={selectedGranularity === "daily"}
          onClick={() => setSelectedGranularity("daily")}
        >
          Daily
        </TabButton>
      </>
    );
  }

  return null;
};

export const DatePicker = ({ onClick }: DatePickerProps) => {
  const selectedPeriod = useAtomValue(selectedPeriodAtom);
  const label = getPeriodLabel(selectedPeriod);

  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <GranularityButtons period={selectedPeriod} />
      </div>
      <TabButton onClick={onClick} dark>
        {label}
        <span className="ml-2">
          <SmallChevronDown />
        </span>
      </TabButton>
    </div>
  );
};
