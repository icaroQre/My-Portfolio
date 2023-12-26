import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '../components/NavBar'
import HamburgerMenu from '../components/HamburgerMenu'
import ThemeSwitch from '@/components/ThemeSwitch'
import FirstSection from '@/sections/FirstSection'

export default function Home() {
  return (
    <div className='light'>
      <NavBar />
      <HamburgerMenu />
      <ThemeSwitch />
      <FirstSection />
    </div>
  )
}
