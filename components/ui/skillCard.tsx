// app/components/SkillCard.tsx
import Image from "next/image"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

interface SkillCardProps {
  image: string
  name: string
  description: string
}

export function SkillCard({ image, name, description }: SkillCardProps) {
  return (
    <Card className="items-center text-center hover:bg-foreground hover:text-background transition-colors duration-200">
      <CardHeader className="flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="mb-2"
        />
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
