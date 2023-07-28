import Image from "next/image";
import Title from "./common/Title";
import { programmingSkills, developmentTools } from "./helpers";

export default function Skills() {
  return (
    <section className="bg-pra-main-500">
      <div className="pra-container">
        <p className="text-pra-text-500 text-lg mb-24">
          As a Full Stack Developer, I specialize in utilizing JavaScript
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
            <Image
              key={skill.id}
              src={skill.image}
              width={60}
              height={60}
              alt={skill.name}
            />
          ))}
        </div>

        <h4 className="text-pra-text-400 font-semibold text-lg mt-16 mb-5">
          Development Tools
        </h4>
        <div className="flex gap-5 flex-wrap">
          {developmentTools.map((skill) => (
            <Image
              key={skill.id}
              src={skill.image}
              width={60}
              height={60}
              alt={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
