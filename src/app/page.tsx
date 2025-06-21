import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WorkedWith from "@/components/WorkedWith";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkedWith />
      <Skills />
      <Testimonials />
    </main>
  );
}
