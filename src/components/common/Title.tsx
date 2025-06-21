"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function Title({ text, className }: Props) {
  return (
    <motion.h3
      initial={{ filter: "blur(10px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "bg-pra-accent font-bold w-fit mb-5 md:mb-10 duration-300",
        className
      )}
    >
      {text}
    </motion.h3>
  );
}
