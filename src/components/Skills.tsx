"use client";

import Image from "next/image";
import Title from "./common/Title";
import { programmingSkills, developmentTools } from "./helpers";
import { Tooltip } from "./ui/Tooltip";
import { motion } from "motion/react";

interface Skill {
  name: string;
  image: string;
}

function Skill({ name, image }: Skill) {
  return (
    <Tooltip text={name}>
      <div className="size-16 grid place-items-center">
        <Image src={image} width={60} height={60} alt={name} title={name} />
      </div>
    </Tooltip>
  );
}

export default function Skills() {
  return (
    <section className="bg-pra-main-500">
      <div className="pra-container">
        <Title text="Skills" />

        <motion.h4
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "linear" }}
          className="text-pra-text-400 font-semibold text-lg mt-10 mb-5"
        >
          Programming & Web Development
        </motion.h4>
        <div className="flex gap-5 flex-wrap">
          {programmingSkills.map((skill, idx) => (
            <motion.div
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + idx * 0.1, ease: "linear" }}
              key={skill.id}
            >
              <Skill name={skill.name} image={skill.image} />
            </motion.div>
          ))}
        </div>

        <motion.h4
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "linear" }}
          className="text-pra-text-400 font-semibold text-lg mt-16 mb-5"
        >
          Development Tools
        </motion.h4>
        <div className="flex gap-5 flex-wrap">
          {developmentTools.map((skill, idx) => (
            <motion.div
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + idx * 0.1, ease: "linear" }}
              key={skill.id}
            >
              <Skill name={skill.name} image={skill.image} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
