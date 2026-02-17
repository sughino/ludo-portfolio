'use client'

import Image from 'next/image';
import Carousel from '../../components/carousel'
import styles from './lifeStyle.module.css'
import { hobbies } from '@/app/data/hobbies'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LifeStyle () {
    const imgHolderRef = useRef<(HTMLDivElement | null)[]>([]);
    const contentRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        imgHolderRef.current.forEach((img, i) => {
            const content = contentRef.current[i]
            if (!img || !content) return

            const parent = img.closest(`.${styles.lifeStyleInnerContainer}`) as HTMLElement
            const isReverse = parent?.dataset.variant === 'reverse'
            const xValue = isReverse ? -20 : 20

            const initialImgWidth = img.getBoundingClientRect().width
            const initialContentWidth = content.getBoundingClientRect().width
            const targetImgWidth = initialImgWidth + initialContentWidth

            const tl = gsap.timeline({ paused: true })

            tl.to(content, {
                opacity: 0,
                x: xValue,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to(content, {
                width: 0,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to(img, {
                width: targetImgWidth,
                duration: 0.3,
                ease: 'power2.out'
            }, '-=0.2')

            img.addEventListener('mouseenter', () => tl.play())
            img.addEventListener('mouseleave', () => tl.reverse())
        })
    }, [])

    return (
        <section className="noSpacing">
            <div className="h-(--spacing-160)" />
            <h2>LiFeSTYlE</h2>
            <div className="h-(--spacing-80)" />

            <div className={`hidden md:grid ${styles.lifeStyleContainer}`}>
                {hobbies.map((hobby, i) => (
                    <div key={i} className={styles.lifeStyleInnerContainer} data-variant={i%2 !== 0 ? 'reverse' : '' }>
                        <div 
                            className={styles.holderImg}
                            ref={(el) => { imgHolderRef.current[i] = el }}
                        >
                            <Image 
                                src={hobby.img}
                                width={hobby.width}
                                height={hobby.height}
                                alt={`${hobby.title} img`}
                            />
                        </div>
                        <div 
                            className={styles.lifeStyleContentContainer}
                            ref={(el) => { contentRef.current[i] = el }}
                        >
                            <h3>{hobby.title}</h3>
                            <p>{hobby.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.carouselContainer}>
                <Carousel data={hobbies} />
            </div>

            <div className="h-(--spacing-160)" />
        </section>
    )
}