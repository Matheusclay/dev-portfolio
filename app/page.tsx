import { MainMenu } from "./components/MainMenu"
import { Welcome } from "./Welcome";
import { Projects } from "./components/projects"
import { AssistantBot } from "./components/Assistant-bot"

export default function Home() {
  return (
    <main>
      <div className="justify-center items-center flex h-[10vh] ">
        <MainMenu  />
      </div>
      <Welcome/>
      <Projects />
      <AssistantBot />
    </main>
  );
}
