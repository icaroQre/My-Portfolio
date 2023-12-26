'use client'
import { useEffect, useState } from "react"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

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
                <WbSunnyOutlinedIcon sx={{ fontSize: 36, color: '#FFFFFF'}}/>
                :
                <DarkModeOutlinedIcon sx={{ fontSize: 36, color: '#000000'}}/>
            }
        </div>
    )
} 

export default ThemeSwitch