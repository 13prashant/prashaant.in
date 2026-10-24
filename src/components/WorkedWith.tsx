"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/utils/cn";
import { MEETING_LINK } from "@/utils/constants";
import Title from "./common/Title";
import { startups } from "./helpers";

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

function Tile({
  href,
  className,
  containerClassName,
  linkClassName,
  children,
}: {
  href: string;
  className?: string;
  containerClassName?: string;
  linkClassName?: string;
  children: ReactNode;
}) {
  return (
    <CardContainer
      containerClassName={cn(
        "h-full w-full items-stretch py-0",
        containerClassName,
      )}
      className="h-full w-full self-stretch"
    >
      <CardBody className={cn("h-full w-full", className)}>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex h-full min-h-full w-full touch-manipulation items-center justify-center p-16 [transform-style:preserve-3d] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pra-accent md:p-20",
            linkClassName,
          )}
        >
          {children}
        </Link>
      </CardBody>
    </CardContainer>
  );
}

export default function WorkedWith() {
  const revealRef = useRevealOnce<HTMLDivElement>();
  const [savvy, blinkord, stack] = startups;

  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <div ref={revealRef} className="worked-with-reveal">
          <Title text="Trusted by Teams like" />

          <div className="grid grid-cols-1 gap-[5px] md:grid-cols-4">
            <div className="grid grid-cols-1 gap-[5px] md:col-span-4 md:grid-cols-4 md:items-stretch">
              <Tile
                href={MEETING_LINK}
                className="bg-pra-universe"
                linkClassName="group/yours text-lg text-pra-text-400"
              >
                <div className="flex flex-row items-center gap-4 [transform-style:preserve-3d]">
                  <CardItem translateZ={40}>Yours?</CardItem>
                  <CardItem
                    translateZ={70}
                    className="hidden whitespace-nowrap text-pra-text-500 group-focus-visible/yours:inline md:[@media(hover:hover)_and_(pointer:fine)]:group-hover/yours:inline"
                  >
                    Let&apos;s talk!
                  </CardItem>
                </div>
              </Tile>
              <Tile
                href={savvy.link}
                containerClassName="md:col-span-3"
                className="bg-pra-main-500"
                linkClassName="relative"
              >
                <CardItem
                  translateZ={24}
                  rotateX={6}
                  rotateZ={-3}
                  className="pointer-events-none absolute inset-0 h-full w-full bg-pra-main-500 bg-[url('/assets/startups/savvy-pet-spa-bg.webp')] bg-cover bg-center"
                >
                  {null}
                </CardItem>
                <CardItem translateZ={72}>
                  <span className="relative flex h-[2.18rem] items-center justify-center">
                    <Image
                      src={savvy.logo}
                      width={200}
                      height={200}
                      alt={savvy.name}
                      className="h-full w-auto max-w-none object-contain"
                    />
                  </span>
                </CardItem>
              </Tile>
            </div>
            <Tile
              href={blinkord.link}
              containerClassName="md:col-span-2"
              className="bg-pra-main-500"
            >
              <CardItem translateZ={50}>
                <Image
                  src={blinkord.logo}
                  width={200}
                  height={200}
                  alt={blinkord.name}
                />
              </CardItem>
            </Tile>
            <Tile
              href={stack.link}
              containerClassName="md:col-span-2"
              className="bg-pra-main-500"
            >
              <CardItem translateZ={50}>
                <Image
                  src={stack.logo}
                  width={200}
                  height={200}
                  alt={stack.name}
                />
              </CardItem>
            </Tile>
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
