import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Gitlab, Instagram, Linkedin } from "lucide-react"

import { ModeToggle } from "../ThemeProvider/fragments/ModeToggle"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ReactNode } from "react"

interface MenuMobileProps {
  children: ReactNode
}

const MenuMobile = ({ children }: MenuMobileProps) => {
  return (
    <div className="flex ms1000:hidden">
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent side='top' className="flex flex-col px-4">
          <div className="flex flex-col gap-3 uppercase text-sm dark:text-white">
            <a href="#home" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg font-medium">Início</a>
            <a href="#about" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg font-medium">Sobre</a>
            <a href="#projects" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg font-medium">Projetos</a>
            <a href="#knowledge" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg font-medium">Conhecimentos</a>
            <a href="#contact" className="dark:hover:bg-gray hover:bg-gray-scale-100 p-2 rounded-lg font-medium">Contato</a>
          </div>

          <div className="flex items-center gap-6">
            <ModeToggle />
            <Gitlab />
            <Github />
            <Linkedin />
            <Instagram />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile