import { TitleSmall, Paragraph } from "components/typography";
import { useTimeAndDistance } from "hooks/use-time-and-distance";
import { useAtomValue } from "jotai";
import {
  selectedPeriodAtom,
  selectedGranularityAtom,
  selectedThresholdAtom,
} from "stores/global";
import { SectionLoader } from "components/loader";
import { formatTime } from "utils/format";
import { InlineButton } from "components/button";
import { useCSV } from "hooks/use-csv";
import { downloadCSV } from "utils/general";
import { PlatformIcon } from "components/platform-icon";
import { DownloadSmall } from "components/icons";

export const PeriodBreakdown = () => {
  const selectedPeriod = useAtomValue(selectedPeriodAtom);
  const selectedGranularity = useAtomValue(selectedGranularityAtom);
  const selectedThreshold = useAtomValue(selectedThresholdAtom);

  const { data, isLoading, isSyncingNewData } = useTimeAndDistance({
    period: selectedPeriod,
    threshold: selectedThreshold * 60,
  });

  const csv = useCSV({
    threshold: selectedThreshold * 60,
    period: selectedPeriod,
  });

  if (isLoading) {
    return <SectionLoader name="period-breakdown" />;
  }

  return (
    <div className="mx-5 mt-[60px]">
      <TitleSmall className="mb-5">Period breakdown</TitleSmall>
      <div className="grid w-full grid-cols-4 border-b border-gray-T08 pb-3">
        <div></div>
        <Paragraph>P1</Paragraph>
        <Paragraph>P2</Paragraph>
        <Paragraph>P3</Paragraph>
      </div>
      {data[selectedGranularity].map(({ logoUrl, name, p1, p2, p3 }, i) => (
        <div
          className="grid h-[64px] w-full grid-cols-4 content-center  border-b border-gray-T08 "
          key={i}
        >
          <div className="flex">
            <PlatformIcon size="medium" src={logoUrl} alt={name} />
          </div>
          <div>
            <Paragraph small>{formatTime(p1.time.total)}</Paragraph>
            <Paragraph small>{p1.distance.total} mi</Paragraph>
          </div>
          <div>
            <Paragraph small>{formatTime(p2.time.total)}</Paragraph>
            <Paragraph small>{p2.distance.total} mi</Paragraph>
          </div>
          <div>
            <Paragraph small>{formatTime(p3.time.total)}</Paragraph>
            <Paragraph small>{p3.distance.total} mi</Paragraph>
          </div>
        </div>
      ))}
      <InlineButton
        blue
        disabled={!csv}
        onClick={() => downloadCSV(csv, selectedPeriod)}
        className="mt-5"
      >
        <div className="mr-1">
          <DownloadSmall />
        </div>
        Download CSV
      </InlineButton>
    </div>
  );
};
