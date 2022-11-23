import React, { Fragment, useCallback, useState } from "react";
import { extent, max, bisector } from "d3-array";
import { curveLinear } from "@visx/curve";
import { Group } from "@visx/group";
import { LinePath, Line, Bar } from "@visx/shape";
import { scaleTime, scaleLinear } from "@visx/scale";
import flatten from "just-flatten-it";
import { withTooltip } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { Paragraph } from "components/typography";
import { LinesSummary } from "./summary";
import { format, isEqual, isSameDay, isValid } from "date-fns";
import { useAtom } from "jotai";
import { selectedGranularityAtom } from "stores/global";
import { DataByPeriod } from "hooks/use-time-and-distance";

export type DateValue = {
  date: Date;
  value: number;
};

type TooltipData = DateValue;

type LinesChartProps = {
  width: number;
  height: number;
  dataSets: DataByPeriod[];
  type: "time" | "distance";
  level: "p1" | "p2" | "p3";
};

const bisectDate = bisector<DateValue, Date>((d) => new Date(d.date)).left;

function LinesChart({
  width,
  height,
  dataSets,
  type,
  level,
  showTooltip,
  hideTooltip,
  tooltipData,
  tooltipLeft = 0,
  tooltipTop = 0,
}: LinesChartProps & WithTooltipProvidedProps<TooltipData>) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedGranularity] = useAtom(selectedGranularityAtom);
  const margin = 4;

  const innerWidth = width - margin * 2;
  const innerHeight = height - margin * 2;

  const getX = (d: DateValue) => d?.date;
  const getY = (d: DateValue) => d?.value;

  const allPoints = flatten(dataSets.map((set) => set[level][type].points));

  const maxValue = max(allPoints, getY) as number;

  const firstAvailableDate = allPoints[0]?.date;
  const startDate = isValid(firstAvailableDate)
    ? firstAvailableDate
    : new Date();

  const xScale = scaleTime<number>({
    domain: extent(allPoints, getX) as [Date, Date],
    range: [0 + margin, width - margin],
  });
  const yScale = scaleLinear<number>({
    domain: [0, maxValue],
    range: [height, margin],
  });

  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      const { x } = localPoint(event) || { x: 0 };
      const date = xScale.invert(x);
      const points = dataSets[0][level][type].points;

      if (!points) return;

      const index = bisectDate(points, date, 1);
      const leftIndex = points[index - 1];
      const rightIndex = points[index];
      let pick = leftIndex;

      if (rightIndex && getX(rightIndex)) {
        pick =
          date.valueOf() - getX(leftIndex).valueOf() >
          getX(rightIndex).valueOf() - date.valueOf()
            ? rightIndex
            : leftIndex;
      }

      setSelectedDate(pick?.date);
      showTooltip({
        tooltipData: pick,
        tooltipLeft: xScale(getX(pick)),
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showTooltip, xScale, yScale, dataSets]
  );

  function getCircles(selectedDate) {
    if (!selectedDate) {
      return [];
    }

    const circles = dataSets.map((set) => {
      const point = set[level][type].points.find((point) => {
        return isEqual(new Date(point.date), new Date(selectedDate));
      });

      return {
        color: set.color,
        point: point,
      };
    });

    return circles;
  }

  function formatDistance(miles) {
    return `${miles} mi`;
  }

  function formatDuration(seconds: number) {
    if (isNaN(seconds)) {
      return "0m";
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60) % 60;

    return [hours, minutes]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join("h")
      .concat("m");
  }

  function formatByType(type: "time" | "distance", value: number) {
    let formatted;
    switch (type) {
      case "time":
        formatted = formatDuration(value);
        break;
      case "distance":
        formatted = formatDistance(value);
        break;
    }
    return formatted;
  }

  function getSummary(selectedDate) {
    if (!selectedDate) {
      const totals = dataSets.map((set) => {
        const total = set[level][type].total;
        const formatted = formatByType(type, total);

        return {
          ...set,
          total: formatted,
        };
      });

      return totals;
    }

    const totals = dataSets.map((set) => {
      const point = set[level][type].points.find((point) => {
        return isSameDay(new Date(point.date), new Date(selectedDate));
      });

      if (!point) {
        return {
          ...set,
          total: "N/A in " + selectedGranularity + " view",
        };
      } else {
        const value = point?.value || 0;

        return {
          ...set,
          total: formatByType(type, value),
        };
      }
    });

    return totals;
  }

  const circles = getCircles(selectedDate);
  const summary = getSummary(selectedDate);

  return (
    <div className="my-4">
      <LinesSummary selectedDate={selectedDate} data={summary} />
      <Paragraph>{formatByType(type, maxValue)}</Paragraph>
      <svg width={width} height={height}>
        <Line
          from={{ x: 0, y: yScale(maxValue) }}
          to={{ x: width, y: yScale(maxValue) }}
          stroke="#d9d9d9"
          strokeWidth={1}
          strokeDasharray="3, 3"
        />
        <Line
          from={{ x: 0, y: height - 1 }}
          to={{ x: width, y: height - 1 }}
          stroke="#d9d9d9"
          strokeWidth={1}
        />
        {dataSets.map((set, i) => {
          return (
            <Group key={`lines-${i}`}>
              <LinePath<DateValue>
                curve={curveLinear}
                data={set[level][type].points}
                x={(d) => xScale(getX(d)) ?? 0}
                y={(d) => yScale(getY(d)) ?? 0}
                stroke={set.color}
                strokeWidth={2}
                strokeOpacity={1}
                shapeRendering="geometricPrecision"
              />
            </Group>
          );
        })}
        <Bar
          x={margin}
          y={margin}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
          onTouchStart={handleTooltip}
          onTouchMove={handleTooltip}
          onMouseMove={handleTooltip}
          onMouseUp={() => {
            hideTooltip();
            setSelectedDate(null);
          }}
          onTouchEnd={() => {
            hideTooltip();
            setSelectedDate(null);
          }}
          onMouseLeave={() => {
            hideTooltip();
            setSelectedDate(null);
          }}
        />
        {tooltipData && (
          <g>
            <Line
              from={{ x: tooltipLeft, y: margin }}
              to={{ x: tooltipLeft, y: height }}
              stroke="#4d4d4d"
              strokeWidth={1}
              pointerEvents="none"
              strokeDasharray="5,2"
            />
            {circles.map((circle, i) => (
              <Fragment key={i}>
                <circle
                  cx={xScale(getX(circle.point))}
                  cy={yScale(getY(circle.point)) + 1}
                  r={4}
                  fill="black"
                  fillOpacity={0.1}
                  stroke="black"
                  strokeOpacity={0.1}
                  strokeWidth={2}
                  pointerEvents="none"
                />
                <circle
                  cx={xScale(getX(circle.point))}
                  cy={yScale(getY(circle.point)) + 1}
                  r={4}
                  fill={circle.color}
                  stroke="white"
                  strokeWidth={2}
                  pointerEvents="none"
                />
              </Fragment>
            ))}
          </g>
        )}
      </svg>
      <div className="mt-2 flex justify-between">
        <span className="text-sm">
          {startDate && format(startDate, "MMM d")}
        </span>
        <span className="text-sm">Today</span>
      </div>
    </div>
  );
}
export function LinesChartWithTooltip(props: LinesChartProps) {
  return withTooltip<LinesChartProps, TooltipData>(LinesChart)(props);
}
