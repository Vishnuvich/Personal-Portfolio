'use client'

import { useEffect, useRef } from 'react'

/**
 * Halftone hero artwork, drawn as ink through a luminance mask (see global.css) so it has real
 * transparency and melts into the page. It drifts gently against the cursor.
 */
export default function HeroArt() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(pointer: coarse)').matches) return

    let mx = -999
    let my = -999
    let ax = 0
    let ay = 0
    let raf = 0
    const onMove = (e: PointerEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    const loop = () => {
      const r = el.getBoundingClientRect()
      const on = mx > -900
      const tx = on ? ((mx - (r.left + r.width / 2)) / window.innerWidth) * -16 : 0
      const ty = on ? ((my - (r.top + r.height / 2)) / window.innerHeight) * -12 : 0
      ax += (tx - ax) * 0.08
      ay += (ty - ay) * 0.08
      el.style.transform = `translate(${ax}px, ${ay}px) scale(1.04)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div className="art">
      <div
        className="art-stack"
        ref={ref}
        role="img"
        aria-label="Halftone illustration of a developer working at a laptop"
      >
        <div className="art-ink" />
        <div className="art-ink" aria-hidden="true" />
      </div>
    </div>
  )
}
