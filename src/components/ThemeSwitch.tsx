'use client'
import { useEffect, useState } from "react"
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightbulb } from "react-icons/md";

const ThemeSwitch: React.FC = () => {

    const [darkTheme, setDarkTheme] = useState<boolean>(false)

    const toogleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    useEffect(() => {
        
        darkTheme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')

    }, [darkTheme])
    
    return (
        <div onClick={toogleTheme} className="fixed right-4 top-24 cursor-pointer md:right-24">
            {
                darkTheme ? 
                <MdOutlineLightbulb style={{color: "#FFFFFF", fontSize: 36}} />
                :
                <MdOutlineDarkMode style={{color: '#000000', fontSize: 36}}/>
            }
        </div>
    )
} 

export default ThemeSwitch