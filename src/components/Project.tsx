import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
  status: string;
  themeColor: string;
}

export default function Project({
  name,
  description,
  techStack,
  image,
  link,
  status,
  themeColor,
}: Props) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(36.23deg, ${themeColor} 0%, #5bcb8b 101.42%)`,
      }}
      className="relative group p-[0.7px]"
    >
      <div className="flex gap-3 bg-pra-main-500 w-80 h-96 relative z-10">
        <div className="relative w-full h-full">
          <Image
            className="object-cover bg-top"
            src={image}
            fill
            alt={name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            title={name}
          />
        </div>
        <div className="flex flex-col justify-between items-end p-3 pl-0">
          <div className="flex flex-col gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-pra-universe text-pra-text-400 px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
          {link && (
            <Link
              href={link}
              target="_blank"
              aria-label={`Visit ${name}`}
              title={`${name} live website`}
              className="group/arrow grid size-11 place-items-center"
            >
              <AiOutlineArrowRight
                className="project-arrow text-3xl"
                style={{
                  color: themeColor,
                }}
              />
            </Link>
          )}
        </div>
        {status !== "Completed" && (
          <span
            style={{
              background: themeColor,
            }}
            className="project-badge text-pra-text-400 px-2 py-1 absolute left-4 -top-4 -z-10"
          >
            {status}
          </span>
        )}
      </div>
      <p className="project-description pointer-events-none absolute top-1/2 left-3 z-50 -translate-y-1/2 bg-pra-accent px-2 py-1 font-bold">
        {description}
      </p>
    </div>
  );
}
