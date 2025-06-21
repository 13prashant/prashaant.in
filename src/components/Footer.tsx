import Link from "next/link";
import { MEETING_LINK, WHATSAPP_LINK } from "@/utils/constants";
import { FaCalendar, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pra-main-500">
      <div className="pra-container">
        <div className="text-xl md:text-2xl font-extrabold duration-300 mb-8 w-fit">
          <h2 className="bg-pra-accent">Have something in mind?</h2>
          <h2 className="text-pra-accent">I&apos;d love to hear it.</h2>
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
