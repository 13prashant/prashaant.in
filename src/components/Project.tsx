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
    <div className="relative group">
      <div className="flex gap-3 bg-pra-main-500 w-80 h-96 relative z-10">
        <div className="relative w-full h-full">
          <Image className="object-cover bg-top" src={image} fill alt={name} />
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
            <Link href={link} target="_blank">
              <AiOutlineArrowRight
                className="text-3xl hover:scale-125 duration-300"
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
              backgroundColor: themeColor,
            }}
            className="text-pra-text-400 px-2 py-1 absolute left-4 -top-4 -z-10 group-hover:-top-7 duration-300"
          >
            {status}
          </span>
        )}
      </div>
      <p className="absolute top-1/2 left-3 -translate-y-1/2 bg-pra-accent font-bold px-2 py-1 z-50 hidden group-hover:block duration-300">
        {description}
      </p>
    </div>
  );
}
