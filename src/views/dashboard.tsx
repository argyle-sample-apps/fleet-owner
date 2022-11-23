import { Tab } from "@headlessui/react";
import { Heading, TitleSmall } from "components/typography";
import { useTimeAndDistance } from "hooks/use-time-and-distance";
import { Splitter } from "components/splitter";
import { useAtomValue } from "jotai";
import {
  selectedGranularityAtom,
  selectedPeriodAtom,
  selectedThresholdAtom,
} from "stores/global";
import { LinesChartWithTooltip } from "charts/lines";
import { SectionLoader } from "components/loader";

export const Dashboard = () => {
  const selectedGranularity = useAtomValue(selectedGranularityAtom);
  const selectedThreshold = useAtomValue(selectedThresholdAtom);
  const selectedPeriod = useAtomValue(selectedPeriodAtom);

  const {
    data,
    isLoading: isTimeAndDistanceLoading,
    isSyncingNewData,
  } = useTimeAndDistance({
    period: selectedPeriod,
    threshold: selectedThreshold * 60,
  });

  if (isTimeAndDistanceLoading) {
    return <SectionLoader />;
  }

  const timeAndDistanceSets = data[selectedGranularity];

  return (
    <div className="mx-5 mt-16">
      <div className="w-2/3">
        <Heading className="mb-5">Dashboard</Heading>
      </div>
      <Tab.Group>
        <Tab.List className="flex space-x-4">
          <Tab className="border-b-black ui-selected:border-b-2">Time</Tab>
          <Tab className="border-b-black ui-selected:border-b-2">Distance</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="mt-8 mb-8">
              <TitleSmall className="mb-2">P1</TitleSmall>
              <Splitter />
              <LinesChartWithTooltip
                width={339}
                height={140}
                dataSets={timeAndDistanceSets}
                type="time"
                level="p1"
              />
            </div>
            <div className="mt-8 mb-8">
              <TitleSmall className="mb-2">P2</TitleSmall>
              <Splitter />
              <LinesChartWithTooltip
                width={339}
                height={140}
                dataSets={timeAndDistanceSets}
                type="time"
                level="p2"
              />
            </div>
            <div className="mt-8 mb-8">
              <TitleSmall className="mb-2">P3</TitleSmall>
              <Splitter />
              <LinesChartWithTooltip
                width={339}
                height={140}
                dataSets={timeAndDistanceSets}
                type="time"
                level="p3"
              />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="mt-8 mb-8">
              <TitleSmall className="mb-2">P1</TitleSmall>
              <Splitter />
              <LinesChartWithTooltip
                width={339}
                height={140}
                dataSets={timeAndDistanceSets}
                type="distance"
                level="p1"
              />
            </div>
            <div className="mt-8 mb-8">
              <TitleSmall className="mb-2">P2</TitleSmall>
              <Splitter />
              <LinesChartWithTooltip
                width={339}
                height={140}
                dataSets={timeAndDistanceSets}
                type="distance"
                level="p2"
              />
            </div>
            <div className="mt-8 mb-8">
              <TitleSmall className="mb-2">P3</TitleSmall>
              <Splitter />
              <LinesChartWithTooltip
                width={339}
                height={140}
                dataSets={timeAndDistanceSets}
                type="distance"
                level="p3"
              />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
