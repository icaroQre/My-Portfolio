import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '../components/NavBar'
import HamburgerMenu from '../components/HamburgerMenu'
import ThemeSwitch from '@/components/ThemeSwitch'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import ProjectSection from '@/sections/ProjectSection'
import Footer from '@/components/Footer'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HamburgerMenu />
      <ThemeSwitch />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
