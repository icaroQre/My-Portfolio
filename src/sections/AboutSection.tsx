import PersonalSkills from '@/components/PersonalSkills'
import TimeLine from '@/components/TimeLine'
import TimeLineMobile from '@/components/TimeLineMobile'

const AboutSection: React.FC = () => {
    return(
        <div id='AboutSection' className='w-screen flex flex-col items-center justify-center bg-light-primary dark:bg-dark-primary py-12 md:py-20'>
            <div className="w-screen flex flex-col items-center justify-center bg-light-primary dark:bg-dark-primary mb-32">
                <p className="h2"> Um pouco sobre mim </p>
                <PersonalSkills />
            </div>
            <TimeLine />
            <TimeLineMobile />
        </div>
    )
}

export default AboutSection