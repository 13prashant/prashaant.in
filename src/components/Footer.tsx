import Link from "next/link";
import { MEETING_LINK, WHATSAPP_LINK } from "@/utils/constants";
import { FaCalendar, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="pra-container">
        <h2 className="text-xl md:text-2xl text-pra-accent font-extrabold duration-300 mb-8">
          Have something in mind? I’d love to hear it.
        </h2>
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
