import Image from "next/image";
import htmlIcon from '@/../public/images/tecnologiesIcons/html.svg'
import cssIcon from '@/../public/images/tecnologiesIcons/css.svg'
import jsIcon from '@/../public/images/tecnologiesIcons/javascript.svg'
import typeScriptIcon from '@/../public/images/tecnologiesIcons/typescript.svg'
import reactIcon from '@/../public/images/tecnologiesIcons/react.svg'
import nextIcon from '@/../public/images/tecnologiesIcons/nextjs.svg'
import tailwindIcon from '@/../public/images/tecnologiesIcons/tailwindcss.svg'
import styledCIcon from '@/../public/images/tecnologiesIcons/styled-components.svg'
import shadCnIcon from '@/../public/images/tecnologiesIcons/shadcn.svg'
import radixIcon from '@/../public/images/tecnologiesIcons/radix.svg'
import framerIcon from '@/../public/images/tecnologiesIcons/framer-motion.svg'
import nodeIcon from '@/../public/images/tecnologiesIcons/nodejs.svg'
import expressIcon from '@/../public/images/tecnologiesIcons/express.svg'

const KnowledgeSection = () => {
    const technologies = [
        {
            icon: htmlIcon,
            title: "Html"
        },
        {
            icon: cssIcon,
            title: "Css"
        },
        {
            icon: jsIcon,
            title: "JavaScript"
        },
        {
            icon: typeScriptIcon,
            title: "TypeScript"
        },
        {
            icon: reactIcon,
            title: "React"
        },
        {
            icon: nextIcon,
            title: "NextJs"
        },
        {
            icon: reactIcon,
            title: "React"
        },
        {
            icon: tailwindIcon,
            title: "Tailwind"
        },
        {
            icon: styledCIcon,
            title: "Styled Components"
        },
        {
            icon: shadCnIcon,
            title: "ShadCn UI"
        },
        {
            icon: radixIcon,
            title: "Radix UI"
        },
        {
            icon: framerIcon,
            title: "Framer motion"
        },
        {
            icon: nodeIcon,
            title: "Node"
        },
        {
            icon: expressIcon,
            title: "Express"
        }
    ]

    return (
        <section id="knowledge" className="max-w-[1320px] px-6 mx-auto flex flex-col justify-center items-start gap-6 min-h-[95vh]">
            <div className='flex flex-col leading-10'>
                <h1 className='text-[36px]'>Conhecimentos e</h1>
                <h1 className='text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500'>Tecnologias.</h1>
            </div>
            <div className="flex flex-wrap gap-2">
                {technologies.map(tech => <div className="relative flex flex-col items-center justify-center gap-2 w-28 md:w-48 p-2 py-4 rounded-lg bg-[#ececec] dark:bg-[#121212]">
                    <Image src={tech.icon} width={44} height={44} className="w-[44px] h-[44px]" quality={100} alt="imagem do projeto" />
                    <p className="font-bold uppercase text-sm">{tech.title}</p>
                </div>)}
            </div>
        </section>
    );
}

export default KnowledgeSection