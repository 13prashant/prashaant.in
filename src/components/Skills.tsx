import Image from "next/image";
import Title from "./common/Title";
import { programmingSkills, developmentTools } from "./helpers";

interface Skill {
  name: string;
  image: string;
}

function Skill({ name, image }: Skill) {
  return (
    <div className="relative group flex">
      <Image src={image} width={60} height={60} alt={name} title={name} />
      <span className="hidden bg-pra-universe text-pra-text-400 absolute -top-10 -right-5 z-50 group-hover:block duration-300">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="bg-pra-main-500">
      <div className="pra-container">
        <h1 className="max-w-90 text-6xl text-pra-text-400 font-semibold mb-5 md:mb-10 duration-300">
          & building things for <span className="text-pra-accent">web</span>.
        </h1>
        <p className="text-pra-text-500 text-lg mb-24">
          As a Full-Stack Engineer, I specialize in utilizing JavaScript
          Technologies to build complete web applications, including MongoDB,
          Express, React, and Node.js. My expertise covers the entire stack,
          from the backend API systems to the front-end user interfaces. With my
          experience, I have a proven ability to design and develop
          high-quality, user-friendly, and scalable web applications.
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
