import clsx from "clsx";
import { useAtomValue } from "jotai";
import { selectedPeriodAtom, selectedThresholdAtom } from "stores/global";
import { useTimeAndDistance } from "hooks/use-time-and-distance";

export const Notification = () => {
  const selectedPeriod = useAtomValue(selectedPeriodAtom);
  const selectedThreshold = useAtomValue(selectedThresholdAtom);

  const { isLoading, isSyncingNewData } = useTimeAndDistance({
    period: selectedPeriod,
    threshold: selectedThreshold * 60,
  });

  const showLoader = !isLoading && isSyncingNewData;

  return (
    <div
      className={clsx(
        "absolute bottom-0 z-10 flex w-full justify-center bg-blue-100 transition-transform delay-1000",
        { "translate-y-12": !showLoader }
      )}
    >
      <div className="flex items-center space-x-2 py-3">
        <span className="block h-2 w-2 animate-ping rounded-full bg-blue-500"></span>
        <span className="font-medium text-blue-500">Fetching more data...</span>
      </div>
    </div>
  );
};
