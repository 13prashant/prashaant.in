import Image from "next/image";
import Title from "./common/Title";
import { myJourney } from "./helpers";

export default function MyJourney() {
  return (
    <section className="bg-pra-main-400">
      <div className="pra-container">
        <Title text="MY JOURNEY" />
        <div className="flex flex-col gap-16 justify-center items-center">
          {myJourney.map((journey) => (
            <div
              key={journey.id}
              className={`${
                journey.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } flex gap-10`}
            >
              <Image
                className="hidden md:block"
                src={journey.image}
                width={350}
                height={350}
                alt={journey.designation}
              />
              <div className="flex flex-col gap-3 justify-center">
                <div className={`flex justify-between`}>
                  <div>
                    <h4 className="text-pra-text-500 text-lg font-bold">
                      {journey.period}
                    </h4>
                    <h3 className="text-pra-accent text-lg font-bold">
                      {journey.designation}
                    </h3>
                  </div>
                  <Image
                    className="md:hidden"
                    src={journey.image}
                    width={100}
                    height={100}
                    alt={journey.designation}
                  />
                </div>
                <p className="text-pra-text-400 opacity-70">
                  {journey.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
