'use client'

import Image from 'next/image'
import styles from './scroll.module.css';
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import type { Logo } from '@/app/types/logo';

export function LogoScroller({ data }: { data: Logo[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const isHoveringRef = useRef(false)
  const scrollVelocityRef = useRef(0)

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    const scroller = scrollerRef.current;
    gsap.set(scroller, { x: 0 })

    const totalWidth = scroller.scrollWidth / 2;

    tweenRef.current = gsap.to(scroller, {
      x: -totalWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (value) => {
          const num = parseFloat(value)
          const limit = -totalWidth
          const wrapped = ((num % limit) + limit) % limit
          return `${wrapped}px`
        }
      }
    })

    const container = containerRef.current
    let rafId: number

    const handleEnter = () => {
      isHoveringRef.current = true
      gsap.to(tweenRef.current, {
        timeScale: 0,
        duration: 0.8,
        ease: 'power4.out'
      })
    }

    const handleLeave = () => {
      isHoveringRef.current = false
      if (Math.abs(scrollVelocityRef.current) < 0.1) {
        gsap.to(tweenRef.current, {
          timeScale: 1,
          duration: 0.6,
          ease: 'power3.out'
        })
      }
    }

    const updateScrollVelocity = () => {
      if (!window.lenis || !tweenRef.current) {
        rafId = requestAnimationFrame(updateScrollVelocity)
        return
      }

      const velocity = window.lenis.velocity
      scrollVelocityRef.current = velocity

      if (!isHoveringRef.current) {
        const velocityMultiplier = Math.min(Math.abs(velocity) / 1.5, 3)
        const targetTimeScale = 1 + velocityMultiplier * 0.5

        gsap.to(tweenRef.current, {
          timeScale: targetTimeScale,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: true
        })

        if (Math.abs(velocity) < 0.1) {
          gsap.to(tweenRef.current, {
            timeScale: 1,
            duration: 0.6,
            ease: 'power3.out'
          })
        }
      }

      rafId = requestAnimationFrame(updateScrollVelocity)
    }

    container.addEventListener('mouseenter', handleEnter)
    container.addEventListener('mouseleave', handleLeave)
    rafId = requestAnimationFrame(updateScrollVelocity)

    return () => {
      container.removeEventListener('mouseenter', handleEnter)
      container.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(rafId)
      tweenRef.current?.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.logoScrollContainer}>
      <div ref={scrollerRef} className={styles.scrollerInner}>
        <div className={styles.track}>
          {[...data, ...data].map((d, i) => (
            <div
              key={i}
              className={styles.logoItemWrapper}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.1,
                  filter: 'brightness(0.8)',
                  duration: 0.5,
                  ease: 'power2.out'
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  filter: 'brightness(1)',
                  duration: 0.5,
                  ease: 'power2.out'
                })
              }}
            >
              <Image
                src={d.src}
                alt={d.alt}
                width={d.width}
                height={d.height}
                className={styles.logoItem}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}