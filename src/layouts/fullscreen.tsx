import { useResizeDetector } from "react-resize-detector";
import clsx from "clsx";
import { BrandLogo } from "components/icons";

type FullscreenProps = {
  children: React.ReactNode;
  logo?: boolean;
  className?: string;
};

function Fullscreen({ children, className, logo }: FullscreenProps) {
  const { height, ref } = useResizeDetector();

  return (
    <div
      id="__container"
      className={clsx("h-full", className ? className : "bg-white")}
      ref={ref}
    >
      {logo && (
        <div className="px-4 pt-5">
          <BrandLogo />
        </div>
      )}
      <main
        className="scrollbar overflow-auto"
        style={height ? { height: height - (logo ? 50 : 0) } : {}}
      >
        {children}
      </main>
    </div>
  );
}

export default Fullscreen;
