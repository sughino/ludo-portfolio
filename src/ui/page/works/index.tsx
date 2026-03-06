'use client'

import styles from './works.module.css'
import { works } from '@/data/works'
import Carousel from '../../components/carousel'
import { useIsTouchDevice } from '@/utils/isTouchDevice'
import HorizontalScroll from '../../components/horizontalScroll'
import { CarouselCard } from '@/ui/components/carouselCard'
import TitleAnimation from '@/ui/components/titleAnimation'

export default function Works() {
  const isTouch = useIsTouchDevice()

  return (
    <section className="noSpacing">
      <div className="h-(--spacing-160)" />
      <TitleAnimation centerTitle={true}>
        <h2 data-animate="title">WoRKs</h2>
      </TitleAnimation>
      <div className="h-(--spacing-40)" />

      {isTouch ? (
        <div className={styles.carouselContainer}>
          <Carousel
            data={works}
            renderItem={(item, i, active) => (
              <CarouselCard
                {...item}
                variant={i !== active ? 'not-selected' : ''}
              />
            )}
          />
        </div>
      ) : (
        <HorizontalScroll data={works} />
      )}
    </section>
  )
}