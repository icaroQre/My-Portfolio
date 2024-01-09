'use client'

import React from "react";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";

const NavBar: React.FC = () => {

    return(
        <div className="fixed z-50 top-0 left-0 hidden md:w-screen md:bg-inherit md:flex md:items-center md:justify-between md:py-4 md:px-16 md:bg-light-primary md:dark:bg-dark-primary" >
            <p className="font-bold text-xl text-light-tertiary dark:text-dark-tertiary cursor-pointer"> <LinkScroll to="HeroSection" smooth={true}> QRE </LinkScroll> </p>
            <ul className="flex items-center justify-center">
                <li className="pl-8 font-bold text-base text-light-tertiary dark:text-dark-tertiary hover:scale-110 transition-all cursor-pointer hover:text-light-main dark:hover:text-dark-main h1">
                    <LinkScroll to="HeroSection" spy={true} smooth={true}> Home </LinkScroll>
                </li>
                <li className="pl-8 font-bold text-base text-light-tertiary dark:text-dark-tertiary hover:scale-110 transition-all cursor-pointer hover:text-light-main dark:hover:text-dark-main h1">
                    <LinkScroll to="AboutSection" smooth={true}> Sobre </LinkScroll>
                </li>
                <li className="pl-8 font-bold text-base text-light-tertiary dark:text-dark-tertiary hover:scale-110 transition-all cursor-pointer hover:text-light-main dark:hover:text-dark-main h1">
                    <Link href="https://github.com/icaroQre"> Git Hub </Link>
                </li>
                <li className="pl-8 font-bold text-base text-light-tertiary dark:text-dark-tertiary hover:scale-110 transition-all cursor-pointer hover:text-light-main dark:hover:text-dark-main h1">
                    <LinkScroll to="HeroSection" smooth={true}> Contato </LinkScroll>
                </li>

                <li className="pl-8"> <LinkScroll to="ProjectSection" smooth={true}> <p className="bg-light-secondary dark:bg-dark-secondary px-4 py-2 rounded-2xl text-white font-bold text-[#FFFFFF] text-base hover:bg-light-tertiary dark:hover:bg-dark-tertiary transition-all cursor-pointer">  Projetos  </p> </LinkScroll> </li>
            </ul>
        </div>
)
}


export default NavBar