import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '../components/NavBar'
import HamburgerMenu from '../components/HamburgerMenu'
import ThemeSwitch from '@/components/ThemeSwitch'
import FirstSection from '@/sections/FirstSection'
import SecondSection from '@/sections/SecondSection'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HamburgerMenu />
      <ThemeSwitch />
      <FirstSection />
      <SecondSection />
    </div>
  )
}
