'use client'

import styles from './lifeStyle.module.css'
import { hobbies } from '@/data/hobbies'
import Carousel from '../../components/carousel'
import { useIsTouchDevice } from '@/utils/isTouchDevice'
import LifeStyleBento from '../../components/lifeStyleBento'
import { CarouselCard } from '@/ui/components/carouselCard'

export default function LifeStyle() {
  const isTouch = useIsTouchDevice()

  return (
    <section className="noSpacing">
      <div className="h-(--spacing-160)" />
      <h2>LiFeSTYlE</h2>
      <div className="h-(--spacing-80)" />

      {isTouch ? (
        <div className={styles.carouselContainer}>
          <Carousel
            data={hobbies}
            renderItem={(item, i, active) => (
              <CarouselCard
                {...item}
                variant={i !== active ? 'not-selected' : ''}
              />
            )}
          />
        </div>
      ) : (
        <LifeStyleBento data={hobbies} />
      )}

      <div className="h-(--spacing-160)" />
    </section>
  )
}