import React from "react"

interface TimeLineCardProps {
    title: String,
    description: String,
}

const TimeLineCard: React.FC<TimeLineCardProps> = ({title, description}) => {
    return (
        <div className="flex flex-col items-start justify-center">
            <p className="h2 mb-8 cursor-pointer hover:text-light-main dark:hover:text-dark-main transition-all"> {title} </p>
            <div className=" w-full max-w-[300px] min-h-[150px] md:w-[300px] md:h-[150px] flex items-center justify-center bg-[#F2F2F2] hover:bg-[#EEEEEE] dark:bg-[#333333] hover:dark:bg-[#2F2F2F] rounded-2xl cursor-pointer transition-all">
                <p className="p text-center p-4"> {description} </p>
            </div>
        </div>
    )
}

export default TimeLineCard