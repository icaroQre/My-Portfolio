import TimeLineCard from "./TimeLineCard"

const TimeLineMobile: React.FC = () => {
    return(
            <div className="w-full md:hidden flex flex-row items-center justify-center px-[5%] mt-8">

                <div className="flex flex-col items-center justify-center border-l-2 border-[#888888] dark:border-[#333333]">
                    <div className="flex flex-row items-center justify-center mt-8">
                        <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full mr-[5%] relative left-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                        <TimeLineCard title={'Final de 2021'} description={'Primeiro contato com a programação na faculdade de Ciência da Computação (UENP)'}/>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-8">
                        <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full mr-[5%] relative left-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                        <TimeLineCard title={'2022'} description={'Estudo em desenvolvimento WEB com JavaScript e introdução a bibliotecas avançadas'}/>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-8">
                        <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full mr-[5%] relative left-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                        <TimeLineCard title={'2023'} description={'Continuaidade nos estudos em programação e contato com novas tecnologias'}/>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-8">
                        <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full mr-[5%] relative left-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                        <TimeLineCard title={'2023'} description={'Trabalhos como freelancer e projeto de extensão'}/>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-8">
                        <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full mr-[5%] relative left-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                        <TimeLineCard title={'2024'} description={'Buscando oportunidades profissionais para colocar meu conhecimento em prática'}/>
                    </div>
                </div>

                
            </div>
    )
}

export default TimeLineMobile