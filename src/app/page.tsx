import { Hero, About } from "@/components/sections";
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
    </div>
  );
}
