import Image from "next/image";

const ProjectsSection = () => {
    const projects = [
        {
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Portfolio",
            description: "Este portfólio foi criado com o intuito de me apresentar para todos vocês e mostrar meus projetos e habilidades. Tem todos os links direcionados para minhas redes.",
            technologies: ["HTML", "CSS", "JavaScript"]
        }
    ]

    return (
        <section id="projects" className="pb-16 max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-5 h-[95vh] bg-black">
            <div>
                <h1>Confira meus</h1>
                <h1>Projetos.</h1>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
                {projects.map(project =>
                    <div>
                        <Image src={ } width={ } height={ } alt="" />
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectsSection
