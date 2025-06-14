'use client'
import Image from 'next/image';
import profilePhoto from '@/../public/images/home/profilePhoto.jpg';
import { motion } from 'framer-motion';

export default function MainLanding() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#161616] dark:bg-[#161616] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-3 w-full max-w-md mx-auto"
      >
        <div className="relative mb-4">
          <div className="rounded-full border-4 border-blue-500 shadow-lg overflow-hidden w-40 h-40 flex items-center justify-center bg-[#232323]">
            <Image
              src={profilePhoto}
              alt="Gabriel Moraes Pires"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white text-center">Gabriel Moraes Pires</h1>
        <span className="text-blue-500 font-medium text-lg sm:text-xl text-center">Front-End Developer</span>
        <p className="text-white text-center text-lg">Tudo que você precisa saber está aqui <span className="inline-block">👇🏻</span></p>
        <div className="flex flex-col gap-4 w-full mt-6">
          {[
            { href: "/portfolio", label: "Portfólio" },
            { href: "https://www.linkedin.com/in/gabrielmoraespires/", label: "Meu Linkedin", target: "_blank" },
            { href: "https://github.com/gabrielmoraesy", label: "Meu Github", target: "_blank" },
            { href: "https://www.instagram.com/moraesdev/", label: "Meu Instagram", target: "_blank" },
          ].map((btn, idx) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.target}
              className="relative overflow-hidden w-full py-4 rounded-lg border-2 border-white text-black dark:text-white font-semibold text-lg text-center bg-transparent group transition-colors duration-300"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">{btn.label}</span>
              <span className="absolute left-0 top-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out z-0" style={{ borderRadius: '0.5rem' }}></span>
            </a>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 