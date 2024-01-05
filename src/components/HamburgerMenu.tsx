'use client'
import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const HamburgerMenu = () => {
    const [visible, setVisible] = useState<Boolean>(false)
    const toogleMenu = () => {
        setVisible(!visible)
    }

    return (
        <>
        <p className="font-bold text-xl text-light-tertiary dark:text-dark-tertiary cursor-pointer fixed top-6 left-4 md:hidden"> QRE </p>
        { visible ? 
        <div onClick={toogleMenu} className='fixed flex items-center justify-center w-screen h-screen bg-[#000000]/85 md:hidden z-50'>
            <div className='flex flex-col items-center justify-center'>
            <ul className='bg-light-secondary dark:bg-dark-secondary rounded-2xl py-2 md:hidden mb-12' >
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> Home </li>
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> Sobre </li>
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> Git Hub </li>
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> Contato </li>
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> Projetos </li>
            </ul>
            <CloseRoundedIcon sx={{ color: '#FFFFFF', fontSize: 52 }} />
            </div>
        </div>   
        :
        <div onClick={toogleMenu} className='md:hidden fixed top-4 right-4 text-light-tertiary dark:text-dark-tertiary'>
            <MenuRoundedIcon sx={{fontSize: 46}} strokeWidth={6} />
        </div>
        }    
        </>
    )
}

export default HamburgerMenu