'use client'

import styles from './lifeStyle.module.css'
import { hobbies } from '@/data/hobbies'
import Carousel from '../../components/carousel'
import { useIsTouchDevice } from '@/utils/isTouchDevice'
import LifeStyleBento from '../../components/lifeStyleBento'
import { CarouselCard } from '@/ui/components/carouselCard'
import TitleAnimation from '@/ui/components/titleAnimation'
import { FadeIn } from '@/ui/components/fadeIn'

export default function LifeStyle() {
  const isTouch = useIsTouchDevice()

  return (
    <section className="noSpacing">
      <div className="h-(--spacing-160)" />
      <TitleAnimation position={'center'}>
        <h2 className={styles.title} data-animate="title">LiFeSTYlE</h2>
      </TitleAnimation>
      <div className="h-(--spacing-80)" />

      {isTouch ? (
        <div className={styles.carouselContainer}>
          <FadeIn>
            <Carousel
              data={hobbies}
              renderItem={(item, i, active) => (
                <CarouselCard
                  {...item}
                  variant={i !== active ? 'not-selected' : ''}
                />
              )}
            />
          </FadeIn>
        </div>
      ) : (
        <LifeStyleBento data={hobbies} />
      )}

      <div className="h-(--spacing-160)" />
    </section>
  )
}