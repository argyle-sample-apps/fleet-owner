import { useResizeDetector } from "react-resize-detector";
import { useRouter } from "next/router";
import clsx from "clsx";
import { LeftArrowIcon } from "components/icons";

type WithBackButtonProps = {
  children: React.ReactNode;
  yellowBg?: boolean;
};

function WithBackButton({ children, yellowBg }: WithBackButtonProps) {
  const { height, ref } = useResizeDetector();
  const router = useRouter();

  return (
    <div
      id="__container"
      className={clsx("h-full", yellowBg ? "bg-yellow-light" : "bg-white")}
      ref={ref}
    >
      <div className="px-3 pt-6 pb-8">
        <button
          className="block h-8 w-8 p-1 text-gray"
          onClick={() => router.back()}
        >
          <LeftArrowIcon />
        </button>
      </div>
      <main
        className="scrollbar overflow-auto"
        style={height ? { height: height - 91 } : {}}
      >
        {children}
      </main>
    </div>
  );
}

export default WithBackButton;
