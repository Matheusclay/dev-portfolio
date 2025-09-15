import { Hero, About, Skills } from "@/components/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
