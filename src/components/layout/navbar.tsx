"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Componente para os links do menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Navbar() {
  return (
    <header className="sticky flex justify-center top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <div className="container flex h-16 items-center justify-center" >

        {/* Navigation Menu */}
        <NavigationMenu >
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          About Me
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Learn more about my journey, experience and passions in technology.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about#experience" title="Experience">
                    My professional journey and developed projects.
                  </ListItem>
                  <ListItem href="/about#skills" title="Skills">
                    Technologies and tools I master.
                  </ListItem>
                  <ListItem href="/about#education" title="Education">
                    Academic formation and certifications.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/projects#web" title="Web Development">
                    Web projects with React, Next.js and TypeScript.
                  </ListItem>
                  <ListItem href="/projects#backend" title="Backend">
                    APIs and backend systems with Node.js and Python.
                  </ListItem>
                  <ListItem href="/projects#ai" title="AI/ML">
                    AI and machine learning projects.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
