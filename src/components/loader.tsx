import clsx from "clsx";
import { FadeAnimation } from "./fade-animation";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex h-full items-center justify-center", className)}>
      <div className="animate-spin">
        <img
          src={
            "https://res.cloudinary.com/argyle-media/image/upload/v1661963437/argyle-x/homepage/spinner.png"
          }
          alt="spinner"
          width="80"
          height="80"
          className="-scale-x-100 "
        />
      </div>
    </div>
  );
};

export const ChartLoader = () => {
  return (
    <div className="flex h-[284px] items-center justify-center">
      <div className="animate-pulse">
        <h4 className="text-lg">Gathering data from Argyle API</h4>
      </div>
    </div>
  );
};

export const SectionLoader = ({ name }: { name?: string }) => {
  return (
    <FadeAnimation name={name ? name.concat("-loader") : "loader"}>
      <div className="flex h-[284px] select-none items-center justify-center">
        <div className="animate-pulse">
          <Loader />
        </div>
      </div>
    </FadeAnimation>
  );
};

export const ErrorMessage = () => {
  return <div className="h-[284px]  px-4 pt-[60px]">Error...</div>;
};
