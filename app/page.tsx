import { MainMenu } from "./components/MainMenu"
import { Welcome } from "./Welcome";
import {Carousel_sobremim} from "./components/Carousel_sobremim";
import { Projects } from "./components/projects"
import { SkillCard } from "./components/skills";
import { Footer } from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="justify-center items-center flex h-[10vh] ">
        <MainMenu  />
      </div>
      <Welcome/>
      <div>
      <Carousel_sobremim/>
      </div>
      <Projects />
      <SkillCard />
      <Footer />
    </main>
  );
}
