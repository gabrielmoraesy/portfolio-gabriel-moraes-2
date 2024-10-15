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

const About = () => {
    return (
        <>
            <section id="about" className="max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-8 px-6 mt-8 sm:mt-[120px] sm:pb-20">
                <div className="flex flex-col items-center gap-3">
                    <h1 className='text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-700'>Resumo</h1>
                    {/* <div className="w-[150px] h-[4px] dark:bg-white bg-gradient-to-r from-red-600 via-purple-600 to-blue-700" /> */}
                    <p className="text-sm">Abaixo está um resumo da minha carreira profissional</p>
                </div>

                <div className="flex flex-col ms1000:flex-row gap-10">
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <h1 className="text-xl sm:text-2xl mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-700">Objetivo</h1>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 border-2 dark:border-white border-black bg-transparent rounded-full " />
                                    <div className="w-1 max-[615px]:h-[150px] max-[503px]:h-[170px] max-[416px]:h-[190px] max-[360px]:h-[180px] h-[120px] dark:bg-white bg-black" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold">Gabriel Moraes</h1>
                                    <p>Estou em busca de uma oportunidade como Desenvolvedor Front End ou FullStack para dar continuidade na minha carreira.</p>
                                    <p>ygabrielmoraes@gmail.com | (21) 96427-7805</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-xl sm:text-2xl mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-700">Formações</h1>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 border-2 dark:border-white border-black bg-transparent rounded-full" />
                                    <div className="w-1 max-[615px]:h-[220px] max-[503px]:h-[240px] max-[416px]:h-[260px] max-[360px]:h-[310px] h-[200px] dark:bg-white bg-black" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold">Ensino Médio Técnico em Informática</h1>
                                    <div className="p-2 rounded-lg bg-gray-scale-100 w-[102px] dark:bg-transparent">2021 - 2023</div>
                                    <p>Escola Técnica Rezende Rammel</p>
                                    <p>Fiz o meu ensino médio junto com o técnico em informática onde tive a oportunidade de aprender sobre desenvolvimento front-end e back-end.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 border-2 dark:border-white border-black bg-transparent rounded-full" />
                                    <div className="w-1 max-[615px]:h-[220px] max-[503px]:h-[240px] max-[416px]:h-[260px] max-[360px]:h-[280px] h-[200px] dark:bg-white bg-black" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold">Graduação Ánalise e Desenvolvimento de Sistemas</h1>
                                    <div className="p-2 rounded-lg bg-gray-scale-100 w-[102px] dark:bg-transparent">2024 - 2026</div>
                                    <p>Centro Universitário Carioca</p>
                                    <p>A Universidade Unicarioca me ajudou a aprender sobre tecnologia. Tive a oportunidade de aprender desenvolvimento front-end, back-end e mobile.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col">
                            <h1 className="text-xl sm:text-2xl mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-700">Experiência Profissional</h1>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 border-2 dark:border-white border-black bg-transparent rounded-full" />
                                    <div className="w-1 max-[990px]:h-[330px] max-[615px]:h-[340px] max-[503px]:h-[360px] max-[440px]:h-[390px] max-[391px]:h-[430px] max-[379px]:h-[460px] max-[360px]:h-[490px] h-[340px] dark:bg-white bg-black" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold">Desenvolvedor Front-End - Javascript | Typescript | ReactJS | NextJS</h1>
                                    <div className="p-2 rounded-lg bg-gray-scale-100 w-[195px] dark:bg-transparent">02/2024 - até o momento</div>
                                    <p>Wishme | Brasília, Brasil</p>
                                    <ul className="list-disc pl-4">
                                        <li>Realização de tarefas para manutenção e adição de páginas e componentes</li>
                                        <li>Correção de bugs</li>
                                        <li>Implementação de novas funcionalidades</li>
                                        <li>Criação e correção nos estilos</li>
                                        <li>Criação e manutenção dos testes em jest</li>
                                        <li>HTML, CSS, Tailwind, JavaScript, TypeScript, React, NextJS, Styled Components, Jest, Git, Github, Figma, entre outras.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 border-2 dark:border-white border-black bg-transparent rounded-full" />
                                    <div className="w-1 max-[615px]:h-[230px] max-[503px]:h-[310px] max-[416px]:h-[320px] max-[360px]:h-[370px] h-[230px] dark:bg-white bg-black" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold">Estagiário Desenvolvedor</h1>
                                    <div className="p-2 rounded-lg bg-gray-scale-100 w-[146px] dark:bg-transparent">09/2022 - 02/2024</div>
                                    <p>Aprendizado e prática no Desenvolvimento de Sistemas, realização de processos de análise,
                                        documentação técnica e operacional, testes de software e controle de versionamento dos
                                        projetos.</p>
                                    <ul className="list-disc pl-4">
                                        <li>Desenvolvimento Desktop (Delphi) </li>
                                        <li>Desenvolvimento Web (HTML, CSS, JavaScript, Typescript e Angular)</li>
                                        <li>Banco de dados Padrão SQL (Microsoft SQL Server) </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About
