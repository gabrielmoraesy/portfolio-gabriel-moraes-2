import { Avatar, AvatarImage } from "@/components/ui/avatar"

const HomeSection = () => {
    return (
        <section className="max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-4 h-[95vh] px-6">
            <Avatar className="w-[160px] h-[160px]">
                <AvatarImage src="https://github.com/gabrielmoraesy.png" />
            </Avatar>

            <div className="flex flex-col items-center max-w-[900px] gap-3">
                <h1 className="text-center ms1000:leading-[65px] font-bold text-4xl md:text-6xl"><span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 ">Olá, meu nome é Gabriel,</span> sou desenvolvedor Front-End.</h1>
                <p className="text-base text-center">
                    Minha paixão pelo desenvolvimento web impulsiona-me a criar interfaces elegantes, interativas e responsivas, proporcionando experiências memoráveis aos usuários.
                </p>
            </div>

            <div className="flex gap-3.5">
                <button className="p-2.5 border-2 border-gray rounded-3xl">Entrar em contato</button>
                <button className="p-2.5 border-2 border-gray rounded-3xl">Projetos</button>
            </div>
        </section>
    );
}

export default HomeSection
