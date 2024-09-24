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

const MenuMobile = ({children}: MenuMobileProps) => {
  return (
      <div className="flex ms1000:hidden">
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent side='top' className="flex flex-col px-4">
                <div className="flex flex-col gap-3 uppercase text-sm text-white">
                    <a href="#home" className="hover:bg-gray p-2 rounded-lg">Início</a>
                    <a href="#about" className="hover:bg-gray p-2 rounded-lg">Sobre</a>
                    <a href="#projects" className="hover:bg-gray p-2 rounded-lg">Projetos</a>
                    <a href="#knowledge" className="hover:bg-gray p-2 rounded-lg">Conhecimentos</a>
                    <a href="#contact" className="hover:bg-gray p-2 rounded-lg">Contato</a>
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