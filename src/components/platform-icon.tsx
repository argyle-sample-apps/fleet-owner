import { useState } from "react";
import clsx from "clsx";

type Size = "small" | "medium";

const ICON_SIZES = {
  small: 22,
  medium: 28,
};

export type PlatformIconProps = {
  src?: string | null;
  size?: Size;
  alt?: string;
};

export const PlatformIcon = ({
  src = null,
  alt = "",
  size,
}: PlatformIconProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <div
      className={clsx(
        "relative my-auto flex content-center items-center overflow-hidden rounded-full bg-misty-40 object-cover",
        size
          ? `w-[${ICON_SIZES[size]}px] h-[${ICON_SIZES[size]}px]`
          : "h-[22px] w-[22px]"
      )}
    >
      {src && isImageLoaded && (
        <img
          className="absolute top-0 right-0 left-0 bottom-0 h-full w-full overflow-hidden rounded-full object-cover"
          onError={() => {
            setIsImageLoaded(false);
          }}
          alt={alt}
          src={src}
        />
      )}
      <div
        className={clsx(
          "absolute top-0 right-0 left-0 bottom-0 h-full w-full overflow-hidden rounded-full border-[1px] border-gray-T10"
        )}
      />
    </div>
  );
};
