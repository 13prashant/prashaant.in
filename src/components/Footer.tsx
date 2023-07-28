import Title from "./common/Title";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="bg-pra-main-500">
      <div className="pra-container">
        <Title text="CONTACT" />
        <h4 className="text-pra-text-500 font-bold">Email</h4>
        <a className="text-pra-text-400" href={`mailto:${EMAIL_ADDRESS}`}>
          {EMAIL_ADDRESS}
        </a>
        <h4 className="text-pra-text-500 font-bold mt-3">Phone</h4>
        <a className="text-pra-text-400" href={`tel:${PHONE_NUMBER}`}>
          {PHONE_NUMBER}
        </a>
      </div>
    </footer>
  );
}
