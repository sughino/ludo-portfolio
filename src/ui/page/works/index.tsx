'use client'

import styles from './works.module.css'
import { works } from '@/data/works'
import Carousel from '../../components/carousel'
import { useIsTouch } from '@/contexts/DeviceContext'
import HorizontalScroll from '../../components/horizontalScroll'
import { CarouselCard } from '@/ui/components/carouselCard'
import TitleAnimation from '@/ui/components/titleAnimation'
import { useRef } from "react";
import gsap from 'gsap'
import { useRouter } from "next/navigation";
import { FadeIn } from '@/ui/components/fadeIn'

export default function Works() {
  const isTouch = useIsTouch()
  const animationDivRef= useRef<HTMLDivElement>(null);
  const router = useRouter();
  const tl = gsap.timeline();

  const goTo = (id: string) => {
    if (!animationDivRef.current) return;

    document.body.style.overflowY = "hidden";
    tl.to(animationDivRef.current, {
      y: 0,
      duration: 0.9,
      ease: "power4.out",
      onComplete: () => {
        router.push(`/${id}`);
      }
    })
    .to(
      animationDivRef.current,
      {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.4"
    )
  }

  return (
    <section className="noSpacing">
      <div className="h-(--spacing-160)" />
      <TitleAnimation position={'center'}>
        <h2 data-animate="title" translate="no" className="notranslate">WoRKs</h2>
      </TitleAnimation>
      <div className="h-(--spacing-40)" />
      
      {isTouch ? (
        <div className={styles.carouselContainer}>
          <FadeIn>
            <Carousel
              data={works}
              renderItem={(item, i, active) => (
                <CarouselCard
                  {...item}
                  variant={i !== active ? 'not-selected' : ''}
                  onClick={(id) => goTo(id)}
                />
              )}
            />
          </FadeIn>
        </div>
      ) : (
        <HorizontalScroll data={works} onClick={(id) => goTo(id)}/>
      )}
      <div className={styles.animationDiv} ref={animationDivRef}/>
    </section>
  )
}