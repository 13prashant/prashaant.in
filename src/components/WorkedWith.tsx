"use client";

import Image from "next/image";
import Title from "./common/Title";
import { startups } from "./helpers";
import { motion } from "motion/react";
import { getBlurAnimationProps } from "./helpers/getBlurAnimationProps";

export default function WorkedWith() {
  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <Title text="Trusted by Teams like" />

        <div className="flex flex-wrap gap-5">
          {startups.map((startup, idx) => (
            <motion.div
              key={startup.id}
              className="py-5 pl-0 pr-10 grid place-items-center hover:scale-105 duration-300"
              {...getBlurAnimationProps({ index: idx, duration: 0.6 })}
            >
              <Image
                className="size-auto"
                src={startup.logo}
                width={200}
                height={200}
                alt={startup.name}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-pra-text-500 text-lg selection:text-pra-text-400 selection:bg-pra-accent mt-10 duration-300">
          From solo founders to fast-moving startups, I&apos;ve helped teams
          launch MVPs, scale products, and ship with confidence.
        </p>
      </div>
    </section>
  );
}
