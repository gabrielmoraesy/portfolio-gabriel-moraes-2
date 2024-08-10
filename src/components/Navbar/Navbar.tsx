import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Gitlab, Instagram, Linkedin } from "lucide-react"

import { ModeToggle } from "../ThemeProvider/fragments/ModeToggle"

const Navbar = () => {
  return (
    <div className="bg-black">
      <nav className="max-w-[1320px] mx-auto flex justify-between items-center h-[8vh] bg-black text-white">
        <h1 className="text-xl uppercase text-gradient-color">Gabriel Moraes</h1>
        <div className="flex gap-4 items-center">
          <div className="flex gap-6 uppercase text-sm">
            <a href="#home">Início</a>
            <a href="#about">Sobre</a>
            <a href="#projects">Projetos</a>
            <a href="">Conhecimentos</a>
            <a href="">Contato</a>
          </div>

          <div className="bg-[#ccc] h-4 w-[1px]" />

          <div className="flex gap-1">
            <TooltipProvider>
              <ModeToggle />

              <Tooltip>
                <TooltipTrigger className="hover:bg-gray p-2 rounded-lg">
                  <Gitlab />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Gitlab</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="hover:bg-gray p-2 rounded-lg">
                  <Github />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="hover:bg-gray p-2 rounded-lg">
                  <Linkedin />
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="hover:bg-gray p-2 rounded-lg">
                  <Instagram />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar