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
            <DialogContent className="max-w-[85vw] bg-[#101010] sm:max-w-[600px]">
                <DialogHeader className="flex w-full flex-row items-center justify-between border-b-[2px] border-gray-border pb-5">
                    <h2 className="text-2xl">Detalhes do projeto</h2>
                    <DialogClose>
                        <X
                            size={24}
                            className="text-[#979797] duration-200 hover:text-white"
                        />
                    </DialogClose>
                </DialogHeader>
                <div className="relative flex flex-col items-center gap-3">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>

                    <div className="flex gap-1.5 text-[#ccc]">
                        {project.technologies.map(tech => <p>{tech}</p>)}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DetailsProjectModal