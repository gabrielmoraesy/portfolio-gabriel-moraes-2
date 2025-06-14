import Image from 'next/image';
import { Github, Gitlab, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] dark:bg-[#232323] text-black dark:text-white px-4 pt-10 pb-8 mt-10">
      <div className="max-w-[1320px] px-6 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold">Gabriel Moraes Pires</span>
          <blockquote className="italic text-sm text-gray-300 text-center md:text-left max-w-xs">
            Provérbios 16:3<br />
            "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos."
          </blockquote>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-end gap-2">
          <span className="font-semibold text-lg mb-1">Redes sociais</span>
          <div className="flex gap-4 text-2xl">
            <a href="https://gitlab.com/gabrielmoraesy" aria-label="Gitlab" target="_blank" rel="noopener noreferrer" className="transition-colors text-black dark:text-gray-scale-500 hover:text-blue-500 dark:hover:text-blue-500 "><Gitlab /></a>
            <a href="https://github.com/gabrielmoraesy" aria-label="Github" target="_blank" rel="noopener noreferrer" className="transition-colors text-black dark:text-gray-scale-500 hover:text-blue-500 dark:hover:text-blue-500"><Github /></a>
            <a href="https://www.linkedin.com/in/gabrielmoraespires/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" className="transition-colors text-black dark:text-gray-scale-500 hover:text-blue-500 dark:hover:text-blue-500"><Linkedin /></a>
            <a href="https://www.instagram.com/moraesdev/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="transition-colors text-black dark:text-gray-scale-500 hover:text-blue-500 dark:hover:text-blue-500"><Instagram /></a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-600" />
      <div className="max-w-[1320px] px-6 mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-2">
        <span>© Copyright <a href="https://www.instagram.com/moraesdev/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@moraesdev</a>. Todos os direitos reservados</span>
        <span>
          Desenvolvido por <a href="https://www.instagram.com/moraesdev/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">MoraesDev</a>
        </span>
      </div>
    </footer>
  );
} 