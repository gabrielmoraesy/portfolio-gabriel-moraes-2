import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Gitlab, Instagram, Linkedin } from "lucide-react"

import { ModeToggle } from "../ThemeProvider/fragments/ModeToggle"

const Navbar = () => {
  return (
    <nav className="max-w-[1320px] mx-auto flex justify-between items-center h-[8vh]" id="home">
      <h1 className="text-lg ms1000:text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500">Gabriel Moraes</h1>
      <div className="flex gap-4 items-center">
        <div className="gap-3 uppercase text-sm hidden ms1000:flex">
          <a href="#home" className="hover:bg-gray p-2 rounded-lg">Início</a>
          <a href="#about" className="hover:bg-gray p-2 rounded-lg">Sobre</a>
          <a href="#projects" className="hover:bg-gray p-2 rounded-lg">Projetos</a>
          <a href="#knowledge" className="hover:bg-gray p-2 rounded-lg">Conhecimentos</a>
          <a href="#contact" className="hover:bg-gray p-2 rounded-lg">Contato</a>
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
  )
}

export default Navbar