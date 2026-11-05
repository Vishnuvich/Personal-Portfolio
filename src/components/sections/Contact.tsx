'use client'

import { FormEvent, useState } from 'react'
import { site } from '@/content/site'
import { ArrowIcon } from '../site/Icon'

const reasons = ['Just saying hello', 'Collaboration', 'Working together', 'Business partnership']

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable: the address is still a visible mailto link */
    }
  }

  /* No mail backend yet: open the visitor's email app with the message prefilled. */
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const topics = data.getAll('reason').map(String)
    const message = String(data.get('message') || '').trim()
    const subject = `Hello from ${name || 'your website'}${topics.length ? `: ${topics.join(', ')}` : ''}`
    const body = [message, '', `Name: ${name}`, `Email: ${email}`].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="sec contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <h2>Let’s connect.</h2>
          <p style={{ marginTop: 20, fontSize: 19 }}>
            Whether you run a business, are building something or just want to compare notes, I’d like to hear from you.
          </p>
          <div className="mail">
            <a className="addr" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <button className="copy" type="button" onClick={copy}>
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="alt">
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={site.links.medium} target="_blank" rel="noreferrer">Medium</a>
          </div>
        </div>
        <form onSubmit={submit}>
          <div className="two">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
            </label>
          </div>
          <fieldset>
            <legend>What brings you here?</legend>
            <div className="pills">
              {reasons.map((r) => (
                <label key={r}>
                  <input type="checkbox" name="reason" value={r} />
                  <span>{r}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label>
            What’s on your mind?
            <textarea name="message" placeholder="A few lines about you and what you’d like to talk about." />
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <button className="btn on-dark" type="submit">
              Send message <ArrowIcon />
            </button>
            <span className="note">Opens your email app with the message ready to send.</span>
          </div>
        </form>
      </div>
    </section>
  )
}
