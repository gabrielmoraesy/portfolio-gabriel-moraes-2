import { Avatar, AvatarImage } from "@/components/ui/avatar"
import profilePhoto from '@/../public/images/home/profilePhoto.jpg'
import Image from "next/image";
import homeFundo from '@/../public/images/home/homeFundo.png'

const HomeSection = () => {
    return (
        <div>
            <Image src={homeFundo.src} width={2048} height={1365} quality={100} alt="Fundo" className="hidden dark:block object-cover w-screen h-screen absolute opacity-35" loading="lazy" />

            <section className="relative max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-4 h-[95vh] px-6">
                <div className="flex flex-col items-center gap-3 sm:max-w-[800px]">
                    <Avatar className="w-[200px] h-[200px]">
                        <AvatarImage src={profilePhoto.src} className="object-cover" />
                    </Avatar>

                    <h1 className="text-center ms1000:leading-[50px] font-bold text-3xl md:text-5xl"><span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 ">Olá, meu nome é Gabriel,</span> sou Desenvolvedor Front-End.</h1>
                    <p className="text-base text-center sm:max-w-[600px]">
                        Minha paixão pelo Desenvolvimento web impulsiona-me a criar interfaces elegantes, interativas e responsivas, proporcionando experiências memoráveis aos usuários.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3.5">
                        <button className="px-3 py-2 border-2 border-gray rounded-lg dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:bg-black hover:text-white hover:border-black duration-300">Entrar em contato</button>
                        <button className="px-3 py-2 border-2 border-gray rounded-lg dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:bg-black hover:text-white hover:border-black duration-300">Projetos</button>
                        <button className="px-3 py-2 border-2 border-gray rounded-lg dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:bg-black hover:text-white hover:border-black duration-300">Currículo</button>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default HomeSection
