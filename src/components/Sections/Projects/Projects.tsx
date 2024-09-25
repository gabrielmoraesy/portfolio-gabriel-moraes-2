import projectCineExplorer from '@/../public/images/project-cine-explorer-moraes.png'
import projectControleDeProdutos from '@/../public/images/project-ControleDeProdutos.png'
import projectMoraesBank from '@/../public/images/project-MoraesBank.png'
import projectToDoList from '@/../public/images/project-TodoList.png'
import projectPortfolio from '@/../public/images/projectPortfolio.png'
import DetailsProjectModal from '@/components/Modals/DetailsProjectModal/DetailsProjectModal'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Code, Ellipsis, Eye } from 'lucide-react'
import Image from "next/image";

const ProjectsSection = () => {
    const projects = [
        {
            image: projectPortfolio,
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            image: projectControleDeProdutos,
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            image: projectMoraesBank,
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            image: projectToDoList,
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            image: projectPortfolio,
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            image: projectCineExplorer,
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        }, {
            image: projectPortfolio,
            title: "New Ways",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
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
                                        <a data-state="closed" href="#">
                                            <Eye />
                                        </a>
                                        <TooltipContent>
                                            <p>Ver projeto</p>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger className='text-white bg-black p-4 rounded-full w-[56px] h-[56px]'>
                                        <a data-state="closed" href="#">
                                            <Code />
                                        </a>
                                        <TooltipContent>
                                            <p>Código</p>
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
