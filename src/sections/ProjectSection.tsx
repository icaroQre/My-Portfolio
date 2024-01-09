'use client'
import ProjectCard from "@/components/ProjectCard"
import { useProjects } from "@/hooks/useProjects"
import { Project } from "@/types/project.interface"
import { Fade } from "react-awesome-reveal"

const ProjectSection: React.FC = () => {

    const projects: Project[] = useProjects()
 
    return (
        <div id="ProjectSection" className="w-screen bg-light-primary dark:bg-dark-primary flex flex-col items-center justify-center py-12 md:py-20">
                <p className="h2 mb-10 md:mb-20"> Projetos </p>
                <div className="flex flex-col md:flex-row items-center justify-center w-screen md:w-3/4 flex-wrap">
                    {
                        projects.map((element, index) => <ProjectCard key={index} project={element}/>)
                    }
                </div>
        </div>
    )
}

export default ProjectSection