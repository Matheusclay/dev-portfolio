"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Smartphone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const projetos: { title: string; href: string }[] = [
    { title: "Gerenciador de Fábrica de Móveis", href: "https://github.com/Matheusclay/Eletiva4_FabricadeMoveis" },
    { title: "Gerenciador de Estúdio de Dança", href: "https://github.com/pablo-sa10/Estudio-de-danca" },
    { title: "Gerenciador de Estúdio de Tatuagem", href: "https://github.com/pedrohcornetti/EstudioDeTatuagem" },
    { title: "Gerenciador de Empresa de Construção", href: "https://github.com/esmerdel/EmpresaConstrucao" },
    { title: "Gerenciador de Agência de Viagens", href: "https://github.com/Deigosz/agviagens" },
    { title: "Gerenciador Central de Eventos", href: "https://github.com/LucasSantz1/PHP-FATEC/tree/main/Linguagem%20de%20Programa%C3%A7%C3%A3o%20IV/CentralDeEventos" },
    { title: "Gerenciador de Transportadora", href: "https://github.com/EdyFS/projetotransportadora" },
  ];

  return (
    <footer
      className={cn(
        "w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700",
        "pt-8 pb-6 px-4"
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* ROW PRINCIPAL: DUAS COLUNAS */}
        <div className="flex flex-col md:flex-row">
          {/* Coluna 1: Projetos */}
          <div className="w-full md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
              Projetos
            </h3>
            <ul className="space-y-1">
              {projetos.map((projeto) => (
                <li key={projeto.title}>
                  <Link
                    href={projeto.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-sm"
                  >
                    {projeto.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2: Contato */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
              Contato
            </h3>
            <ul className="space-y-2">
              {/* GitHub */}
              <li className="flex items-center space-x-2">
                <Github size={18} className="text-gray-600 dark:text-gray-300" />
                <Link
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-sm"
                >
                  GitHub
                </Link>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center space-x-2">
                <Linkedin size={18} className="text-gray-600 dark:text-gray-300" />
                <Link
                  href="https://linkedin.com/in/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-sm"
                >
                  LinkedIn
                </Link>
              </li>

              {/* Twitter */}
              <li className="flex items-center space-x-2">
                <Twitter size={18} className="text-gray-600 dark:text-gray-300" />
                <Link
                  href="https://twitter.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-sm"
                >
                  Twitter
                </Link>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center space-x-2">
                <Smartphone size={18} className="text-green-500 dark:text-green-400" />
                <Link
                  href="https://wa.me/5518996862526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-sm"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SEGUNDA LINHA: COPYRIGHT CENTRALIZADO */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Fundão do Cornetti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
