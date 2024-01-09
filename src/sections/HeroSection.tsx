'use client'

import SocialLinks from "@/components/SocialLinks"
import '../app/tailwind.css'
import { Fade } from "react-awesome-reveal"
import Date from "@/components/Date"
import { IoIosArrowDown } from "react-icons/io";
import profilePic from "../../public/images/profilePic.jpeg"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

const HeroSection: React.FC = () => {

    return (
        <>
        <div id="HeroSection" className="w-screen h-screen bg-light-primary dark:bg-dark-primary flex items-center justify-center">
            <div className="w-screen max-w-xl lg:w-3/6 lg:max-w-screen-lg h-screen flex items-center justify-center flex-row md:flex-col">
                <div className="w-4/5 md:w-3/5 flex flex-col items-start justify-center">
            <Fade direction="left" className="w-full">
                    <p className="h1 font-medium mb-2"> Ícaro Queiroz </p>
                    <p className="h1 font-light text-light-main dark:text-dark-main hidden md:flex whitespace-nowrap"> 
                        <Typewriter words={["<Desenvolvedor />"]} typeSpeed={200} deleteSpeed={100} loop={false} cursor={true}/>
                    </p>
                    <p className="h1 font-light text-light-main dark:text-dark-main flex md:hidden whitespace-nowrap"> &lt; Developer &frasl; &gt; </p>
            </Fade>
            <Fade direction="left" delay={200}>
                    <p className="h3 mt-8 mb-4">Olá! sou um estudante de Ciência da Computação apaixonado por criar experiências digitais incríveis. Com habilidades técnicas sólidas e uma atenção especial ao design, transformo conceitos em sistemas interativos e funcionais. Pegue um café e conheça um pouco sobre mim e alguns projetos em que trabalhei. : )</p>
                    <p className="h3 mb-8"> Me envie um E-mail! icaro.queiroz.reccanello@gmail.com</p>
            </Fade>
            <Fade direction="left" className="w-full" delay={400}>
                    <SocialLinks />
            </Fade>
                </div>
            </div>
            <div className="hidden lg:flex lg:w-3/6 h-screen items-center justify-center">
                <Fade direction="right" delay={200}>
                    <div className="w-[350px] h-[460px] relative items-center justify-center overflow-hidden rounded-2xl z-10
                     bg-light-secondary dark:bg-dark-secondary left-[200px] bottom-[-25px] brightness-50">
                    </div>
                         </Fade>
                <Fade direction="right">
                    <div className="w-[350px] h-[460px] relative items-center justify-center overflow-hidden rounded-2xl z-20 right-[175px]">
                        <Image className="saturate-[0] hover:saturate-[1.1] transition-all cursor-pointer" src={profilePic} alt="Ícaro Queiroz Reccanello" fill={true} sizes="(max-width: 768px)"/>
                    </div>
                </Fade>
            </div>
        </div>
        <Date />
        <IoIosArrowDown className="absolute left-[50%] right-[50%] bottom-8 animate-bounce text-2xl md:text-4xl text-light-secondary dark:text-dark-secondary" />
        </>
    )
}

export default HeroSection