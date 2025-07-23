import { HTMLMotionProps } from "motion/react";

// TODO: Make use of HTMLMotionProps<"div"> as type
export const getBlurAnimationProps = ({
  index,
  duration = 0.6,
}: {
  index?: number;
  duration?: number;
}): any => ({
  initial: { filter: "blur(10px)" },
  whileInView: { filter: "blur(0px)" },
  viewport: { once: true },
  transition: index
    ? { duration: duration + index * 0.1, ease: "linear" }
    : { duration: duration, ease: "linear" },
});
