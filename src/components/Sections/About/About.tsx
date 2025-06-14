import Card from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';

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

const experiences = [
  {
    title: 'Desenvolvedor Front End - Javascript | Typescript | ReactJS | NextJS',
    company: 'STARTA · Tempo integral',
    date: 'mar de 2025 - o momento · 4 meses',
    location: 'Porto Alegre, Rio Grande do Sul, Brasil · Remota',
    logo: '/images/empresas/starta.jpg',
    description: `Atuei no desenvolvimento do novo portal do CIEE-RS (https://cieers.org.br), participando do processo de modernização e estruturação dinâmica da plataforma. Implementamos um CMS headless (Strapi) para facilitar a gestão de conteúdo, onde as informações preenchidas no painel eram refletidas automaticamente no front-end de forma eficiente. O projeto teve como foco principal entregar uma experiência fluida para o usuário e agilidade na atualização de informações para a equipe interna. Possibilitando a criação de páginas dinâmicas e a inserção de mais de 40 componentes de maneira prática e personalizada.\n\n✅ Stacks e bibliotecas utilizadas\nHTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, Git, GitHub, Figma, TanStack Query (React Query), React Hook Form, Zod, ShadCN, Framer Motion, Lucide React, Axios, Date-fns, Swiper, LightGallery, React Google reCAPTCHA, entre outras.`
  },
  {
    title: 'Desenvolvedor Front End - Javascript | Typescript | ReactJS',
    company: 'ENT - Empresas no Topo · Freelance',
    date: 'fev de 2025 - o momento · 5 meses',
    location: 'Brasília, Distrito Federal, Brasil · Remota',
    logo: '/images/empresas/ent.jpg',
    description: `Atuo no desenvolvimento de novas funcionalidades e dashboards, focando na criação de soluções eficientes e personalizadas para a gestão de dados e visualizações analíticas. Trabalho implementando interfaces dinâmicas, gráficos interativos e ferramentas administrativas que otimizam a experiência do usuário e o controle interno de informações.\n\n✅ Stacks e bibliotecas utilizadas\nHTML, CSS, JavaScript, TypeScript, React, Styled Components, Bootstrap, ApexCharts, React Chartjs 2, React Query, Axios, Date-fns, Formik, Yup, React Hook Form, React Toastify, React Input Mask, Html2pdf.js, React To Print, entre outras.`
  },
  {
    title: 'Desenvolvedor Front End - Javascript | Typescript | ReactJS | NextJS',
    company: 'Hub Connect Eventos · Tempo integral',
    date: 'fev de 2025 - mar de 2025 · 2 meses',
    location: 'Brasília, Distrito Federal, Brasil · Remota',
    logo: '/images/empresas/hubconnect.jpg',
    description: `Atuei participando da evolução e manutenção de quatro portais distintos da empresa. Minhas responsabilidades incluíam a criação de novas páginas, otimização de performance, desenvolvimento de componentes reutilizáveis e adaptação de layouts responsivos para diferentes dispositivos. Trabalhei focado em garantir uma experiência de navegação fluida, moderna e otimizada para os usuários, utilizando as melhores práticas de desenvolvimento front-end.\n\n✅ Stacks e bibliotecas utilizadas\nJavaScript, TypeScript, React.js, Next.js, Tailwind CSS, HTML5, CSS3, Controle de versão (Git).`
  },
  {
    title: 'Desenvolvedor Front-End - Javascript | Typescript | ReactJS | NextJS',
    company: 'Ignis Digital · Tempo integral',
    date: 'nov de 2023 - dez de 2024 · 1 ano 2 meses',
    location: 'Brasília, Distrito Federal, Brasil · Remota',
    logo: '/images/empresas/ignis-digital.jpg',
    description: `Atuo na manutenção e desenvolvimento de novas funcionalidades e componentes para plataformas, focando na criação de interfaces dinâmicas e responsivas, além de garantir a experiência do usuário por meio da otimização de estilos e interações. Trabalho na correção de bugs, melhoria de código legado e na implementação de testes para garantir a qualidade do software.\n\n✅ Stacks e bibliotecas utilizadas\nHTML, CSS, Tailwind, JavaScript, TypeScript, React, NextJS, Styled Components, Jest, Git, GitHub, Figma, React Hook Form, Yup, Zod, entre outras.`
  },
  {
    title: 'Desenvolvedor Front end',
    company: 'Karyon Consultoria em Informática · Tempo integral',
    date: 'fev de 2024 - ago de 2024 · 6 meses',
    location: 'Rio de Janeiro, Rio de Janeiro, Brasil',
    logo: '/images/empresas/karyon.jpg',
    description: `✅ Stacks e bibliotecas utilizadas\nHTML, CSS, JavaScript, TypeScript, Angular, Delphi, Microsoft SQL Server`
  },
  {
    title: 'Estagiário Desenvolvedor',
    company: 'Karyon Consultoria em Informática · Estágio',
    date: 'set de 2022 - jan de 2024 · 1 ano 5 meses',
    location: 'Rio de Janeiro, Rio de Janeiro, Brasil',
    logo: '/images/empresas/karyon.jpg',
    description: `✅ Stacks e bibliotecas utilizadas\nHTML, CSS, JavaScript, TypeScript, Angular, Delphi, Microsoft SQL Server`
  },
];

