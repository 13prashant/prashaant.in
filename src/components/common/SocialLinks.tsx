import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { socialAccounts } from "../helpers";
import { cn } from "@/utils/cn";

interface SocialIcons {
  [key: string]: React.ReactElement;
}

const socialIcons: SocialIcons = {
  twitter: <FaTwitter className="text-2xl" />,
  linkedin: <FaLinkedin className="text-2xl" />,
  github: <FaGithub className="text-2xl" />,
};

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-end gap-6 md:gap-10", className)}>
      {socialAccounts.map((account) => (
        <li key={account.id}>
          <Link
            className="hit-target hover-accent inline-flex text-pra-text-400 md:text-2xl"
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
  );
}
