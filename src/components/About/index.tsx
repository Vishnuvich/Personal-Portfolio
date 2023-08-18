'use client'

import {motion} from 'framer-motion'
import { slideFromLeft, slideFromRight } from '../../utils/Animations'
import {PortableText} from '@portabletext/react'
import { AboutData } from '../../utils/types';

type Props = {
  data: AboutData
}

function About({data}: Props) {

  
  return (
    <section className='flex flex-col py-10 px-5'>
    <motion.div className='flex flex-col justify-start leading-6 md:leading-7 lg:leading-8 text-sm md:text-base' initial={'initial'} whileInView={'animate'}        viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.2}}>
      <motion.h2 variants={slideFromLeft} className=' dark:text-slate-200 text-2xl mb-10' id='skills'>About Me</motion.h2>
      <motion.div variants={slideFromRight} className='dark:text-slate-400 '>
        <PortableText value={data?.aboutContent}/>
      </motion.div>
      <motion.p variants={slideFromRight} className='dark:text-slate-400 py-4' id='skills'>
        Here are few technologies I&apos;ve been working with recently:
      </motion.p>
      <motion.div className='flex justify-start dark:text-slate-400 leading-9 px-5'>
        {data?.skillsArr?.length && data?.skillsArr?.map((skillArr, i) => {
          return (
            <motion.ul key={i} className={`${i !== 0 ? 'ml-10' : '' } list-circle`}>
            {
              skillArr.map((skill, j) => {
                return (
                  <motion.li key={j} variants={slideFromRight} className='text-teal-500 whitespace-nowrap'> <span className='text-slate-400'>{skill}</span></motion.li>
                  )
              })
            }
          </motion.ul>
        )
        })}
        </motion.div>
    </motion.div>
  </section>
  )
}

export default About