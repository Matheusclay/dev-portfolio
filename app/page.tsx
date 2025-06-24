import { MainMenu } from "./components/MainMenu"
import { Welcome } from "./Welcome";
import { Projects } from "./components/projects"
import { SkillCard } from "./components/skills";
import { Footer } from "./components/footer";
import Image from "next/image";
import {Sobremim} from "./components/Carrossel";
import {Video} from "./components/video";

export default function Home() {
  return (
    <main>
      <div className="justify-center items-center flex h-[10vh] ">
        <MainMenu  />
      </div>
      <Welcome/>
      <Sobremim/>
      <Projects />
      <SkillCard />
      <Video />
      <Footer />
    </main>
  );
}
