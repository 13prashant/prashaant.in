import { HTMLMotionProps } from "motion/react";

// TODO: Make use of HTMLMotionProps<"div"> as type
export const getBlurAnimationProps = ({
  index,
  duration = 0.6,
}: {
  index?: number;
  duration?: number;
}): any => {
  // Early return for server-side rendering
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {};
  }

  // Check specifically for Safari browser by ensuring it has "Safari" but not "Chrome" in user agent
  const isSafari =
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome") &&
    !navigator.userAgent.includes("Chromium");

  // Safari glitches with blur animations - improved detection
  if (isSafari) {
    return {};
  }

  return {
    initial: { filter: "blur(10px)" },
    whileInView: { filter: "blur(0px)" },
    viewport: { once: true },
    transition: index
      ? { duration: duration + index * 0.1, ease: "linear" }
      : { duration: duration, ease: "linear" },
  };
};
