import clsx from "clsx";
import splitAt from "just-split-at";
import { BottomSheet } from "components/bottom-sheet";
import { InlineButton, Button } from "components/button";
import { Splitter } from "components/splitter";
import { useAtom } from "jotai";
import { selectedPeriodAtom } from "stores/global";
import { Subheading } from "components/typography";
import { PERIODS } from "consts";

type PeriodFilteringProps = {
  isOpen: boolean;
  onClose: () => void;
};

const [top, bottom] = splitAt(PERIODS, 3);

export function PeriodFiltering({ isOpen, onClose }: PeriodFilteringProps) {
  const [selectedPeriod, setSelectedPeriod] = useAtom(selectedPeriodAtom);

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <Subheading className="text-black">Select time period</Subheading>
      <Splitter className="mt-4" />
      <div className="my-4 space-y-4">
        {top.map((period) => (
          <InlineButton
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
            className={clsx(
              selectedPeriod === period.id
                ? "border-l-2 border-solid border-black pl-3 !text-black"
                : "!text-gray-T50",
              "text-paragraph text-gray-T50"
            )}
          >
            {period.label}
          </InlineButton>
        ))}
      </div>
      <Splitter className="mt-4" />
      <div className="my-4 space-y-4">
        {bottom.map((period) => (
          <InlineButton
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
            className={clsx(
              selectedPeriod === period.id
                ? "border-l-2 border-solid border-black pl-3 !text-black"
                : "!text-gray-T50",
              "text-paragraph text-gray-T50"
            )}
          >
            {period.label}
          </InlineButton>
        ))}
      </div>
      <div className="mt-4">
        <Button onClick={onClose}>Done</Button>
      </div>
    </BottomSheet>
  );
}
