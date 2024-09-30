import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Gitlab, Instagram, Linkedin, Menu } from "lucide-react"

import { ModeToggle } from "../ThemeProvider/fragments/ModeToggle"

import MenuMobile from "../MenuMobile/MenuMobile"

const Navbar = () => {
  return (
    <nav className="max-w-[1320px] mx-auto flex justify-between items-center h-[8vh] px-6 ms1000:px-4" id="home">
      <h1 className="text-lg ms1000:text-2xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-700">Gabriel Moraes</h1>

      <div className="flex gap-4 items-center">
        <div className="gap-3 uppercase text-sm hidden ms1000:flex">
          <a href="#home" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">Início</a>
          <a href="#about" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">Sobre</a>
          <a href="#projects" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">Projetos</a>
          <a href="#knowledge" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">Conhecimentos</a>
          <a href="#contact" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">Contato</a>
        </div>

        <div className="bg-[#ccc] h-4 w-[1px] hidden ms1000:flex" />

        <div className="gap-2 flex">
          <div className="hidden sm:flex">
            <TooltipProvider>
              <ModeToggle />

              <Tooltip>
                <TooltipTrigger className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">
                  <a href="https://gitlab.com/gabrielmoraesy" target="_blank">
                    <Gitlab />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Gitlab</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">
                  <a href="https://github.com/gabrielmoraesy" target="_blank">
                    <Github />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">
                  <a href="https://www.linkedin.com/in/gabrielmoraespires/" target="_blank">
                    <Linkedin />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg">
                  <a href="https://www.instagram.com/moraesdev/" target="_blank">
                    <Instagram />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <MenuMobile>
            <Menu />
          </MenuMobile>
        </div>
      </div>
    </nav>
  )
}

export default Navbar