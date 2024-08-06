// import Experience from '../../components/Experience'
import { Metadata } from 'next'
// import { getDataFromSanity } from '../../sanity/sanity-utils'
import Hero from '../components/Hero'
// import About from '../../components/About'
// import Projects from '../../components/Projects'
// import Contact from '../../components/Contact'
// import { useCallback } from 'react'
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { particleOptions } from '../utils/Particle'
// import { getDataFromSanity } from '../../sanity/sanity-utils'
// import { GetStaticProps } from 'next'
import { AboutData, ExperienceData, HeroData, ProjectData } from '../utils/types'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import getHeroData from '../actions/hero-action'
import { getAboutData } from '../actions/about.action'
import { getExperienceData } from '../actions/experience.action'
import { getProjects } from '../actions/project-action'

type Props = {
  heroData: HeroData,
  aboutData: AboutData,
  experienceData: ExperienceData[],
  projectData: ProjectData[]
}

export const metadata: Metadata = {
  title: 'Vishnu Surendran',
  description: 'Personal portfolio'
}

// async function getData(type, containsImage, fileName?) {
//   const data = await getDataFromSanity(type, containsImage, false, fileName);
//   return data;
// }


export default async function Home() {
  // const heroData: HeroData = await getData('Hero', true, 'resume');
  const heroData: HeroData = await getHeroData();
  const aboutData: AboutData = await getAboutData();
  const experienceData: ExperienceData[] = await getExperienceData();
  const projectData: ProjectData[] = await getProjects();
  console.log(projectData);

  return (
    <div className="dark">
      <div className='lg:mx-auto lg:max-w-6xl relative'>
        {/* Hero Section */}
        <Hero data={heroData} />
        {/* About Section */}
        <About data={aboutData} />
        {/* Experience Section */}
        <Experience data={experienceData} />
        {/* Projects */}
        <Projects data={projectData} />
        {/* Get in touch */}
        <Contact />
      </div>
    </div>
  )
}

