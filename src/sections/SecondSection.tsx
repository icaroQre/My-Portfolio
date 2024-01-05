import TechIcons from '@/components/TechIcons'
import SVGcss from '@/icons/SVGcss'
import SVGfigma from '@/icons/SVGfigma'
import SVGhtml from '@/icons/SVGhtml'
import SVGjs from '@/icons/SVGjs'
import SVGmongo from '@/icons/SVGmongo'
import SVGpostgresql from '@/icons/SVGpostgresql'
import SVGreact from '@/icons/SVGreact'
import SVGstyledComponents from '@/icons/SVGstyledComponents'
import SVGtailwind from '@/icons/SVGtailwind'
import SVGts from '@/icons/SVGts'

const SecondSection: React.FC = () => {
    return(
        <div className="w-screen flex flex-col items-center justify-center pt-32 bg-light-primary dark:bg-dark-primary">
            <p className="h2"> Um pouco sobre mim </p>

            <TechIcons />
        </div>
    )
}

export default SecondSection