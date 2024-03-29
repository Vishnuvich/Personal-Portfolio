import { useState } from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Roboto_Mono, Roboto } from '@next/font/google'
import './global.css'
import { getDataFromSanity } from '../../sanity/sanity-utils';
import { HeroData } from '../utils/types';


const robotoMono = Roboto_Mono(
    {subsets: ['latin'],
    variable: '--font-roboto-mono'
  }
  )
  
  const roboto = Roboto(
    {subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto'
  }
  )

  async function getData() {
    const data:HeroData = await getDataFromSanity('Hero', false);
    return data[0];
  }

export default async function RootLayout(props : {children: React.ReactNode, modal: React.ReactNode}) {
  const headerData = await getData(); 
    return (
      <html lang="en">
        <body className={`${robotoMono.variable} ${roboto.variable} font-sans`}>
            <main>
                <div className="pb-5 px-2 min-h-screen bg-primary font-roboto_mono">
                    <Header headerData={headerData} />
                        <div className='min-h-[90vh] pt-16'>
                        {props.children}
                        {props.modal}
                        </div>
                    <Footer />
                </div>
            </main> 
        </body>
      </html>
    )
  }