import { Skill } from "@/types/skill.interface";
import { useEffect, useState } from "react"

export function useSkills () {

    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        fetch (window.location.origin + '/api/skills')
            .then(response => response.json())
            .then(data => { setSkills(data) })
    },[])

    return skills
}