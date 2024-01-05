import { useEffect, useState } from "react"

export function useSkills () {

    const [skills, setSkills] = useState([]);

    useEffect(() => {

        fetch ('http://localhost:3000/api/skills')
            .then(response => response.json())
            .then(data => { setSkills(data) })

    },[])

    return skills
}