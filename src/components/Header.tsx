import Title from "./common/Title";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { socialAccounts } from "./helpers";

interface SocialIcons {
  [key: string]: React.ReactElement;
}

const socialIcons: SocialIcons = {
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  github: <FaGithub />,
};

export default function Header() {
  return (
    <header className="bg-pra-universe">
      <div className="pra-container relative">
        <Title text="Fullstack Engineer" />
        <h1 className="text-xl md:text-2xl text-pra-text-400 font-extrabold">
          hi,👋 I'm Prashant.
        </h1>
        <ul className="absolute top-0 bottom-0 right-10 flex flex-col justify-around">
          {socialAccounts.map((account) => (
            <li>
              <a
                className="md:text-2xl text-pra-text-400 hover:text-pra-accent duration-300"
                href={account.link}
                target="_blank"
              >
                {socialIcons[account.name.toLowerCase()]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
