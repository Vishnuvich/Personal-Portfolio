import Link from 'next/link'
import HeroArt from '../site/HeroArt'
import { ArrowIcon } from '../site/Icon'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1 className="rise d1">
            From engineer to <em>entrepreneur.</em>
          </h1>
          <p className="sub rise d2">
            I’m <strong>Vishnu Surendran</strong>. I spent 5+ years as a software engineer, then left to build
            businesses: co-founder of <strong>Eminent Global Enterprises</strong> and its digital agency,{' '}
            <strong>Eminent Business Studio</strong>. This is the journey and the work so far.
          </p>
          <div className="cta rise d3">
            <Link className="btn" href="/#journey">
              Follow the journey <ArrowIcon />
            </Link>
            <Link className="link ink" href="/#contact">
              Say hello <ArrowIcon />
            </Link>
          </div>
          <p className="avail rise d4">
            <i />
            Based in Kochi, Kerala · Always glad to connect
          </p>
        </div>
        <div className="portrait">
          <HeroArt />
          <div className="now rise d4">
            <b>Right now</b>
            <span>Growing Scentyes at around 12 to 15x ROAS, running two retail outlets and building something new.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
