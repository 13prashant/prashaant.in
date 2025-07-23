"use client";

import Title from "./common/Title";
import { Spotlight } from "./ui/Spotlight";
import { Meteors } from "./ui/Meteors";
import SocialLinks from "./common/SocialLinks";
import { motion } from "motion/react";
import { getBlurAnimationProps } from "./helpers/getBlurAnimationProps";

export default function Header() {
  return (
    <header className="bg-pra-universe">
      <div className="pra-container flex justify-between relative">
        <div>
          <Title text="Full-Stack Engineer" />
          <motion.h2
            className="text-xl md:text-2xl text-pra-text-400 font-extrabold duration-300"
            {...getBlurAnimationProps({ duration: 0.6 })}
          >
            hi,👋 I'm Prashant,
          </motion.h2>
        </div>
        <SocialLinks className="hidden md:flex" />
        <Spotlight className="top-0 left-0" fill="steelblue" />
        <Meteors className="hidden lg:block" number={7} />
      </div>
    </header>
  );
}
