"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export function Skills() {
    // Array com as suas skills - fácil de manter e expandir
    const skills = [
        { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
        { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
        { name: "Next.js", icon: "/icons/nextjs.svg", color: "#00FF00" },
        { name: "Tailwind", icon: "/icons/tailwindcss.svg", color: "#339933" },
        { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
        { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
        { name: "HTML", icon: "/icons/html.svg", color: "#E34F26" },    
        { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
        { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
        { name: "GSAP", icon: "/icons/gsap.svg", color: "#47A248" },
        { name: "Playwright", icon: "/icons/playwright.svg", color: "#336791" },
        { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" }
    ];

    return (
        <section className="py-24 relative overflow-hidden h-screen text-center flex items-center center bg-gradient-to-br from-gray-900  text-white">
            <div className="w-full max-w-6xl mx-auto px-0 relative ">
                <h1 className="text-4xl lg:text-7xl font-bold mb-6 text-white">
                    Skills & Technologies
                </h1>
                <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 mx-auto rounded-full mb-4" style={{ width: "300px" }}></div>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 ">
                    The magical tools I use to bring ideas to life
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {/* Usando map() para renderizar os cards dinamicamente */}
                    {skills.map((skill, index) => (
                        <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors">
                            <CardHeader className="pb-2">
                                <div className="flex justify-center items-center h-16">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={48}
                                        height={48}
                                        className="transition-transform hover:scale-110"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-center font-medium text-white">
                                    {skill.name}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section >
    )
}
