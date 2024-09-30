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
            <DialogContent className="max-w-[85vw] sm:max-w-[600px]">
                <DialogHeader className="flex w-full flex-row items-center justify-between border-b-[2px] border-gray-border pb-5">
                    <h2 className="text-xl">Detalhes do projeto</h2>
                </DialogHeader>
                <div className="relative flex flex-col items-center gap-3">
                    <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-700">{project.title}</h1>
                    <p className="text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map(tech => <p>{tech}</p>)}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DetailsProjectModal