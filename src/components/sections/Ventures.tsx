import Image from 'next/image'
import { site } from '@/content/site'
import { UpRightIcon } from '../site/Icon'

export default function Ventures() {
  return (
    <section className="sec work" id="work">
      <div className="wrap">
        <div className="work-head">
          <h2>Ventures and partnerships</h2>
          <p>The brands I’ve grown, the businesses I’m building and the systems they run on.</p>
        </div>

        <article className="feature">
          <a className="shot" href={site.links.scentyes} target="_blank" rel="noreferrer">
            <Image
              className="clip"
              src="/images/scentyes.jpg"
              alt="Scentyes online store homepage"
              width={1000}
              height={750}
              sizes="(max-width: 960px) 100vw, 700px"
            />
          </a>
          <div>
            <h3>Scentyes</h3>
            <p>
              A client brand: a platform selling authentic Middle Eastern fragrances in India, with 5ml and 10ml decants so customers
              can try before they buy. I built its sales from scratch, helped establish its offline store, and run its
              performance marketing, organic content and SEO.
            </p>
            <p style={{ marginTop: 12, color: 'var(--ink)', fontWeight: 600 }}>
              Currently at around 12 to 15x ROAS, with content delivering consistent views and reach.
            </p>
            <ul className="chips">
              <li>Performance marketing</li>
              <li>Organic content</li>
              <li>SEO</li>
              <li>Offline store launch</li>
            </ul>
            <a className="link" href={site.links.scentyes} target="_blank" rel="noreferrer">
              Visit scentyes.com <UpRightIcon />
            </a>
          </div>
        </article>

        <div className="pair">
          <article>
            <div className="teaser">
              <div>
                <span>Something new is on the way</span>
                <small>A new luxury brand for India. Stay tuned.</small>
              </div>
            </div>
            <h3>Coming soon</h3>
            <p>In the works: I’m quietly building a new brand. More soon.</p>
          </article>
          <article>
            <div className="shot">
              <Image
                className="clip"
                src="/images/happenstance.jpg"
                alt="Happenstance Exclusive brand outlet storefront in Kalamassery"
                width={1300}
                height={731}
                sizes="(max-width: 960px) 100vw, 560px"
                style={{ aspectRatio: '16 / 10', objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <h3>Retail outlets in Kerala</h3>
            <p>
              Co-founder of Eminent Global Enterprises, which runs the Happenstance Exclusive brand outlet in
              Kalamassery, and of Prudent Trading Company, which runs Havells Galaxy in Kakkanad.
            </p>
          </article>
        </div>

        <div
          className="feature"
          style={{
            marginTop: 72,
            paddingTop: 56,
            paddingBottom: 0,
            marginBottom: 0,
            borderBottom: 0,
            borderTop: '1px solid var(--rule)',
            gridTemplateColumns: '5fr 7fr',
          }}
        >
          <h3 style={{ fontSize: 'clamp(26px, 2.8vw, 36px)' }}>Internal systems for retail</h3>
          <p>
            I built and implemented the internal software at the Havells and Happenstance stores, so operations run
            smoothly and the partners can easily track and monitor them.
          </p>
        </div>
      </div>
    </section>
  )
}
