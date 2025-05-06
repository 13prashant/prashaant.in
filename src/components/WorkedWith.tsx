import Image from "next/image";
import Title from "./common/Title";
import { startups } from "./helpers";

export default function WorkedWith() {
  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <Title text="Startups / SMEs" />

        <div className="flex flex-wrap gap-5">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="py-5 pl-0 pr-10 grid place-items-center hover:scale-105 duration-300"
            >
              <Image
                src={startup.logo}
                width={200}
                height={200}
                alt={startup.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
