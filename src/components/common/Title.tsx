"use client";

import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { getBlurAnimationProps } from "../helpers/getBlurAnimationProps";

interface Props {
  text: string;
  className?: string;
}

export default function Title({ text, className }: Props) {
  return (
    <motion.h3
      className={cn(
        "bg-pra-accent font-bold w-fit mb-5 md:mb-10 duration-300",
        className
      )}
      {...getBlurAnimationProps({ duration: 0.5 })}
    >
      {text}
    </motion.h3>
  );
}
