import Image from 'next/image'
import styles from './lifeStyleBento.module.css'
import type { CarouselType } from '@/types/carouselType';
import { FadeIn } from '../fadeIn';

type Props = {
  data: CarouselType[]
}

export default function LifeStyleBento({ data }: Props) {
  return (
    <div className={styles.lifeStyleContainer}>
      {data.map((hobby, i) => (
        <FadeIn key={i}>
          <div
            className={styles.lifeStyleInnerContainer}
            data-variant={i % 2 !== 0 ? 'reverse' : ''}
          >
            <div className={styles.holderImg} data-cursor="image" data-label={hobby.img}>
              <Image
                src={hobby.img}
                width={hobby.width}
                height={hobby.height}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={`${hobby.title} img`}
              />
            </div>

            <div className={styles.lifeStyleContentContainer}>
              <h3>{hobby.title}</h3>
              <p data-cursor="text">{hobby.description}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}