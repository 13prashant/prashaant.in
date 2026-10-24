"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { testimonials } from "./helpers";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="hover-border-accent mx-5 flex w-full max-w-56 shrink-0 flex-col justify-between border border-dashed border-pra-accent/30 bg-pra-main-500 md:max-w-80">
      <p className="text-balance p-4 text-xs text-pra-text-500 selection:bg-pra-accent selection:text-pra-text-400 md:p-8 md:text-base">
        {testimonial.feedback}
      </p>

      <div className="flex items-center border border-dashed border-pra-accent/0 border-t-pra-accent/30 p-4 py-2 md:p-8 md:py-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          className="mr-4 size-8 rounded-full object-cover md:size-12"
          width={100}
          height={100}
        />
        <div>
          <h3 className="text-xs font-semibold text-pra-text-400 md:text-base">
            {testimonial.name}
          </h3>
          <p className="text-xs text-pra-text-400/60 md:text-sm">
            {testimonial.designation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const cards = testimonials.map((testimonial) => (
    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
  ));

  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <div className="quotes-motion">
          <Marquee
            gradient
            gradientColor="#2c2d31"
            gradientWidth={40}
            speed={40}
            pauseOnHover
          >
            <div className="flex">{cards}</div>
          </Marquee>
        </div>
        <div className="quotes-static">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
