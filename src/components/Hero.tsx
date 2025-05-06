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
            & building things for{" "}
            <span className="text-pra-accent selection:bg-pra-text-400">
              web
            </span>
            .
          </h1>
          <p className="text-pra-text-500 text-lg selection:text-pra-text-400">
            I help businesses and individuals create powerful, efficient, and
            scalable web applications. <br /> From robust backend systems to
            seamless, user-friendly interfaces, I handle every aspect of web
            development. <br /> By collaborating with me, you'll get a
            high-quality, tailored solution designed to meet your goals and grow
            with your business.
          </p>
          <div className="w-fit">
            <Link href={MEETING_LINK} target="_blank">
              <p className="text-pra-text-500 text-lg mt-10 underline hover:text-pra-accent duration-300 selection:text-pra-text-400">
                Let&apos;s build something impactful together!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
