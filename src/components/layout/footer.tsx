"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <h3 className="text-lg font-bold mb-2">Seu Nome</h3>
            <p className="text-muted-foreground">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" className="text-muted-foreground hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
