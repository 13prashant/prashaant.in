import SocialLinks from "./common/SocialLinks";
import Link from "next/link";
import { MEETING_LINK } from "@/utils/constants";

export default function Hero() {
  return (
    <section className="bg-pra-main-500">
      <SocialLinks className="md:hidden justify-end  pra-container pt-5 pb-0 -mb-11" />
      <div className="pra-container">
        <div className="selection:bg-pra-accent">
          <h1 className="max-w-90 text-6xl text-pra-text-400 font-semibold mb-5 md:mb-10 duration-300">
            helping founders & teams{" "}
            <span className="text-pra-accent selection:bg-pra-text-400">
              launch fast
            </span>
            .
          </h1>
          <>
            <p className="text-pra-text-500 text-lg selection:text-pra-text-400">
              I turn ideas into reliable, production-ready web apps — from
              backend systems to polished frontends.
            </p>
            <p className="text-pra-text-400 text-lg selection:text-pra-text-400">
              Looking for a tech partner you can count on?
            </p>
          </>
          <div className="w-fit">
            <Link href={MEETING_LINK} target="_blank">
              <p className="text-pra-accent text-lg mt-10 underline duration-300 selection:text-pra-text-400">
                Let's talk
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
