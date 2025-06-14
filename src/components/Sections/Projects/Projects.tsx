'use client'
import { motion } from 'framer-motion';
import projectCineExplorer from '@/../public/images/projects/project-cine-explorer-moraes.png'
import projectControleDeProdutos from '@/../public/images/projects/project-ControleDeProdutos.png'
import projectMoraesBank from '@/../public/images/projects/project-MoraesBank.png'
import projectToDoList from '@/../public/images/projects/project-TodoList.png'
import projectAppDashboards from '@/../public/images/projects/project-app-dashboards.png'
import projectPortfolioActual from '@/../public/images/projects/project-portfolio-actual.png'
import projectMoraesFlix from '@/../public/images/projects/project-moraes-flix.png'
import DetailsProjectModal from '@/components/Modals/DetailsProjectModal/DetailsProjectModal'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Code, Ellipsis, Eye } from 'lucide-react'
import Image from "next/image";

const ProjectsSection = () => {
    const projects = [
        {
            image: projectPortfolioActual,
            title: "Portfolio Atual",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "NextJS", "TypeScript", "Tailwind"],
            linkCodeFrontEnd: "https://github.com/gabrielmoraesy/portfolio-gabriel-moraes-2",
            linkSeeProject: "https://portfolio-gabriel-moraes-2.vercel.app/"
        },
        {
            image: projectMoraesFlix,
            title: "Moraes Flix",
            description: "O MoraesFlix é uma aplicação de gerenciamento de filmes, permitindo que os usuários adicionem, editem e excluam seus filmes favoritos, além de deixarem avaliações.",
            technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "Shadcn UI", "NodeJS", "Express", "Prisma", "PostgreSQL", "Zod", "React Hook Form", "Axios", "Docker"],
            linkCodeFrontEnd: "https://github.com/gabrielmoraesy/moraes-flix-front-end",
            linkCodeBackEnd: "https://github.com/gabrielmoraesy/moraes-flix-back-end",
            linkSeeProject: "https://moraes-flix-front-end.vercel.app/"
        },
        {
            image: projectCineExplorer,
            title: "Cine Explorer Moraes 🍿",
            description: "Site que consome a API do TMDB para exibir e buscar filmes, com rotas do Next e totalmente tipado com TypeScript.",
            technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJS", "Tailwind"],
            linkCodeFrontEnd: "https://github.com/gabrielmoraesy/cine-explorer-moraes",
            linkSeeProject: "https://cine-explorer-moraes.vercel.app/"
        },
        {
            image: projectAppDashboards,
            title: "App de Dashboards",
            description: "O App de Dashboard é uma aplicação intuitiva e de fácil entendimento para gerenciar todos os dados do seu estabelecimento transformando-os em dashboards.",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "ApexCharts", "React Query", "ShadCn UI"],
            linkCodeFrontEnd: "https://github.com/gabrielmoraesy/desafio-ent-dashboard",
            linkSeeProject: "https://desafio-ent-dashboard.vercel.app/"
        },
        {
            image: projectToDoList,
            title: "To Do List",
            description: "Primeiro projeto em React. Permite adicionar, marcar como concluída e excluir tarefas.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            linkCodeFrontEnd: "https://github.com/gabrielmoraesy/Todo-List",
            linkSeeProject: "https://todo-list-nine-gold.vercel.app/"
        },
        {
            image: projectMoraesBank,
            title: "Moraes Bank",
            description: "Banco simples com verificação de login por CPF/senha, e funcionalidades de saque, depósito e reset.",
            technologies: ["HTML", "CSS", "JavaScript"],
            linkCodeFrontEnd: "https://github.com/gabrielmoraesy/Moraes-Bank",
            linkSeeProject: "https://gabrielmoraesy.github.io/Moraes-Bank/index.html#"
        },
        {
            image: projectControleDeProdutos,
            title: "Controle de Produtos - API Json",
            description: "Aplicação que gerencia produtos usando API JSON: GET, POST, PATCH e DELETE.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            linkCodeFrontEnd: "https://github.com/gabrielmoraesy/Controle-De-Produtos-API-Json",
            linkSeeProject: "https://controle-de-produtos-api-json.vercel.app/"
        },
    ]

    return (
        <section id="projetos" className="max-w-[1320px] px-6 mx-auto flex flex-col justify-center items-start gap-6 min-h-[95vh] py-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className='flex flex-col leading-10'
            >
                <h1 className='text-2xl sm:text-3xl'>Confira meus</h1>
                <h1 className='text-2xl sm:text-3xl font-bold text-blue-500'>Projetos.</h1>
            </motion.div>

            <motion.div
                className="flex flex-wrap justify-center gap-6 w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12 } }
                }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        className="group h-auto relative z-20 w-full max-w-[340px] sm:max-w-[400px]"
                        initial={{ opacity: 0, y: 40 }}
                        animate="visible"
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                    >
                        <div className="relative w-full h-[220px] sm:h-[300px] flex-row gap-2 cursor-pointer">
                            <Image
                                src={project.image?.src}
                                fill
                                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-lg"
                                quality={100}
                                alt="imagem do projeto"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                        </div>

                        <div className='group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8 opacity-0 group-hover:opacity-100 transition-opacity flex'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className='text-white bg-black p-4 rounded-full w-[56px] h-[56px]'>
                                        <a data-state="closed" href={project.linkSeeProject} target='_blank'>
                                            <Eye />
                                        </a>
                                        <TooltipContent>
                                            <a href={project.linkSeeProject} target='_blank'>Ver projeto</a>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger className='text-white bg-black p-4 rounded-full w-[56px] h-[56px]'>
                                        <a data-state="closed" href={project.linkCodeFrontEnd} target='_blank'>
                                            <Code />
                                        </a>
                                        <TooltipContent>
                                            <a href={project.linkCodeFrontEnd} target='_blank'>Código FrontEnd</a>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
                                {project.linkCodeBackEnd &&
                                    <Tooltip>
                                        <TooltipTrigger className='text-white bg-black p-4 rounded-full w-[56px] h-[56px]'>
                                            <a data-state="closed" href={project.linkCodeBackEnd} target='_blank'>
                                                <Code />
                                            </a>
                                            <TooltipContent>
                                                <a href={project.linkCodeBackEnd} target='_blank'>Código BackEnd</a>
                                            </TooltipContent>
                                        </TooltipTrigger>
                                    </Tooltip>
                                }
                                <Tooltip>
                                    <TooltipTrigger className='text-white bg-black p-4 rounded-full w-[56px] h-[56px]'>
                                        <DetailsProjectModal project={project}>
                                            <Ellipsis />
                                        </DetailsProjectModal>
                                        <TooltipContent>
                                            <p>Detalhes</p>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default ProjectsSection;
