import { useEffect, useState } from 'react';
import '../styles/globals.css'
import { Roboto_Mono, Roboto } from '@next/font/google'
import Loading from '../components/Loading'

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

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, [])
  return (
    <>
      {loading ? <Loading/> : 
      <main className={`${robotoMono.variable} ${roboto.variable} font-sans`}>
        <Component {...pageProps} />
      </main>} 
    </>
  )
}
