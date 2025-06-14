'use client'
import React, { useEffect, useState } from 'react';
import { Github, Gitlab, Instagram, Linkedin, Menu } from "lucide-react";
import { ModeToggle } from "../ThemeProvider/fragments/ModeToggle";
import MenuMobile from "../MenuMobile/MenuMobile";

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#carreira', label: 'Carreira' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#conhecimentos', label: 'Conhecimentos' },
  { href: '#contato', label: 'Contato' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_LINKS.map(link => {
        const el = document.querySelector(link.href);
        if (!el) return { id: link.href.replace('#', ''), top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: link.href.replace('#', ''), top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-8 left-1/2 z-50 -translate-x-1/2 w-full flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between bg-[#f3f3f3] dark:bg-[#232323] border border-border rounded-full shadow-lg px-3 sm:px-8 py-2 max-w-5xl w-full gap-4 h-[58px] mx-8">
        <span className="flex items-center gap-2 font-bold text-xl text-blue-500 whitespace-nowrap">
          Gabriel Moraes
        </span>
        <ul className="hidden ms1000:flex gap-6 items-center capitalize text-sm flex-1 justify-center">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors font-medium text-base ${activeSection === link.href.replace('#', '') ? 'text-blue-500' : 'text-black dark:text-gray-scale-500 hover:text-blue-500'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 items-center justify-end">
          <div className="hidden sm:flex gap-2 items-center">
            <ModeToggle />
            <a href="https://gitlab.com/gabrielmoraesy" target="_blank" className="transition-colors text-black dark:text-gray-scale-500 hover:text-blue-500 dark:hover:text-blue-500"><Gitlab /></a>
            <a href="https://github.com/gabrielmoraesy" target="_blank" className="transition-colors text-black dark:text-gray-scale-500 hover:text-blue-500 dark:hover:text-blue-500"><Github /></a>
            <a href="https://www.linkedin.com/in/gabrielmoraespires/" target="_blank" className="transition-colors text-black dark:text-gray-scale-500 hover:text-blue-500 dark:hover:text-blue-500"><Linkedin /></a>
            <a href="https://www.instagram.com/moraesdev/" target="_blank" className="transition-colors text-black dark:text-gray-scale-500 hover:text-blue-500 dark:hover:text-blue-500"><Instagram /></a>
          </div>
          <MenuMobile>
            <Menu />
          </MenuMobile>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;