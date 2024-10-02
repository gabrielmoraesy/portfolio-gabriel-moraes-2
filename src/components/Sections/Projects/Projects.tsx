import projectCineExplorer from '@/../public/images/projects/project-cine-explorer-moraes.png'
import projectControleDeProdutos from '@/../public/images/projects/project-ControleDeProdutos.png'
import projectMoraesBank from '@/../public/images/projects/project-MoraesBank.png'
import projectToDoList from '@/../public/images/projects/project-TodoList.png'
import projectPortfolio from '@/../public/images/projects/project-portfolio.png'
import projectPortfolioActual from '@/../public/images/projects/project-portfolio-actual.png'
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
            linkCode: "https://github.com/gabrielmoraesy/portfolio-gabriel-moraes-2",
            linkSeeProject: "https://portfolio-gabriel-moraes-2.vercel.app/"
        },
        {
            image: projectCineExplorer,
            title: "Cine Explorer Moraes 🍿",
            description: "Este site foi desenvolvido com o objetivo de resgatar dados da api do TMDB, ordenando filmes por mais populares, e conseguindo realizar a busca dos mesmos. Foi utilizado o sistema de rotas do next e a componetização do React, todo tipado com typescript para melhor funcionamento e futuras manutenções. Responsivo para todos os aparelhos e possui modo escuro para auxiliar na experiência do usuário.",
            technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJS", "Tailwind"],
            linkCode: "https://github.com/gabrielmoraesy/cine-explorer-moraes",
            linkSeeProject: "https://cine-explorer-moraes.vercel.app/"
        }, 
        {
            image: projectMoraesBank,
            title: "Moraes Bank",
            description: "É um banco aonde possui uma tela de login, faz a verificação do cpf/senha, após entrar consegue fazer movimentações como sacar e depositar, também consegue resetar os valores.",
            technologies: ["HTML", "CSS", "JavaScript"],
            linkCode: "https://github.com/gabrielmoraesy/Moraes-Bank",
            linkSeeProject: "https://gabrielmoraesy.github.io/Moraes-Bank/index.html#"
        },
        {
            image: projectToDoList,
            title: "To Do List",
            description: "Foi meu primeiro projeto em React, nele temos um to Do List para você registrar suas tarefas diárias, podendo marcar as mesmas como concluídas ou até mesmo exclui-las.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            linkCode: "https://github.com/gabrielmoraesy/Todo-List",
            linkSeeProject: "https://todo-list-nine-gold.vercel.app/"

        },
        {
            image: projectControleDeProdutos,
            title: "Controle de Produtos - API Json",
            description: "Esse projeto é um controle de produtos, utilizando API Json, com diversos métodos como: Get, Post, Patch e Delete. Podendo adicionar produtos, editar e remover, possui todos os tratamentos necéssarios para um bom funcionamento.",
            technologies: ["HTML", "CSS", "JavaScript", "React"],
            linkCode: "https://github.com/gabrielmoraesy/Controle-De-Produtos-API-Json",
            linkSeeProject: "https://controle-de-produtos-api-json.vercel.app/"
        },
        {
            image: projectPortfolio,
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"],
            linkCode: "https://github.com/gabrielmoraesy/portfolio-gabriel-moraes", 
            linkSeeProject: "https://portfolio-gabriel-moraes-two.vercel.app/"
        },
    ]

    return (
        <section id="projects" className="max-w-[1320px] px-6 mx-auto flex flex-col justify-center items-start gap-6 min-h-[95vh] py-10">
            <div className='flex flex-col leading-10'>
                <h1 className='text-2xl sm:text-3xl'>Confira meus</h1>
                <h1 className='text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-700'>Projetos.</h1>
            </div>
            <div className="flex flex-wrap gap-3">
                {projects.map(project =>
                    <div className='group h-auto relative z-20'>
                        <div className='w-full h-full flex-row gap-2 transition-opacity hover:opacity-50 cursor-pointer group-hover:opacity-50'>
                            <Image src={project.image?.src} className='object-cover object-center' width={400} height={300} quality={100} alt="imagem do projeto" />
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
                                        <a data-state="closed" href={project.linkCode} target='_blank'>
                                            <Code />
                                        </a>
                                        <TooltipContent>
                                            <a href={project.linkCode} target='_blank'>Código</a>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
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
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectsSection
