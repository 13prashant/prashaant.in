import Title from "./common/Title";
import Project from "./Project";
import { projects } from "./helpers";

export default function Projects() {
  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <Title text="PROJECTS" className="mb-12" />
        <div className="flex flex-wrap justify-center lg:justify-start gap-9 duration-300">
          {projects
            .sort((a, b) => b.id - a.id)
            .map((project) => (
              <Project
                key={project.id}
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                image={project.image}
                link={project.link}
                status={project.status}
                themeColor={project.themeColor}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
