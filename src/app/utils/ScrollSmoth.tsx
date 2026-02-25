'use client'

import { ReactNode, useEffect } from 'react'
import gsap from 'gsap'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    })

    window.lenis = lenis

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)

    gsap.ticker.lagSmoothing(0)
    
    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
      window.lenis = undefined
    }
  }, [])

  return <>{children}</>
}