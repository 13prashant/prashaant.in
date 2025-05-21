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
        <Title text="Skills" />

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
