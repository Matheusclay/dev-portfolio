"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

export function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  gsap.registerPlugin(SplitText);

  useEffect(() => {
    if (!sectionRef.current) return
  
    
    const splitTitle = new SplitText(sectionRef.current.querySelector("h1"), {
      type: "chars",
    })
  
    gsap.fromTo(
      splitTitle.chars,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.05 }
    )
  
    
    const splitParagraph = new SplitText(sectionRef.current.querySelector("p"), {
      type: "words",
    })
  
    gsap.fromTo(
      splitParagraph.words,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.8 }
    )
  }, [])

  return (
    <section className="container mx-auto h-screen text-center flex items-center justify-center " ref={sectionRef}>
      <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center ">
        <h1 className="text-4xl lg:text-7xl font-bold mb-6 text-white">
          Bem vindo(a) <br />
          ao meu portfolio :)          
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 "  >
          Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Ver Projetos
          </Button>
          <Button variant="outline" size="lg">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
