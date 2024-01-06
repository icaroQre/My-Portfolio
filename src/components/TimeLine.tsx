import TimeLineCard from "./TimeLineCard"

const TimeLine: React.FC = () => {
    return(
        <>
            <div className="w-full md:flex hidden flex-col items-center justify-center mt-16">
                <div className="w-[2px] h-full absolute bg-[#888888] dark:bg-[#333333]"></div>
                
                <div className="flex flex-row items-center justify-center relative left-[-186px]"> 
                    <TimeLineCard title={'Final de 2021'} description={'Primeiro contato com a programação na faculdade de Ciência da Computação (UENP)'}/>
                    <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full ml-12 relative right-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                </div>
                <div className="flex flex-row items-center justify-center relative right-[-186px]"> 
                    <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full mr-12 relative left-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                    <TimeLineCard title={'2022'} description={'Estudo em desenvolvimento WEB com JavaScript e introdução a bibliotecas avançadas'}/>
                </div>
                <div className="flex flex-row items-center justify-center relative left-[-186px]"> 
                    <TimeLineCard title={'2023'} description={'Continuaidade nos estudos em programação e contato com novas tecnologias'}/>
                    <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full ml-12 relative right-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                </div>
                <div className="flex flex-row items-center justify-center relative right-[-186px]"> 
                    <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full mr-12 relative left-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                    <TimeLineCard title={'2023'} description={'Trabalhos como freelancer e projeto de extensão'}/>
                </div>
                <div className="flex flex-row items-center justify-center relative left-[-186px]"> 
                    <TimeLineCard title={'2024'} description={'Buscando oportunidades profissionais para colocar meu conhecimento em prática'}/>
                    <div className="w-6 h-6 cursor-pointer bg-light-secondary dark:bg-dark-secondary rounded-full ml-12 relative right-[-12px] hover:bg-light-tertiary dark:hover:dark-tertiary"></div>
                </div>
            </div>
        </>
    )
}

export default TimeLine