"use client";

import Link from "next/link";
import { MEETING_LINK, WHATSAPP_LINK } from "@/utils/constants";
import { FaCalendar, FaPhone } from "react-icons/fa";
import { motion } from "motion/react";
import { getBlurAnimationProps } from "./helpers/getBlurAnimationProps";

export default function Footer() {
  return (
    <footer className="relative bg-pra-main-500">
      <div className="absolute -top-8 left-8 md:left-20 flex h-8 items-end overflow-hidden duration-300">
        <div className="flex -mb-px h-[2px] md:h-[2.5px] w-40 md:w-96 -scale-x-100 duration-300">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(4,13,33,0)_0%,#040d21_32.29%,rgba(91,203,139,0.3)_67.19%,rgba(91,203,139,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(4,13,33,0)_0%,#040d21_32.29%,rgba(91,203,139,0.3)_67.19%,rgba(91,203,139,0)_100%)]"></div>
        </div>
      </div>
      <div className="pra-container">
        <div className="text-xl md:text-2xl font-extrabold duration-300 mb-8 w-fit">
          <motion.h2
            className="bg-pra-accent"
            {...getBlurAnimationProps({ duration: 0.4 })}
          >
            Have something in mind?
          </motion.h2>
          <motion.h2
            className="text-pra-accent"
            {...getBlurAnimationProps({ duration: 0.6 })}
          >
            I&apos;d love to hear it.
          </motion.h2>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={MEETING_LINK}
            target="_blank"
            className="flex items-center gap-2 text-pra-text-400 underline w-fit hover:text-pra-accent duration-300"
          >
            <FaCalendar className="" />
            Book a Consultation
          </Link>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="flex items-center gap-2 text-pra-text-400 underline w-fit hover:text-pra-accent duration-300"
          >
            <FaPhone />
            Whatsapp Me
          </Link>
        </div>
      </div>
    </footer>
  );
}
