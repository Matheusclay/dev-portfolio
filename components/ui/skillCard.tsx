import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"


interface SkillCardProps {
  icon: React.ReactNode
  name: string
  description: string
}

export function SkillCard({ icon, name, description }: SkillCardProps) {
  return (
    <Card className="items-center text-center hover:bg-foreground hover:text-background transition-colors duration-200">
      <CardHeader className="flex flex-col items-center">
        <div className="mb-2 w-12 h-12">{icon}</div>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}