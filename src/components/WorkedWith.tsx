"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import Title from "./common/Title";
import { startups } from "./helpers";
import Link from "next/link";
import { MEETING_LINK } from "@/utils/constants";

const hoverWash =
  "transition-[background-color] duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1)] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-pra-main-400/50";

function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // Two frames so the pending state paints before the transition starts.
        frame = requestAnimationFrame(() => {
          frame = requestAnimationFrame(() => {
            el.dataset.reveal = "in";
          });
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    el.dataset.reveal = "pending";
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}

export default function WorkedWith() {
  const revealRef = useRevealOnce<HTMLDivElement>();

  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <div ref={revealRef} className="worked-with-reveal">
          <Title text="Trusted by Teams like" />

          <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden bg-pra-main-500">
            <div className="grid grid-cols-1 md:col-span-4 md:grid-cols-4 md:items-stretch">
              <Link
                href={MEETING_LINK}
                target="_blank"
                className="group/yours peer/yours flex h-full min-h-full items-center justify-center text-pra-text-400 text-lg bg-pra-universe p-16 md:p-20 md:border-r-[0.5px] border-b-[0.5px] border-pra-text-400/20 md:focus-visible:col-span-3 md:[@media(hover:hover)_and_(pointer:fine)]:hover:col-span-3"
              >
                <div className="flex flex-row items-center gap-4">
                  Yours?{" "}
                  <span className="hidden whitespace-nowrap text-pra-text-500 md:group-focus-visible/yours:inline md:[@media(hover:hover)_and_(pointer:fine)]:group-hover/yours:inline">
                    Let&apos;s talk!
                  </span>
                </div>
              </Link>
              <Link
                href={startups[0]?.link}
                target="_blank"
                className={`flex h-full min-h-full items-center justify-center p-16 md:p-20 border-b-[0.5px] border-pra-text-400/20 z-50 relative bg-[url('/assets/startups/savvy-pet-spa-bg.webp')] bg-cover bg-center md:col-span-3 md:peer-focus-visible/yours:col-span-1 md:[@media(hover:hover)_and_(pointer:fine)]:peer-hover/yours:col-span-1 ${hoverWash}`}
              >
                <div className="relative flex h-[2.18rem] items-center justify-center">
                  <Image
                    src={startups[0]?.logo}
                    width={200}
                    height={200}
                    alt={startups[0]?.name}
                    className="h-full w-auto max-w-none object-contain"
                  />
                </div>
              </Link>
            </div>
            <Link
              href={startups[1]?.link}
              target="_blank"
              className={`p-16 md:p-20 place-items-center border-b-[0.5px] border-pra-text-400/20 md:border-b-0 md:col-span-2 md:border-r-[0.5px] ${hoverWash}`}
            >
              <Image
                src={startups[1]?.logo}
                width={200}
                height={200}
                alt={startups[1]?.name}
              />
            </Link>
            <Link
              href={startups[2]?.link}
              target="_blank"
              className={`p-16 md:p-20 place-items-center md:col-span-2 ${hoverWash}`}
            >
              <Image
                src={startups[2]?.logo}
                width={200}
                height={200}
                alt={startups[2]?.name}
              />
            </Link>
          </div>

          <p className="text-pra-text-500 text-lg selection:text-pra-text-400 selection:bg-pra-accent mt-10">
            From solo founders to fast-moving startups, I&apos;ve helped teams
            launch MVPs, scale products, and ship with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
