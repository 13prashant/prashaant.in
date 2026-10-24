import Link from "next/link";
import { MEETING_LINK, WHATSAPP_LINK } from "@/utils/constants";
import { FaCalendar, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-pra-main-500">
      <div className="absolute -top-8 left-8 md:left-20 flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] md:h-[2.5px] w-40 md:w-96 -scale-x-100">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(4,13,33,0)_0%,#040d21_32.29%,rgba(91,203,139,0.3)_67.19%,rgba(91,203,139,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(4,13,33,0)_0%,#040d21_32.29%,rgba(91,203,139,0.3)_67.19%,rgba(91,203,139,0)_100%)]"></div>
        </div>
      </div>
      <div className="pra-container">
        <div className="text-xl md:text-2xl font-extrabold mb-8 w-fit">
          <h2 className="bg-pra-accent">Have something in mind?</h2>
          <h2 className="text-pra-accent">I&apos;d love to hear it.</h2>
        </div>
        <div className="flex flex-col gap-6">
          <Link
            href={MEETING_LINK}
            target="_blank"
            className="hit-target hover-accent flex items-center gap-2 text-pra-text-400 underline w-fit"
          >
            <FaCalendar />
            Book a Consultation
          </Link>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="hit-target hover-accent flex items-center gap-2 text-pra-text-400 underline w-fit"
          >
            <FaPhone />
            Whatsapp Me
          </Link>
        </div>
      </div>
    </footer>
  );
}
