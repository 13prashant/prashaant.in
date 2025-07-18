"use client";

import Image from "next/image";
import Title from "./common/Title";
import { startups } from "./helpers";
import { motion } from "motion/react";

export default function WorkedWith() {
  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <Title text="Trusted by Teams like" />

        <div className="flex flex-wrap gap-5">
          {startups.map((startup, idx) => (
            <motion.div
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + idx * 0.1, ease: "linear" }}
              key={startup.id}
              className="py-5 pl-0 pr-10 grid place-items-center hover:scale-105 duration-300"
            >
              <Image
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
