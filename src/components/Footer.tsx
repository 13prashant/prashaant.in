import Link from "next/link";
import Title from "./common/Title";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/utils/constants";

export default function Footer() {
  return (
    <footer>
      <div className="pra-container">
        <Title text="CONTACT" />
        <h4 className="text-pra-text-500 font-bold">Email</h4>
        <Link
          className="text-pra-text-400 hover:text-pra-accent duration-300"
          href={`mailto:${EMAIL_ADDRESS}`}
          title="Prashant's email address"
        >
          {EMAIL_ADDRESS}
        </Link>
        <h4 className="text-pra-text-500 font-bold mt-3">Phone</h4>
        <Link
          className="text-pra-text-400 hover:text-pra-accent duration-300"
          href={`tel:${PHONE_NUMBER}`}
          title="Prashant's mobile number"
        >
          {PHONE_NUMBER}
        </Link>
      </div>
    </footer>
  );
}
