import Link from "next/link";
import Title from "./common/Title";
import { Spotlight } from "./ui/Spotlight";
import { Meteors } from "./ui/Meteors";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { socialAccounts } from "./helpers";

interface SocialIcons {
  [key: string]: React.ReactElement;
}

const socialIcons: SocialIcons = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
};

export default function Header() {
  return (
    <header className="bg-pra-universe">
      <div className="pra-container flex justify-between relative">
        <div>
          <Title text="Full-Stack Engineer" />
          <h2 className="text-xl md:text-2xl text-pra-text-400 font-extrabold duration-300">
            hi,👋 I'm Prashant,
          </h2>
          <p className="text-white text-sm mt-2 font-semibold">
            speaking Gujarati, Hindi, English, Javascript
          </p>
        </div>
        <ul className="flex items-end gap-5 md:gap-10 duration-300">
          {socialAccounts.map((account) => (
            <li key={account.id}>
              <Link
                className="md:text-2xl text-pra-text-400 hover:text-pra-accent duration-300"
                href={account.link}
                target="_blank"
                aria-label={`Visit Prashant's ${account.name} page`}
                title={`Prashant's ${account.name} account`}
              >
                {socialIcons[account.name.toLowerCase()]}
              </Link>
            </li>
          ))}
        </ul>
        <Spotlight className="top-0 left-0" fill="steelblue" />
        <Meteors className="hidden lg:block" number={7} />
      </div>
    </header>
  );
}
