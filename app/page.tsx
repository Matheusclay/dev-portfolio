import { MainMenu } from "./components/MainMenu"
import { Welcome } from "./Welcome";
import { Projects } from "./components/projects"
import { SkillsSection } from "./components/skills";
import { Footer } from "./components/footer";
import { AssistantBot } from "./components/Assistant-bot"
import Image from "next/image";
import {Sobremim} from "./components/Carrossel";
import { SkillCard } from "@/components/ui/skillCard";

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
      <AssistantBot />
      <SkillsSection />
      <Footer />
      
    </main>
  );
}
