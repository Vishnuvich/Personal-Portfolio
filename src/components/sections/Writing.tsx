import Link from 'next/link'
import { site } from '@/content/site'
import { ArrowIcon, UpRightIcon } from '../site/Icon'

export default function Writing() {
  return (
    <section className="sec work" id="writing" style={{ padding: '72px 0' }}>
      <div
        className="wrap"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}
      >
        <div>
          <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 44px)' }}>Notes from the journey</h2>
          <p style={{ marginTop: 12 }}>I write about front-end engineering and growing a business on the web.</p>
        </div>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          <Link className="link ink" href="/blog">
            Read the blog <ArrowIcon />
          </Link>
          <a className="link ink" href={site.links.medium} target="_blank" rel="noreferrer">
            Find me on Medium <UpRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
