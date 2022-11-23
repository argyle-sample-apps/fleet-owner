import clsx from "clsx";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { DatePicker } from "components/date-picker";
import { datePickerOpenAtom } from "stores/global";
import { LeftArrowIcon } from "components/icons";

export const Topbar = () => {
  const setIsOpen = useSetAtom(datePickerOpenAtom);
  const router = useRouter();
  const { ref, inView, entry } = useInView({ threshold: 1 });

  return (
    <div
      ref={ref}
      className={clsx(
        "sticky -top-px z-10 mb-4 flex w-full border-b border-solid border-gray-T08 px-4 pt-4",
        {
          "bg-white": entry && !inView,
        }
      )}
    >
      <button className="mr-3 block h-8 w-8 p-1" onClick={() => router.back()}>
        <LeftArrowIcon />
      </button>
      <DatePicker onClick={() => setIsOpen(true)} />
    </div>
  );
};
