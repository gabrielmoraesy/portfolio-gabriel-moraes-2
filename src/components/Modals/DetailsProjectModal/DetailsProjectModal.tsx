import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react";
import { ReactNode } from "react"

interface IDetailsProjectModal {
    children: ReactNode
    project: {
        title: string,
        description: string,
        technologies: String[]
    }
}

const DetailsProjectModal = ({ children, project }: IDetailsProjectModal) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-w-[85vw] sm:max-w-[600px] bg-white dark:bg-[#232323]">
                <DialogHeader className="flex w-full flex-row items-center justify-between border-b-[2px] border-gray-border pb-5">
                    <h2 className="text-xl">Detalhes do projeto</h2>
                </DialogHeader>
                <div className="relative flex flex-col items-center gap-3">
                    <h1 className="text-xl sm:text-2xl font-bold text-blue-500">{project.title}</h1>
                    <p className="text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                            <p
                                key={idx}
                                className="transition-transform duration-200 hover:scale-110 cursor-pointer px-2 py-1 rounded bg-gray-100 dark:bg-[#232323] border border-gray-200 dark:border-gray-700"
                            >
                                {tech}
                            </p>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DetailsProjectModal