const updatedExperiences = experiences.map(exp => ({
  ...exp,
  company: exp.company ? `${exp.company} · ${exp.date}` : exp.date,
}));

const About = () => {
    return (
        <>
            <section id="carreira" className="max-w-[1320px] mx-auto flex flex-col justify-center items-center gap-8 px-6 mt-8 sm:mt-[120px] sm:pb-20">
                <div className="flex flex-col items-center gap-3">
                    <h1 className='text-2xl sm:text-3xl font-bold text-blue-500'>Carreira</h1>
                    {/* <div className="w-[150px] h-[4px] dark:bg-white bg-gradient-to-r from-red-600 via-purple-600 to-blue-700" /> */}
                    <p className="text-base">Abaixo está um resumo da minha carreira profissional</p>
                </div>

                <div className="flex flex-col ms1000:flex-row gap-10">
                    {/* Coluna direita: Formações + Imagem sticky */}
                    <div className="flex-1 flex flex-col gap-2 ms1000:sticky ms1000:top-8 ms1000:h-[calc(100vh-4rem)]">
                        <h1 className="text-lg sm:text-xl mb-3 text-blue-500 text-black dark:text-white">Educação</h1>
                        <Card title="Ensino Médio Técnico em Informática" date="2021 - 2023" subtitle="Escola Técnica Rezende Rammel" className="text-black dark:text-white">
                            <p>Fiz o meu ensino médio junto com o técnico em informática onde tive a oportunidade de aprender sobre desenvolvimento front-end e back-end.</p>
                        </Card>
                        <Card title="Graduação Ánalise e Desenvolvimento de Sistemas" date="2024 - 2026" subtitle="Centro Universitário Carioca" className="text-black dark:text-white">
                            <p>A Universidade Unicarioca me ajudou a aprender sobre tecnologia. Tive a oportunidade de aprender desenvolvimento front-end, back-end e mobile.</p>
                        </Card>
                        <div className="w-full flex items-stretch min-h-[200px]">
                            <img src="/images/empresas/imagem.jpeg" alt="Foto carreira" className="rounded-lg w-full h-[260px] ms1000:h-full object-cover ms1000:sticky ms1000:top-[260px]" />
                        </div>
                    </div>
                    {/* Coluna esquerda: Experiências profissionais (timeline) */}
                    <div className="flex-[2] min-w-0">
                        <h1 className="text-lg sm:text-xl mb-3 text-blue-500 text-black dark:text-white">Experiência Profissional</h1>
                        <div className="flex flex-row gap-4">
                            {/* Timeline vertical */}
                            <div className="relative flex flex-col items-center" style={{ minWidth: 32 }}>
                                {/* Linha contínua */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-blue-500 z-0" style={{ minHeight: '100%' }} />
                                {experiences.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative z-10 flex flex-col items-center ${idx === 0 ? 'mt-6' : 'mt-8'}`}
                                        style={{ minHeight: idx !== experiences.length - 1 ? 64 : 0 }}
                                    >
                                        <div className="w-4 h-4 border-2 border-blue-500 bg-white dark:bg-[#161616] rounded-full" />
                                        {idx !== experiences.length - 1 && <div className="flex-1 w-px bg-transparent" style={{ minHeight: 48 }} />}
                                    </div>
                                ))}
                            </div>
                            {/* Cards de experiência */}
                            <div className="flex flex-col gap-2 flex-1">
                                {updatedExperiences.map((exp, idx) => (
                                    <Card
                                        key={idx}
                                        title={
                                            <span className="flex items-center gap-2">
                                                {exp.logo && (
                                                    <Image src={exp.logo} alt={exp.company} width={28} height={28} className="rounded bg-white p-1 border border-gray-200" />
                                                )}
                                                {exp.title}
                                            </span>
                                        }
                                        subtitle={<span>{exp.company}<br />{exp.location}</span>}
                                        className="text-black dark:text-white"
                                    >
                                        {exp.description.split('\n').map((line, i) => (
                                            <p key={i} className={line.startsWith('✅') ? 'mt-2 font-semibold' : ''}>{line}</p>
                                        ))}
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About
