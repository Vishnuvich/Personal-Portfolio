'use client'

import { useEffect, useRef } from 'react'

const GAP = 30

/**
 * A dot grid anchored to the page (not the viewport). Dots swell and warm toward
 * the cursor, and slide past it as you scroll. Draws only the visible rows.
 */
export default function BackgroundField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = matchMedia('(pointer: coarse)').matches
    let W = 0
    let H = 0
    let mx = -999
    let my = -999
    let sx = -999
    let sy = -999
    let raf = 0

    const size = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2)
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W * d
      canvas.height = H * d
      ctx.setTransform(d, 0, 0, d, 0, 0)
    }

    const draw = (t: number) => {
      if (sx < -900) {
        sx = mx
        sy = my
      } else {
        sx += (mx - sx) * 0.14
        sy += (my - sy) * 0.14
      }
      ctx.clearRect(0, 0, W, H)
      const sc = window.scrollY
      const row0 = Math.floor(sc / GAP) - 1
      const row1 = Math.ceil((sc + H) / GAP) + 1
      const time = t / 1600
      for (let gx = GAP / 2; gx < W; gx += GAP) {
        for (let r = row0; r <= row1; r++) {
          const gp = r * GAP + GAP / 2
          const gy = gp - sc
          const dx = gx - sx
          const dy = gy - sy
          const d = Math.hypot(dx, dy)
          const near = Math.max(0, 1 - d / 200)
          const k = near * near
          const wave = reduce ? 0 : 0.5 * Math.sin(gp / 150 + gx / 230 + time)
          const px = gx + (d > 0 ? dx / d : 0) * k * 14
          const py = gy + (d > 0 ? dy / d : 0) * k * 14
          const rad = Math.max(0.6, 1.2 + wave * 0.5 + k * 3.4)
          ctx.fillStyle =
            near > 0.02
              ? `rgba(242,78,10,${0.22 + 0.7 * k})`
              : `rgba(15,17,21,${0.12 + Math.max(0, wave) * 0.07})`
          ctx.beginPath()
          ctx.arc(px, py, rad, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      if (!reduce && !touch) raf = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    const onLeave = () => {
      mx = -999
      my = -999
    }
    const onScroll = () => draw(0)

    size()
    window.addEventListener('resize', size)
    if (reduce || touch) {
      window.addEventListener('scroll', onScroll, { passive: true })
      draw(0)
    } else {
      window.addEventListener('pointermove', onMove, { passive: true })
      document.documentElement.addEventListener('pointerleave', onLeave)
      raf = requestAnimationFrame(draw)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas id="bgfx" ref={ref} aria-hidden="true" />
}
