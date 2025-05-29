import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

export function Welcome() {
  return (
    <section className="w-full grid lg:grid-cols-2 place-items-center gap-10 py-20 px-20 md:px-32 md:py-32">
      <div className="text-center lg:text-start space-y-6">
        <div className="text-4xl md:text-5xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Seja
            </span>{" "}
            Bem Vindo
          </h1>{" "}
          para{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Nosso Portifólio
            </span>{" "}
            de desenvolvedor
          </h2>
        </div>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>
      </div>

      {/* cards */}
      <div className="z-10">
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
          <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt="" src="https://github.com/shadcn.png" />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">John Doe React</CardTitle>
                <CardDescription>@john_doe</CardDescription>
              </div>
            </CardHeader>

            <CardContent>This landing page is awesome!</CardContent>
          </Card>

          {/* Team */}
          <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <Avatar className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover">
                <AvatarImage
                  alt="user avatar"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>

              <CardTitle className="text-center">Frontend Developer</CardTitle>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p>
                Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
                natusm.
              </p>
            </CardContent>

            <CardFooter>
              <div>
                <a
                  rel="noreferrer noopener"
                  href=""
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span className="sr-only">Github icon</span>
                  <Github className="w-5 h-5" />
                </a>
                <a
                  rel="noreferrer noopener"
                  href=""
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span className="sr-only">X icon</span>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-foreground w-5 h-5"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>

                <a
                  rel="noreferrer noopener"
                  href=""
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span className="sr-only">Linkedin icon</span>
                  <Linkedin size="20" />
                </a>
              </div>
            </CardFooter>
          </Card>

          {/* Pricing */}
          <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                Free
                <Badge variant="secondary" className="text-sm text-primary">
                  Most popular
                </Badge>
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">$0</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>
                Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">Start Free Trial</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

          </Card>

          {/* Service */}
          <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
            <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
              <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                <Lightbulb />
              </div>
              <div>
                <CardTitle>Light & dark mode</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet consect adipisicing elit.
                  Consectetur natusm.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
