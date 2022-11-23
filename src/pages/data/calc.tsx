import { Debug } from "components/debug";
import { useTimeAndDistance } from "hooks/use-time-and-distance";

export default function DataIncome() {
  const { data, isLoading } = useTimeAndDistance({
    period: "last12m",
    threshold: 60 * 60,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex space-x-2">
      <div className="flex-1">
        <div className="font-bold">time calcs</div>
        <Debug>{data}</Debug>
      </div>
    </div>
  );
}
