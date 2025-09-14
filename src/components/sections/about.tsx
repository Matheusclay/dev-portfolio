"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".about-card");

      if (cards.length === 0) return;

      // Configuração inicial dos cards
      gsap.set(cards, {
        x: "50%", // Começam fora da tela à direita
        opacity: 0
      });

      // Timeline principal controlada pelo scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000", // 3000px de scroll para 3 cards
          scrub: 1, // Liga a animação ao scroll
          pin: true, // Trava o container na tela
          anticipatePin: 1,
          markers: false,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      // Anima cada card para entrar na tela
      cards.forEach((card, index) => {
        tl.to(card, {
          x: "0%", // Move para a posição normal
          opacity: 1,
          duration: 1,
        }, index * 1) // Stagger de 1s entre cada card
          .to(card, {
            x: "-100%", // Move para fora da tela à esquerda
            opacity: 0,
            duration: 1,
          }, index * 1 + 1); // Mantém visível por um tempo
      });

    }, sectionRef);

    return () => {
      ctx.revert();
      // Limpa todos os ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const aboutData = [
    {
      image: "/images/carousel/image1.jpg",
      title: "Sobre Mim",
      content: "Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web, sempre busco criar soluções elegantes e funcionais que fazem a diferença na vida das pessoas."
    },
    {
      image: "/images/carousel/image2.jpg",
      title: "Minha Jornada",
      content: "Comecei minha jornada na programação há alguns anos e desde então tenho me especializado em tecnologias modernas como React, Next.js, TypeScript e Node.js. Cada projeto é uma oportunidade de aprender e crescer."
    },
    {
      image: "/images/carousel/image3.jpg",
      title: "Minhas Skills",
      content: "Especializado em desenvolvimento frontend com React/Next.js, também tenho experiência com backend em Node.js, bancos de dados, e ferramentas de DevOps. Sempre em busca de novas tecnologias e melhores práticas."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900  text-white"
    >
      {/* Container dos cards */}
      <div className="relative h-full w-full">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="about-card absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Coluna da Imagem */}
              <div className="relative h-96 lg:h-[750px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Coluna do Texto */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {item.title}
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {item.content}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  <span className="text-sm text-gray-400 font-medium">
                    {index + 1} de {aboutData.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
