import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { PlatformIcon } from "components/platform-icon";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  as?: React.ElementType;
  green?: boolean;
  disabled?: boolean;
  blue?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  (
    {
      onClick,
      href,
      children,
      as = "button",
      disabled = false,
      green = false,
    }: ButtonProps,
    ref
  ) => {
    const Element = as;
    return (
      <Element
        href={href}
        onClick={disabled ? () => {} : onClick}
        ref={ref}
        className={clsx("mt-5 block w-full py-3 px-6 text-xl", {
          "opacity-30": disabled,
          "bg-green text-white": green,
          "bg-black text-white": !green && !disabled,
        })}
        disabled={disabled}
      >
        {children}
      </Element>
    );
  }
);

export const InlineButton = forwardRef(
  (
    {
      onClick,
      href,
      children,
      as = "button",
      disabled = false,
      className,
      blue,
    }: ButtonProps,
    ref
  ) => {
    const Element = as;
    return (
      <Element
        href={href}
        onClick={disabled ? () => {} : onClick}
        ref={ref}
        className={clsx("flex content-center items-center ", className, {
          "opacity-30": disabled,
          "text-blue text-[13px]": blue,
          "text-xl text-black": !disabled && !blue,
        })}
      >
        {children}
      </Element>
    );
  }
);

type TabButtonProps = {
  title?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  dark?: boolean;
  onClick: () => void;
  src?: string;
  alt?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const TabButton = ({
  title,
  children,
  isActive,
  dark,
  onClick,
  src,
  alt,
  className,
}: TabButtonProps) => {
  return (
    <button
      className={clsx(
        "flex content-center items-center border-b-2 border-solid border-black pb-2",
        className,
        {
          "opacity-1 border-black": isActive,
          "opacity-1 border-transparent": dark,
          "border-transparent opacity-50": !isActive && !dark,
        }
      )}
      onClick={onClick}
    >
      {src && <PlatformIcon size="small" src={src} alt={alt} />}
      <p className="text-gray40 ml-2 text-largeParagraph">{title}</p>
      {children}
    </button>
  );
};

Button.displayName = "Button";
InlineButton.displayName = "InlineButton";
TabButton.displayName = "TabButton";
