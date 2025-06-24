import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Sobremim() {
  // Dados personalizados para cada slide
  const slides = [
    {
      titulo: "Sobre Mim",
      descricao:
        "Sou um desenvolvedor apaixonado por tecnologia e inovação. Gosto de criar soluções que impactam positivamente a vida das pessoas.",
      imagem: "/images/sobremim.png",
    },
    {
      titulo: "Experiência",
      descricao:
        "Tenho experiência com desenvolvimento web, utilizando tecnologias como React, Next.js, Laravel e bancos de dados relacionais.",
      imagem: "/images/foto2.png",
    },
    {
      titulo: "Projetos",
      descricao:
        "Já participei de diversos projetos acadêmicos e pessoais. Sempre busco evoluir através de novos desafios.",
      imagem: "/images/foto3.png",
    },
    {
      titulo: "Formação",
      descricao:
        "Sou graduando em Análise e Desenvolvimento de Sistemas, com foco em backend e segurança da informação.",
      imagem: "/images/foto4.png",
    },
    {
      titulo: "Objetivo",
      descricao:
        "Meu objetivo é contribuir em equipes de desenvolvimento, aprender constantemente e crescer profissionalmente.",
      imagem: "/images/foto5.png",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full py-10">
      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-4">
                <Card className="h-64 flex flex-row items-center justify-between overflow-hidden">
                  <CardContent className="flex flex-col justify-center w-2/3 p-6">
                    <h2 className="text-2xl font-bold mb-2">{slide.titulo}</h2>
                    <p className="text-muted-foreground">{slide.descricao}</p>
                  </CardContent>
                  <div className="w-1/3 h-full">
                    <img
                      src={slide.imagem}
                      alt={`Imagem ${index + 1}`}
                      className="w-full h-full object-cover rounded-r-lg"
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
