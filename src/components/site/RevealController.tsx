'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scroll reveals, applied after hydration so the page is fully visible without JS.
 * Elements already in view are marked visible immediately (no flash); the rest
 * animate in as they enter the viewport.
 */
const RULES: Array<[selector: string, variant: 'up' | 'left', stagger: boolean]> = [
  ['main h2', 'up', false],
  ['.svc-head p, .svc-head .link, .work-head p', 'up', false],
  ['.row', 'left', true],
  ['.feature', 'up', false],
  ['.pair article', 'up', true],
  ['.cmp .r', 'up', true],
  ['.chap', 'left', true],
  ['.contact-grid > div, .contact-grid form', 'up', false],
  ['.stack ul', 'up', false],
  ['.post-card', 'up', true],
]

function apply(): IntersectionObserver | undefined {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const targets: HTMLElement[] = []

  RULES.forEach(([selector, variant, stagger]) => {
    document.querySelectorAll<HTMLElement>(selector).forEach((el, n) => {
      if (el.hasAttribute('data-rv')) return
      el.setAttribute('data-rv', variant)
      if (stagger) el.style.setProperty('--i', String(n % 4))
      targets.push(el)
    })
  })

  if (reduce) {
    targets.forEach((el) => el.classList.add('in'))
    return undefined
  }

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
    { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
  )

  targets.forEach((el) => {
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add('in')
    else io.observe(el)
  })

  return io
}

export default function RevealController() {
  const pathname = usePathname()

  useEffect(() => {
    let io: IntersectionObserver | undefined
    let timer: ReturnType<typeof setTimeout> | undefined
    let cancelled = false

    const run = () => {
      if (!cancelled) io = apply()
    }

    // Wait for the page (and React's hydration of it) to settle before touching the DOM.
    const start = () => {
      timer = setTimeout(run, 350)
    }
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })

    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
      window.removeEventListener('load', start)
      io?.disconnect()
    }
  }, [pathname])

  return null
}
