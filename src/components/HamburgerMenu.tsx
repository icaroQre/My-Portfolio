'use client'
import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link';

const HamburgerMenu = () => {
    const [visible, setVisible] = useState<Boolean>(false)
    const toogleMenu = () => {
        setVisible(!visible)
    }

    return (
        <>
        <p className="font-bold text-xl text-light-tertiary dark:text-dark-tertiary cursor-pointer fixed top-6 left-4 md:hidden z-50"> <LinkScroll to="HeroSection" smooth={true}> QRE </LinkScroll> </p>
        { visible ? 
        <div onClick={toogleMenu} className='fixed flex items-center justify-center w-screen h-screen bg-[#000000]/85 md:hidden z-40 backdrop-blur-[2px]'>
            <div className='flex flex-col items-center justify-center'>
            <ul className='bg-light-secondary dark:bg-dark-secondary rounded-2xl py-2 md:hidden mb-12 z-50' >
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> <LinkScroll onClick={toogleMenu} to="HeroSection" smooth={true}> Home </LinkScroll> </li>
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> <LinkScroll onClick={toogleMenu} to="AboutSection" smooth={true}> Sobre </LinkScroll> </li>
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> <Link href="https://github.com/icaroQre"> Git Hub </Link> </li>
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> <LinkScroll onClick={toogleMenu} to="HeroSection" smooth={true}> Contato </LinkScroll> </li>
                <li className='px-16 py-4 text-[#FFFFFF] flex items-center justify-center'> <LinkScroll onClick={toogleMenu} to="ProjectSection" smooth={true}> Projetos </LinkScroll> </li>
            </ul>
            <CloseRoundedIcon sx={{ color: '#FFFFFF', fontSize: 52 }} />
            </div>
        </div>   
        :
        <div onClick={toogleMenu} className='md:hidden fixed top-4 right-4 text-light-tertiary dark:text-dark-tertiary z-50'>
            <MenuRoundedIcon sx={{fontSize: 46}} strokeWidth={6} />
        </div>
        }    
        </>
    )
}

export default HamburgerMenu