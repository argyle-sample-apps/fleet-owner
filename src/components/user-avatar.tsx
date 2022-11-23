import { useState } from "react";
import { getInitials } from "utils/format";

export type UserAvatarProps = {
  isUnknown?: boolean;
  isLoading?: boolean;
  src?: string | null;
  name?: string;
};

export const UserAvatar = ({
  isLoading,
  src = null,
  name = "",
}: UserAvatarProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <div className="relative flex h-8 w-8 content-center items-center overflow-hidden rounded-full border border-gray-T30 text-center">
      {src && isImageLoaded && (
        <img
          className="absolute top-0 right-0 left-0 bottom-0 h-full w-full overflow-hidden rounded-full  bg-misty-40 object-cover"
          onError={() => {
            setIsImageLoaded(false);
          }}
          alt={name}
          src={src}
        />
      )}
      {isLoading ? (
        <div className="h-8 w-8 animate-pulse rounded-full bg-misty-40" />
      ) : (
        <div className="h-[32px] w-[32px] overflow-hidden rounded-full bg-misty-40 ">
          <div className="m-auto ml-[-1px] h-[32px] w-[32px] pt-[5px] text-sm leading-5 text-white">
            {name && getInitials(name)}
          </div>
        </div>
      )}
    </div>
  );
};
