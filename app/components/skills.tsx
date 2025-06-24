import Image from "next/image"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export function SkillCard() {
  const skills = [
    {
      name: "React",
    //   image: "/logos/react.png",
      description: "Biblioteca para construção de interfaces modernas.",
    },
    {
      name: "Next.js",
    //   image: "/logos/nextjs.png",
      description: "Framework React com SSR, SSG e rotas de API.",
    },
    {
      name: "TypeScript",
    //   image: "/logos/typescript.png",
      description: "Tipagem estática para maior segurança em JS.",
    },
    {
      name: "Tailwind CSS",
    //   image: "/logos/tailwind.png",
      description: "Framework utilitário para criação rápida de layouts.",
    },
    {
      name: "ShadCN/UI",
    //   image: "/logos/shadcn.png",
      description: "Componentes acessíveis com estilização via Tailwind.",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto py-20">
      <h2 className="text-2xl font-bold text-center mb-10">SKILLS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col items-center text-center hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            <CardHeader className="flex flex-col items-center">
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{skill.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
