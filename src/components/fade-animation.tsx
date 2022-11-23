import { m } from "framer-motion";
import { animation } from "utils/animation";

export const FadeAnimation = ({
  children,
  name,
  delayed,
}: {
  children: React.ReactNode;
  name?: string;
  delayed?: boolean;
}) => (
  <m.div
    key={name || animation.name}
    style={{
      height: "100%",
      width: "100%",
    }}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={animation.variants}
    transition={delayed ? animation.delayed : animation.transition}
  >
    {children}
  </m.div>
);
