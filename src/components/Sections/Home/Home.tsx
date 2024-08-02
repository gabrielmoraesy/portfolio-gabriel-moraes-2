import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const HomeSection = () => {
    return (
        <section id="home" className="pb-16 max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-5 h-[95vh] bg-black border-b border-white">
            <Avatar className="w-[160px] h-[160px]">
                <AvatarImage src="https://github.com/gabrielmoraesy.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-center max-w-[900px] gap-3">
                <h1 className="text-[60px] text-center leading-[65px]">Olá, meu nome é Gabriel, sou desenvolvedor front-end.</h1>
                <p className="text-base text-center">
                    Minha paixão pelo desenvolvimento web impulsiona-me a criar interfaces elegantes, interativas e responsivas, proporcionando experiências memoráveis aos usuários.
                </p>
            </div>

        </section>
    );
}

export default HomeSection
