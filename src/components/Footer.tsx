"use client";

import Link from "next/link";
import { MEETING_LINK, WHATSAPP_LINK } from "@/utils/constants";
import { FaCalendar, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-pra-main-500">
      <div className="pra-container">
        <div className="text-xl md:text-2xl font-extrabold duration-300 mb-8 w-fit">
          <motion.h2
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-pra-accent"
          >
            Have something in mind?
          </motion.h2>
          <motion.h2
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="text-pra-accent"
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
