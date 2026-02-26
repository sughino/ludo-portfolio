'use client'

import styles from './works.module.css'
import { works } from '@/app/data/works'
import Carousel from '../../components/carousel'
import { useIsTouchDevice } from '@/app/utils/isTouchDevice'
import HorizontalScroll from '../../components/horizontalScroll'

export default function Works() {
  const isTouch = useIsTouchDevice()

  return (
    <section className="noSpacing">
      <div className="h-(--spacing-160)" />
      <h2>WoRKs</h2>
      <div className="h-(--spacing-40)" />

      {isTouch ? (
        <div className={styles.carouselContainer}>
          <Carousel data={works} />
        </div>
      ) : (
        <HorizontalScroll data={works} />
      )}
    </section>
  )
}