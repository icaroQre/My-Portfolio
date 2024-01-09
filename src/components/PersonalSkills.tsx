'use client'

import { useSkills } from "@/hooks/useSkills"
import SVGcss from "@/icons/SVGcss"
import SVGfigma from "@/icons/SVGfigma"
import SVGhtml from "@/icons/SVGhtml"
import SVGjs from "@/icons/SVGjs"
import SVGmongo from "@/icons/SVGmongo"
import SVGnextJs from "@/icons/SVGnextJs"
import SVGpostgresql from "@/icons/SVGpostgresql"
import SVGreact from "@/icons/SVGreact"
import SVGstyledComponents from "@/icons/SVGstyledComponents"
import SVGtailwind from "@/icons/SVGtailwind"
import SVGts from "@/icons/SVGts"
import { Skill } from "@/types/skill.interface"
import { AnyMxRecord } from "dns"
import React, { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"

const PersonalSkills = () => {
    
    const [description, setDescription] = useState <String>('↑ Toque sobre o ícone que deseja saber mais detalhes ↑')
    const skills: Skill[] = useSkills()

    const selectDescription = (name: String) => {
        setDescription( skills.find((element: Skill) => element.name === name)!.description )
    }
    const defaultDescription = () =>{
        setDescription('↑ Toque sobre o ícone que deseja saber mais detalhes ↑')
    }

    return(
        <>
            <div className="md:w-3/6 w-3/4 flex flex-row items-center justify-center my-6 flex-wrap min-w-96">
                <Fade direction="right" cascade={true} triggerOnce={true} duration={300}>
                <div id="html" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGhtml width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="css" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGcss width={50} height={50} className="pointer-events-none md:m-8 m-4" />
                </div>
                <div id="figma" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGfigma width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="javaScript" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGjs width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="typeScript" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGts width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="reactJs" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGreact width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="nextJs" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGnextJs width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="styledComponents" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGstyledComponents width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="tailwind" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGtailwind width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="mongoDb" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGmongo width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                <div id="postgreSql" onClick={(event: React.MouseEvent<HTMLElement>) => selectDescription(event.currentTarget.id)} className="cursor-pointer hover:scale-125 transition-all">
                    <SVGpostgresql width={50} height={50} className="pointer-events-none md:m-8 m-4"/>
                </div>
                </Fade>
            </div>

                <div className="md:w-3/6 w-3/4 border border-[#888] rounded-2xl py-8 flex px-12 items-center justify-center">
                    <Fade direction="up" delay={150} className="w-full">
                        <p className="p text-center"> {description} </p>
                    </Fade>
                </div>
        </>
    )
}

export default PersonalSkills 