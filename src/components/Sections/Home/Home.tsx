import { Avatar, AvatarImage } from "@/components/ui/avatar"

const HomeSection = () => {
    return (
        <section className="max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-4 h-[95vh] px-6">
            <div className="w-full flex justify-between items-center gap-5 flex-col-reverse sm:flex-row sm:gap-0">
                <div className="flex flex-col items-center gap-3 sm:max-w-[800px]">
                    <h1 className="text-center ms1000:leading-[50px] font-bold text-3xl md:text-5xl"><span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 ">Olá, meu nome é Gabriel,</span> sou Desenvolvedor Front-End.</h1>
                    <p className="text-base text-center sm:max-w-[600px]">
                        Minha paixão pelo Desenvolvimento web impulsiona-me a criar interfaces elegantes, interativas e responsivas, proporcionando experiências memoráveis aos usuários.
                    </p>

                    <div className="flex gap-3.5">
                        <button className="px-3 py-2 border-2 border-gray rounded-2xl hover:bg-white hover:text-black duration-300">Entrar em contato</button>
                        <button className="px-3 py-2 border-2 border-gray rounded-2xl hover:bg-white hover:text-black duration-300">Projetos</button>
                    </div>
                </div>

                {/* <Avatar className="w-[400px] h-[400px]">
                    <AvatarImage src="https://github.com/gabrielmoraesy.png" />
                </Avatar> */}
            </div>

        </section>
    );
}

export default HomeSection
