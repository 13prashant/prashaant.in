"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { socialAccounts } from "../helpers";
import { cn } from "@/utils/cn";

interface SocialIcons {
  [key: string]: React.ReactElement;
}

const socialIcons: SocialIcons = {
  linkedin: <FaLinkedin className="text-2xl" />,
  github: <FaGithub className="text-2xl" />,
};

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul
      className={cn("flex items-end gap-5 md:gap-10 duration-300", className)}
    >
      {socialAccounts.map((account, idx) => (
        <motion.li
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 + idx * 0.1, ease: "linear" }}
          key={account.id}
        >
          <Link
            className="md:text-2xl text-pra-text-400 hover:text-pra-accent duration-300"
            href={account.link}
            target="_blank"
            aria-label={`Visit Prashant's ${account.name} page`}
            title={`Prashant's ${account.name} account`}
          >
            {socialIcons[account.name.toLowerCase()]}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
