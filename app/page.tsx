import { MainMenu } from "./components/MainMenu"
import { CardWithForm } from "./components/CardSkills"
export default function Home() {
  return (
    <main>
      <div className="justify-center items-center flex h-[10vh] ">

        <MainMenu  />
      </div>
      <div>
        <CardWithForm/>
      </div>
    </main>
  );
}
