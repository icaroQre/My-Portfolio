'use client'
import { Link as LinkScroll } from "react-scroll";

const ContactSection: React.FC = () => {
    return(
        <div id='ContactSection' className='w-screen flex flex-col md:flex-row items-center justify-center bg-light-primary dark:bg-dark-primary py-12 md:py-20'>
            <div className="w-1/2 bg-light-tertiary"> 
                {/* My image */}
            </div>
            <div className="w-1/2 items-center justify-center flex flex-col">
                <div className="flex flex-col justify-start w-full md:w-1/2">
                    <p className="text-3xl text-light-primary dark:text-dark-primary">Precisa de um desenvolvedor para seu próximo desafio?</p>
                    <p className="text-3xl text-light-main dark:text-dark-main">Entre em contato</p>
                    <p className="text-3xl text-light-primary dark:text-dark-primary font-light">e vamos conversar!</p>
                    
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
            </div>
        </div>
    )
}

export default ContactSection