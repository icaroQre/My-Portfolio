'use client'

import { useSkills } from "@/hooks/useSkills"
import SVGcss from "@/icons/SVGcss"
import SVGfigma from "@/icons/SVGfigma"
import SVGhtml from "@/icons/SVGhtml"
import SVGjs from "@/icons/SVGjs"
import SVGmongo from "@/icons/SVGmongo"
import SVGpostgresql from "@/icons/SVGpostgresql"
import SVGreact from "@/icons/SVGreact"
import SVGstyledComponents from "@/icons/SVGstyledComponents"
import SVGtailwind from "@/icons/SVGtailwind"
import SVGts from "@/icons/SVGts"
import { AnyMxRecord } from "dns"
import React, { useEffect, useState } from "react"

const TechIcons = () => {
    
    const [description, setDescription] = useState <String>('↑ Toque sobre o ícone que deseja saber mais detalhes ↑')
    const skills: any = useSkills()

    const selectDescription = (name: String) => {
        setDescription( skills.find((element: any) => element.name === name).description )
    }
    const defaultDescription = () =>{
        setDescription('↑ Toque sobre o ícone que deseja saber mais detalhes ↑')
    }

    return(
        <>
            <div className="md:w-3/6 w-3/4 flex flex-row items-center justify-center my-6 flex-wrap min-w-96">
                <div id="html" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGhtml width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="css" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGcss width={50} height={50} className="pointer-events-none md:m-8 m-4" />
                </div>
                <div id="figma" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGfigma width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="javaScript" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGjs width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="typeScript" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGts width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="reactJs" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGreact width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="styledComponents" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGstyledComponents width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="tailwind" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGtailwind width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="mongoDb" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGmongo width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="postgreSql" onMouseOver={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} onMouseLeave={() => defaultDescription()} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGpostgresql width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
            </div>

            <div className="md:w-3/6 w-3/4 border border-[#888] rounded-2xl py-8 flex px-12 items-center justify-center">
                <p className="p text-center"> {description} </p>
            </div>
        </>
    )
}

export default TechIcons 