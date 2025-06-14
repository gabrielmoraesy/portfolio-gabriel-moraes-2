'use client'
import { Linkedin, Mail, Smartphone } from "lucide-react";
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <motion.div
            id="contato"
            className="max-w-[1320px] px-6 mx-auto flex flex-col justify-center items-start gap-4 py-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
        >
            <motion.div className="flex flex-wrap" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                <div className='flex flex-col leading-10'>
                    <motion.h1 className='text-2xl sm:text-3xl' initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>Entre em</motion.h1>
                    <motion.h1 className='text-2xl sm:text-3xl font-bold text-blue-500' initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>Contato.</motion.h1>
                </div>
                <motion.div className="flex flex-col flex-wrap gap-4" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
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
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default ContactSection
