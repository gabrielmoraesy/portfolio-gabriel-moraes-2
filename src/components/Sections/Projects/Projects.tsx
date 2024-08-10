import projectPortfolio from '@/../public/images/projectPortfolio.png'
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
            image: projectPortfolio,
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
            image: projectPortfolio,
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
            image: projectPortfolio,
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        }
    ]

    return (
        <section id="projects" className="max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-5 h-[95vh] bg-black">
            <div className='flex flex-col leading-10 justify-start'>
                <h1 className='text-[36px]'>Confira meus</h1>
                <h1 className='text-[36px]'>Projetos.</h1>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {projects.map(project =>
                    <div>
                        <Image src={project.image?.src} className='w-[400px] h-[300px]' width={400} height={300} quality={100} alt="imagem do projeto" />
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectsSection
