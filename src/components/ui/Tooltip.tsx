import React from "react";

export const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactElement;
  text: string;
}) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="group/skill relative">
        <span
          className="skill-tooltip absolute -top-10 z-50 flex flex-col items-center justify-center bg-pra-accent text-xs shadow-xl md:-top-16"
          aria-hidden="true"
        >
          <span className="relative z-30 text-xl font-bold md:text-3xl">
            {text}
          </span>
        </span>
        {children}
      </div>
    </div>
  );
};
