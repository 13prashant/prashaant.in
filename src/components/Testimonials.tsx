"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { testimonials } from "./helpers";
import { motion } from "motion/react";
import { getBlurAnimationProps } from "./helpers/getBlurAnimationProps";

export default function Testimonials() {
  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <Marquee
          gradient
          gradientColor="#2c2d31" // = bg-pra-main-400
          gradientWidth={40}
          speed={40}
          pauseOnHover
        >
          <div className="flex">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                className="mx-5 w-full max-w-56 md:max-w-80 bg-pra-main-500 border border-dashed border-pra-accent/30 flex flex-col justify-between hover:border-pra-accent/50 duration-300"
                {...getBlurAnimationProps({ index: idx, duration: 0.6 })}
              >
                <p className="text-xs md:text-base duration-300 text-pra-text-500 p-4 md:p-8 text-balance selection:text-pra-text-400 selection:bg-pra-accent">
                  {testimonial.feedback}
                </p>

                <div className="flex items-center p-4 py-2 md:py-4 md:p-8 border border-dashed border-pra-accent/0 border-t-pra-accent/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="size-8 md:size-12 duration-200 rounded-full mr-4 object-cover"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h3 className="text-pra-text-400 font-semibold text-xs md:text-base duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-pra-text-400/60 text-xs md:text-sm duration-300">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
