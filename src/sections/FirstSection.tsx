import SocialLinks from "@/components/SocialLinks"
import ThemeSwitch from "@/components/ThemeSwitch"
import '../app/tailwind.css'

const FirstSection: React.FC = () => {
    return (
        <>
        <div className="w-screen h-screen bg-light-primary dark:bg-dark-primary flex items-center justify-center">

            <div className="w-screen max-w-xl lg:w-3/6 lg:max-w-screen-lg h-screen flex items-center justify-center flex-row md:flex-col">
                <div className="w-4/5 md:w-3/5 flex flex-col items-start justify-center">
                    <p className="h1 font-medium mb-2"> Ícaro Queiroz </p>
                    <p className="h1 font-light text-light-main dark:text-dark-main hidden md:flex whitespace-nowrap"> &lt; Desenvolvedor &frasl; &gt; </p>
                    <p className="h1 font-light text-light-main dark:text-dark-main flex md:hidden whitespace-nowrap"> &lt; Developer &frasl; &gt; </p>
                    <p className="h3 my-8">Olá! sou um estudante de Ciência da Computação apaixonado por criar experiências digitais incríveis. Com habilidades técnicas sólidas e uma atenção especial ao design, transformo conceitos em interfaces web interativas e funcionais. Pegue um café e conheça um pouco sobre mim e alguns projetos em que trabalhei. : )</p>
                    <SocialLinks />
                </div>
            </div>

            <div className="hidden lg:flex lg:w-3/6 h-screen items-center justify-center"></div>
        </div>
        </>
    )
}

export default FirstSection