import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './global.css'
import { site } from '@/content/site'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import BackgroundField from '@/components/site/BackgroundField'
import ScrollProgress from '@/components/site/ScrollProgress'
import RevealController from '@/components/site/RevealController'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-display',
})

const body = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  themeColor: '#FCFCFB',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll reveals only when JS is running, so the page is fully visible without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <ScrollProgress />
        <BackgroundField />
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <RevealController />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
