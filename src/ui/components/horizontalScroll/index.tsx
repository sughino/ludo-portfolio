'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './horizontalScroll.module.css'
import { CarouselCard } from '../carouselCard'
import { useIsTouch } from '@/contexts/DeviceContext'
import type { CarouselType } from '@/types/carouselType';
import { FadeIn } from '../fadeIn'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  data: CarouselType[];
  onClick?: (id: string) => void;
}

export default function HorizontalScroll({ data, onClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isTouch = useIsTouch()

  useLayoutEffect(() => {
    if (isTouch) return
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const container = containerRef.current!
      
      const scrollWidth = container.scrollWidth - window.innerWidth
      const lastChild = container.lastElementChild as HTMLElement | null
      const lastChildWidth = lastChild?.clientWidth || 0
      const finalPadding = (window.innerWidth - lastChildWidth) / 2
      const totalScroll = scrollWidth + finalPadding

      gsap.to(container, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [isTouch])

  return (
    <div ref={containerRef} className={styles.worksContainer}>
        {data.map((work, i) => (
          <FadeIn key={i} width='full'>
            <CarouselCard key={i} onClick={(id) => onClick?.(id)} {...work} />
          </FadeIn>
        ))}
    </div>
  )
}