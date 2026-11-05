'use client'

import { useState } from 'react'
import Link from 'next/link'
import { site } from '@/content/site'
import { ArrowIcon, CloseIcon, MenuIcon } from './Icon'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <i />
          {site.name}
        </Link>
        <ul>
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link className="btn sm" href="/#contact">
          Let’s connect <ArrowIcon />
        </Link>
        <button
          className="menu"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`} aria-label="Mobile">
        {[...site.nav, { label: 'Let’s connect', href: '/#contact' }].map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
