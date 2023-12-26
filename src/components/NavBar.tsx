import React from "react";

const NavBar: React.FC = () => {
    return(
        <div className="fixed top-0 left-0 hidden md:w-screen md:bg-inherit md:flex md:items-center md:justify-between md:py-4 md:px-16 md:bg-light-primary md:dark:bg-dark-primary" >
            <p className="font-bold text-xl text-light-tertiary dark:text-dark-tertiary cursor-pointer"> QRE </p>
            <ul className="flex items-center justify-center">
                <li className="pl-8 font-bold text-base text-light-tertiary dark:text-dark-tertiary hover:scale-110 transition-all cursor-pointer"> <p> Home </p> </li>
                <li className="pl-8 font-bold text-base text-light-tertiary dark:text-dark-tertiary hover:scale-110 transition-all cursor-pointer"> <p> Sobre </p> </li>
                <li className="pl-8 font-bold text-base text-light-tertiary dark:text-dark-tertiary hover:scale-110 transition-all cursor-pointer"> <p> Git Hub </p> </li>
                <li className="pl-8 font-bold text-base text-light-tertiary dark:text-dark-tertiary hover:scale-110 transition-all cursor-pointer"> <p> Contato </p> </li>
                <li className="pl-8"> <p className="bg-light-secondary dark:bg-dark-secondary px-4 py-2 rounded-2xl text-white font-bold text-[#FFFFFF] text-base hover:bg-light-tertiary dark:hover:bg-dark-tertiary transition-all cursor-pointer"> Projetos </p> </li>
            </ul>
        </div>
    )
}

export default NavBar