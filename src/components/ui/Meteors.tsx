"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

type Meteor = {
  left: number;
  delay: number;
  duration: number;
};

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const count = number || 20;
    setMeteors(
      Array.from({ length: count }, () => ({
        left: Math.floor(Math.random() * 800 - 400),
        delay: Math.random() * 0.6 + 0.2,
        duration: Math.floor(Math.random() * 8 + 2),
      })),
    );
  }, [number]);

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.05 w-0.05 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className,
          )}
          style={{
            top: 0,
            left: `${meteor.left}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </>
  );
};
