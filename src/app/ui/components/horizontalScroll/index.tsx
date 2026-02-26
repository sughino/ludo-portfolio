'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './horizontalScroll.module.css'
import WorkCard from '../carouselCard'
import { useIsTouchDevice } from '@/app/utils/isTouchDevice'
import type { CarouselType } from '@/app/types/carouselType';

gsap.registerPlugin(ScrollTrigger)

type Props = {
  data: CarouselType[]
}

export default function HorizontalScroll({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isTouch = useIsTouchDevice()

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
        <WorkCard key={i} {...work} />
      ))}
    </div>
  )
}