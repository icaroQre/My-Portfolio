import { Project } from "@/types/project.interface";
import { useEffect, useState } from "react"

export function useProjects () {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch (window.location.origin + '/api/projects')
            .then(response => response.json())
            .then(data => { setProjects(data) })
    },[])

    return projects
}