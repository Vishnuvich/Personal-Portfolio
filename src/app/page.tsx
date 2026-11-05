import Hero from '@/components/sections/Hero'
import StackStrip from '@/components/sections/StackStrip'
import Journey from '@/components/sections/Journey'
import Ventures from '@/components/sections/Ventures'
import Agency from '@/components/sections/Agency'
import Principles from '@/components/sections/Principles'
import About from '@/components/sections/About'
import Writing from '@/components/sections/Writing'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <StackStrip />
      <Journey />
      <Ventures />
      <Agency />
      <Principles />
      <About />
      <Writing />
      <Contact />
    </>
  )
}
