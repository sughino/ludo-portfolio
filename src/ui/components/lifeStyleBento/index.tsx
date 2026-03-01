'use client'

import Image from 'next/image'
import styles from './lifeStyleBento.module.css'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import type { CarouselType } from '@/types/carouselType';

type Props = {
  data: CarouselType[]
}

export default function LifeStyleBento({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        `.${styles.lifeStyleInnerContainer}`
      )

      items.forEach((item) => {
        const img = item.querySelector<HTMLElement>(
          `.${styles.holderImg}`
        )
        const content = item.querySelector<HTMLElement>(
          `.${styles.lifeStyleContentContainer}`
        )

        if (!img || !content) return

        const isReverse = item.dataset.variant === 'reverse'
        const xValue = isReverse ? -20 : 20

        const tl = gsap.timeline({ paused: true })

        tl.to(content, {
          opacity: 0,
          x: xValue,
          duration: 0.2,
          ease: 'power2.out',
        })
          .to(content, {
            width: 0,
            duration: 0.2,
            ease: 'power2.out',
          })
          .to(
            img,
            {
              flexGrow: 1,
              duration: 0.3,
              ease: 'power2.out',
            },
            '-=0.2'
          )

        item.addEventListener('mouseenter', () => tl.play())
        item.addEventListener('mouseleave', () => tl.reverse())
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={styles.lifeStyleContainer}>
      {data.map((hobby, i) => (
        <div
          key={i}
          className={styles.lifeStyleInnerContainer}
          data-variant={i % 2 !== 0 ? 'reverse' : ''}
        >
          <div className={styles.holderImg}>
            <Image
              src={hobby.img}
              width={hobby.width}
              height={hobby.height}
              alt={`${hobby.title} img`}
            />
          </div>

          <div className={styles.lifeStyleContentContainer}>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}