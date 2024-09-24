import { Linkedin, Mail, Smartphone } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="max-w-[1320px] px-6 mx-auto flex flex-col justify-center items-start gap-4 py-20">
            <div className="flex flex-wrap">
                <div className='flex flex-col leading-10'>
                    <h1 className='text-2xl sm:text-3xl'>Entre em</h1>
                    <h1 className='text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500'>Contato.</h1>
                </div>
                <div className="flex flex-col flex-wrap gap-4">
                    <p className="dark:text-gray-scale-500 text-wrap">
                        Estou sempre aberto a novas oportunidades e colaborações. sinta-se à vontade para me enviar uma mensagem através deste formulário. Vou responder o mais breve possível!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2">
                        <div className="flex gap-2 items-center">
                            <Linkedin />
                            <a href="#">Linkedin</a>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Mail />
                            <a href="#">ygabrielmoraes@gmail.com</a>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Smartphone />
                            <a href="#">(21) 96427-7805</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection
