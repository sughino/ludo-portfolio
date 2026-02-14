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

    // useEffect(() => {
    //     imgHolderRef.current.forEach((img, i) => {
    //         const content = contentRef.current[i]
    //         if (!img || !content) return

    //         const tl = gsap.timeline({ paused: true })

    //         tl.to(content, {
    //             opacity: 0,
    //             x: -20,
    //             // width: 0,
    //             duration: 0.4,
    //             ease: 'power2.out'
    //         }).to(img, {
    //             duration: 0.4,
    //             ease: 'power2.out'
    //         }, '<')

    //         img.addEventListener('mouseenter', () => tl.play())
    //         img.addEventListener('mouseleave', () => tl.reverse())
    //     })
    // }, [])

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