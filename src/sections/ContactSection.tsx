'use client'
import { Link as LinkScroll } from "react-scroll";
import { Fade } from "react-awesome-reveal"
import geniusPic from "../../public/images/genius_fight.jpg"
import Image from "next/image"

const ContactSection: React.FC = () => {
    return(
        <div id='ContactSection' className='w-screen flex lg:flex-row items-center justify-center bg-light-primary dark:bg-dark-primary py-16 md:py-24 flex-col-reverse'>
            <div className="flex items-center justify-center w-1/3">
                <Fade direction="left">
                <div className="w-[300px] h-[390px] lg:w-[370px] lg:h-[460px] relative items-center justify-center overflow-hidden rounded-2xl">
                    <Image className="saturate-[1.1] hover:saturate-[0] transition-all cursor-pointer" src={geniusPic} alt="Ícaro Queiroz Reccanello" fill={true} sizes="(max-width: 768px)"/>
                </div>
                </Fade>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-1/3 mb-8 lg:mb-0">
            <Fade direction="right">
                
                <div className="flex flex-col">
                    <p className="text-2xl text- lg:text-4xl text-light-primary dark:text-dark-primary">Precisa de um desenvolvedor</p>
                    <p className="text-2xl lg:text-4xl text-light-primary dark:text-dark-primary">para seu próximo desafio?</p>
                    <p className="text-2xl lg:text-4xl text-light-main dark:text-dark-main">Entre em contato</p>
                    <p className="text-2xl lg:text-4xl text-light-primary dark:text-dark-primary font-light">e vamos conversar!</p>
                    
                    <div className="flex flex-row md:flex-col items-start justify-start mt-4 md:mt-0">
                    
                    <div className="flex mr-2 md:mr-0 md:mt-8 social-button text-sm py-1 px-3 hover:bg-dark-primary hover:border-dark-primary dark:hover:bg-light-primary dark:hover:text-light-primary dark:hover:border-light-primary">
                    <p className="hidden md:flex">
                        Email: icaro.queiroz.reccanello@gmail.com
                    </p>
                    <p className="flex md:hidden">
                        Contatos
                    </p>
                    </div>

                    <LinkScroll to="HeroSection" smooth={true}>
                    <div className="md:mt-4 social-button text-sm py-1 px-3 bg-dark-primary border-dark-primary dark:border-light-primary dark:bg-light-primary text-dark-tertiary dark:text-light-secondary hover:text-light-tertiary hover:bg-light-primary hover:border-dark-primary dark:hover:bg-dark-primary dark:hover:text-dark-primary dark:hover:border-light-primary">
                        <p className="hidden md:flex">
                            Outros Contatos
                        </p>
                    <p className="flex md:hidden">
                        Email
                    </p>
                    </div>
                    </LinkScroll>
                    </div>
                </div>
            </Fade>
            </div>
        </div>
    )
}

export default ContactSection