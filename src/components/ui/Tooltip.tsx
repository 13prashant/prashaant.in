"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactElement;
  text: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0); // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className="relative group"
        onMouseEnter={() => setHoveredIndex(text)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence mode="wait">
          {hoveredIndex === text && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-10 md:-top-16 flex text-xs bg-pra-accent flex-col items-center justify-center z-50 shadow-xl"
            >
              <h3 className="font-bold relative z-30 text-xl md:text-3xl">
                {text}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
        {children}
      </div>
    </div>
  );
};
