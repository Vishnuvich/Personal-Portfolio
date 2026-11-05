import Link from 'next/link'
import { ArrowIcon } from '../site/Icon'

type Chapter = {
  when: string
  title: string
  body: string
  chips?: string[]
  link?: { href: string; label: string }
  next?: boolean
}

const chapters: Chapter[] = [
  {
    when: 'Aug 2021 to Sep 2026',
    title: 'Software engineer',
    body: 'I spent 5+ years in software, most recently as a Senior Engineer at QBurst Technologies in Kochi, building front-end applications in Angular with maps, charts and video.',
    chips: ['Angular', 'TypeScript', 'Mapbox GL JS', 'ApexCharts'],
  },
  {
    when: '2025',
    title: 'Retail',
    body: 'Co-founder of Eminent Global Enterprises, which runs the Happenstance Exclusive brand outlet in Kalamassery, and of Prudent Trading Company, which runs Havells Galaxy in Kakkanad. I built and rolled out the internal software that keeps operations smooth and easy for the partners to track and monitor.',
    link: { href: '/#work', label: 'See the retail work' },
  },
  {
    when: '2026',
    title: 'Eminent Global Enterprises',
    body: 'Co-founder of the parent company that runs our retail and import businesses, holds the digital marketing agency, and houses the upcoming brands we are launching.',
  },
  {
    when: '2026',
    title: 'Eminent Business Studio',
    body: 'Co-founder of a digital agency that serves mostly ecommerce and retail brands, helping them grow online and win sales through organic content, performance marketing and influencer campaigns.',
    link: { href: '/#agency', label: 'See what the agency does' },
  },
  {
    when: '2026',
    title: 'Scentyes',
    body: 'Onboarded as a client and now running its performance marketing, organic content and SEO. Around 12 to 15x ROAS, with content bringing consistent views and reach.',
    link: { href: '/#work', label: 'See the story' },
  },
  {
    when: 'Sep 2026',
    title: 'Leaving corporate',
    body: 'I left my job to run my businesses full time.',
  },
  {
    when: 'Coming soon',
    title: 'Something new',
    body: 'Quietly building another brand for India. More soon.',
    next: true,
  },
]

export default function Journey() {
  return (
    <section className="sec journey" id="journey">
      <div className="wrap">
        <h2 style={{ maxWidth: '16ch' }}>The journey so far</h2>
        <p style={{ marginTop: 20, fontSize: 19 }}>
          From writing code for other people’s products to building businesses of my own. This is the path, in order.
        </p>
        <div className="line">
          {chapters.map((c) => (
            <div key={`${c.when}-${c.title}`} className={`chap${c.next ? ' next' : ''}`}>
              <span className="when">{c.when}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                {c.chips ? (
                  <ul className="chips">
                    {c.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                ) : null}
                {c.link ? (
                  <p style={{ marginTop: 10 }}>
                    <Link className="link" href={c.link.href}>
                      {c.link.label} <ArrowIcon />
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
