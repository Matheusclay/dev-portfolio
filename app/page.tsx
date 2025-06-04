import { MainMenu } from "./components/MainMenu"
import { Welcome } from "./Welcome";
import { Projects } from "./components/projects"
import { Footer } from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="justify-center items-center flex h-[10vh] ">
        <MainMenu  />
      </div>
      <Welcome/>
      <Projects />
      <Footer />
    </main>
  );
}
