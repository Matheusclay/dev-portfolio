import { SkillCard } from "@/components/ui/skillCard"
import { Code, Cpu, Library, Palette, Settings2 } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      name: "React",
      icon: <Library className="w-full h-full" />,
      description: "Biblioteca para construção de interfaces modernas.",
    },
    {
      name: "Next.js",
      icon: <Cpu className="w-full h-full" />,
      description: "Framework React com SSR, SSG e rotas de API.",
    },
    {
      name: "TypeScript",
      icon: <Code className="w-full h-full" />,
      description: "Tipagem estática para maior segurança em JS.",
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="w-full h-full" />,
      description: "Framework utilitário para criação rápida de layouts.",
    },
    {
      name: "ShadCN/UI",
      icon: <Settings2 className="w-full h-full" />,
      description: "Componentes acessíveis com estilização via Tailwind.",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto py-20">
      <h2 className="text-2xl font-bold text-center mb-10">SKILLS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  )
}