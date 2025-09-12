"use client";

import Image from "next/image";
import Title from "./common/Title";
import { startups } from "./helpers";
import { motion } from "motion/react";
import { getBlurAnimationProps } from "./helpers/getBlurAnimationProps";
import Link from "next/link";
import { MEETING_LINK } from "@/utils/constants";

export default function WorkedWith() {
  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <Title text="Trusted by Teams like" />

        <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden bg-pra-main-500">
          <Link
            href={MEETING_LINK}
            target="_blank"
            className="text-pra-text-400 place-items-center text-lg p-16 md:p-20 md:border-r-[0.5px] border-b-[0.5px] border-pra-text-400/20 hover:bg-pra-main-400/50 duration-300"
          >
            <motion.div {...getBlurAnimationProps({ index: 0, duration: 0.6 })}>
              Yours?
            </motion.div>
          </Link>
          <Link
            href={startups[0]?.link}
            target="_blank"
            className="p-16 md:p-20 place-items-center duration-300 md:col-span-3 border-b-[0.5px] border-pra-text-400/20 z-50 relative bg-[url('/assets/startups/savvy-pet-spa-bg.webp')] hover:bg-pra-main-400/50 bg-cover bg-center"
          >
            <motion.div {...getBlurAnimationProps({ index: 0, duration: 0.6 })}>
              <Image
                src={startups[0]?.logo}
                width={200}
                height={200}
                alt={startups[0]?.name}
              />
            </motion.div>
          </Link>
          <Link
            href={startups[1]?.link}
            target="_blank"
            className="p-16 md:p-20 place-items-center duration-300 border-b-[0.5px] border-pra-text-400/20 md:border-b-0 md:col-span-2 md:border-r-[0.5px] hover:bg-pra-main-400/50"
          >
            <motion.div {...getBlurAnimationProps({ index: 1, duration: 0.6 })}>
              <Image
                src={startups[1]?.logo}
                width={200}
                height={200}
                alt={startups[1]?.name}
              />
            </motion.div>
          </Link>
          <Link
            href={startups[2]?.link}
            target="_blank"
            className="p-16 md:p-20 place-items-center duration-300 hover:bg-pra-main-400/50 md:col-span-2"
          >
            <motion.div {...getBlurAnimationProps({ index: 2, duration: 0.6 })}>
              <Image
                src={startups[2]?.logo}
                width={200}
                height={200}
                alt={startups[2]?.name}
              />
            </motion.div>
          </Link>
        </div>

        <p className="text-pra-text-500 text-lg selection:text-pra-text-400 selection:bg-pra-accent mt-10 duration-300">
          From solo founders to fast-moving startups, I&apos;ve helped teams
          launch MVPs, scale products, and ship with confidence.
        </p>
      </div>
    </section>
  );
}
