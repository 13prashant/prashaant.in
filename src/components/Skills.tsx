import Image from "next/image";
import Title from "./common/Title";
import { programmingSkills, developmentTools } from "./helpers";
import { Tooltip } from "./ui/Tooltip";

interface Skill {
  name: string;
  image: string;
}

function Skill({ name, image }: Skill) {
  return (
    <Tooltip text={name}>
      <Image src={image} width={60} height={60} alt={name} title={name} />
    </Tooltip>
  );
}

export default function Skills() {
  return (
    <section className="bg-pra-main-500">
      <div className="pra-container">
        <h1 className="max-w-90 text-6xl text-pra-text-400 font-semibold mb-5 md:mb-10 duration-300">
          & building things for <span className="text-pra-accent">web</span>.
        </h1>
        <p className="text-pra-text-500 text-lg">
          I help businesses and individuals create powerful, efficient, and
          scalable web applications. <br /> From robust backend systems to
          seamless, user-friendly interfaces, I handle every aspect of web
          development. <br /> By collaborating with me, you'll get a
          high-quality, tailored solution designed to meet your goals and grow
          with your business.
        </p>
        <p className="text-pra-text-500 text-lg mb-24 mt-10">
          Let&apos;s build something impactful together!
        </p>

        <Title text="SKILLS" />

        <h4 className="text-pra-text-400 font-semibold text-lg mt-10 mb-5">
          Programming & Web Development
        </h4>
        <div className="flex gap-5 flex-wrap">
          {programmingSkills.map((skill) => (
            <Skill key={skill.id} name={skill.name} image={skill.image} />
          ))}
        </div>

        <h4 className="text-pra-text-400 font-semibold text-lg mt-16 mb-5">
          Development Tools
        </h4>
        <div className="flex gap-5 flex-wrap">
          {developmentTools.map((skill) => (
            <Skill key={skill.id} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
