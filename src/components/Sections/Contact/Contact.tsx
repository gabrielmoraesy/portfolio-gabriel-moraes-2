import { Linkedin, Mail, Smartphone } from "lucide-react";

const ContactSection = () => {
    return (
        <div id="contact" className="max-w-[1320px] px-6 mx-auto flex flex-col justify-center items-start gap-4 py-10">
            <div className="flex flex-wrap">
                <div className='flex flex-col leading-10'>
                    <h1 className='text-2xl sm:text-3xl'>Entre em</h1>
                    <h1 className='text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-700'>Contato.</h1>
                </div>
                <div className="flex flex-col flex-wrap gap-4">
                    <p className="dark:text-gray-scale-500 text-wrap">
                        Estou sempre aberto a novas oportunidades e colaborações. sinta-se à vontade para me enviar uma mensagem através deste formulário. Vou responder o mais breve possível!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex gap-1 items-center">
                            <Linkedin />
                            <a href="https://www.linkedin.com/in/gabrielmoraespires/" target="_blank">Linkedin</a>
                        </div>

                        <div className="flex gap-1 items-center">
                            <Mail />
                            <a href="mailto:ygabrielmoraes@gmail.com" target="_blank">ygabrielmoraes@gmail.com</a>
                        </div>

                        <div className="flex gap-1 items-center">
                            <Smartphone />
                            <a href="https://wa.me/5521964277805/" target="_blank">(21) 96427-7805</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection
