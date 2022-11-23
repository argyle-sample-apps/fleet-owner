import clsx from "clsx";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
  small?: boolean;
};

export function Title({ children, className }: TypographyProps) {
  return (
    <h1 className={clsx("text-title tracking-[-.01em] text-black", className)}>
      {children}
    </h1>
  );
}

export function TitleSmall({ children, className }: TypographyProps) {
  return (
    <h4 className={clsx("text-titleSmall text-black", className)}>
      {children}
    </h4>
  );
}

export function Heading({ children, className }: TypographyProps) {
  return (
    <h2
      className={clsx(
        "text-heading font-normal tracking-[-.01em] text-black",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Subheading({ children, className }: TypographyProps) {
  return (
    <h3
      className={clsx(
        "text-subheading font-normal",
        className ? className : "text-gray-T50"
      )}
    >
      {children}
    </h3>
  );
}

export function Paragraph({
  children,
  className,
  large,
  small,
}: TypographyProps) {
  return (
    <p
      className={clsx("text-gray40", className, {
        "text-largeParagraph": large,
        "text-smallParagraph": small,
        "text-base": !large && !small,
      })}
    >
      {children}
    </p>
  );
}

export function Subparagraph({ children, className }: TypographyProps) {
  return (
    <p className={clsx("text-sm font-normal text-black", className)}>
      {children}
    </p>
  );
}

export function Footnote({ children, className }: TypographyProps) {
  return (
    <h4 className={clsx("text-xs font-normal text-gray-T50", className)}>
      {children}
    </h4>
  );
}

export function Strong({ children, className }: TypographyProps) {
  return (
    <span className={clsx("font-normal text-black", className)}>
      {children}
    </span>
  );
}
