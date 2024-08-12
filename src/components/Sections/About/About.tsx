const AboutSection = () => {
    const formations =
        [
            {
                institution: "Escola Técnica Rezende Rammel",
                description: "Ensino médio junto com Técnico em informática",
                startDate: "02/2021",
                endDate: "11/2023",
                status: "Concluído"
            }, {
                institution: "Centro Universitário Carioca",
                description: "Análise e Desenvolvimento de Sistemas",
                startDate: "02/2024",
                endDate: "12/2026",
                status: "Em andamento"
            },
        ]

    const experiences =
        [
            {
                institution: "Wishme | Brasília, Brasil",
                office: "Desenvolvedor Jr.",
                description: "Realização de tarefas para manutenção e adição de páginas e componentes, correção de bugs",
                startDate: "02/2024",
                endDate: '08/2024',
                technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React", "NextJS", "VueJS", "StyledComponents", "Jest", "Git", "Github", "Figma"]
            },
            {
                institution: "Karyon Consultoria em Informática | Rio de Janeiro, Brasil",
                office: "Estagiário Desenvolvedor",
                description: "Aprendizado e prática no Desenvolvimento de Sistemas, realização de processos de análise",
                startDate: "09/2022",
                endDate: '02/2024',
                technologies: ["Delphi", "HTML", "CSS", "JavaScript", "Typescript", "Angular", "Microsoft SQL Server"]
            }
        ]

    return (
        <>
            <div className="w-full h-[70px] bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500" />

            <section id="about" className="max-w-[1320px] mx-auto h-[40vh] my-[200px] flex ms1200:flex-row flex-col justify-center items-start gap-20 px-6">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500">Formação</h1>
                    {formations.map(formation =>
                        <div className="flex flex-col gap-2 p-3 border-b border-gray-scale-500">
                            <div>
                                <h1 className="dark:text-white text-xl font-bold">{formation.institution}</h1>
                                <h2 className="dark:text-gray-scale-400">{formation.description}</h2>
                            </div>
                            <div className="flex gap-1.5 items-center">
                                <div className="w-[5px] h-[5px] rounded-full bg-gray-scale-400" />
                                <p className="dark:text-gray-scale-400">{formation.startDate} - {formation.endDate}</p>
                                <p className="dark:text-gray-scale-400">({formation.status})</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500">Experiências</h1>
                    {experiences.map(experience =>
                        <div className="flex flex-col gap-2 p-3 border-b border-gray-scale-500">
                            <div>
                                <h1 className="dark:text-white text-xl font-bold">{experience.institution}</h1>
                                <h2 className="dark:text-gray-scale-400">{experience.description}</h2>
                            </div>
                            <div className="flex gap-1.5 items-center">
                                <div className="w-[5px] h-[5px] rounded-full bg-gray-scale-400" />
                                <p className="dark:text-gray-scale-400">{experience.startDate} - {experience.endDate}</p>
                            </div>
                            <div className="flex gap-1.5 items-center">
                                {experience.technologies.map(tech => <div className="dark:text-gray-scale-400 text-xs">{tech}</div>)}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default AboutSection
