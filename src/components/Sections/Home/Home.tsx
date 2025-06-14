'use client'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import profilePhoto from '@/../public/images/home/profilePhoto.jpg'
import Image from "next/image";
import homeFundo from '@/../public/images/home/homeFundo.png'
import { motion } from 'framer-motion';

const HomeSection = () => {
    return (
        <div>
            <section id="inicio" className="relative max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-4 min-h-screen flex-grow px-6">
                <div className="flex flex-col items-center gap-3 sm:max-w-[800px]">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
                    >
                        <Avatar className="w-[200px] h-[200px]">
                            <AvatarImage src={profilePhoto.src} className="object-cover" />
                        </Avatar>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                        className="text-center ms1000:leading-[50px] font-bold text-3xl md:text-5xl"
                    >
                        <span className="text-blue-500">Olá, me chamo Gabriel,</span> sou Desenvolvedor Front-End.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                        className="text-base text-center sm:max-w-[600px]"
                    >
                        Crio interfaces elegantes, interativas e responsivas, proporcionando experiências memoráveis aos usuários. Sou Desenvolvedor Front end e criador de conteúdo no <a href="https://www.instagram.com/moraesdev/" target="_blank" className="text-blue-500 hover:text-blue-600">@moraesdev</a>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
                        className="flex flex-wrap items-center justify-center gap-4 mt-4"
                    >
                        <a
                            href="#contato"
                            className="relative overflow-hidden font-bold py-2 px-6 rounded-lg shadow border-2 border-transparent bg-blue-500 text-white transition-colors duration-300 group"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Entrar em contato</span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 group-hover:w-full transition-all duration-500 ease-out z-0" style={{ borderRadius: '0.5rem' }}></span>
                        </a>
                        <a
                            href="/Curriculo-Gabriel-Moraes.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden font-bold py-2 px-6 rounded-lg shadow border-2 border-white dark:border-white bg-transparent text-black dark:text-white transition-colors duration-300 group"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-black dark:group-hover:text-black">Baixar meu currículo</span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out z-0" style={{ borderRadius: '0.5rem' }}></span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div >
    );
}

export default HomeSection
