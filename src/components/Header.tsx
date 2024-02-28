import Title from "./common/Title";
import { Meteors } from "./ui/meteors";
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
          <h1 className="text-xl md:text-2xl text-pra-text-400 font-extrabold duration-300">
            hi,👋 I'm Prashant,
          </h1>
        </div>
        <ul className="flex items-end gap-5 md:gap-10 duration-300">
          {socialAccounts.map((account) => (
            <li>
              <a
                className="md:text-2xl text-pra-text-400 hover:text-pra-accent duration-300"
                href={account.link}
                target="_blank"
                aria-label={`Visit Prashant's ${account.name} page`}
              >
                {socialIcons[account.name.toLowerCase()]}
              </a>
            </li>
          ))}
        </ul>
        <Meteors number={7} />
      </div>
    </header>
  );
}
