'use client'

import { useEffect, useRef } from 'react';
import styles from './works.module.css';
import WorkCard from "../../components/carouselCard";
import { works } from '@/app/data/works';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Carousel from '../../components/carousel';

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const container = containerRef.current;
        const scrollWidth = container.scrollWidth - window.innerWidth;
        const lastChild = container.lastElementChild as HTMLElement | null;
        const lastChildWidth = lastChild?.clientWidth || 0;
        const finalPadding = (window.innerWidth - lastChildWidth) / 2;
        const totalScroll = scrollWidth + finalPadding;

        const horizontalScroll = gsap.to(container, {
            x: () => -totalScroll,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                start: 'top top',
                end: () => `+=${totalScroll}`,
                anticipatePin: 0,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    if (self.progress >= 1) {
                        self.scroll(self.end);
                    } else if (self.progress <= 0) {
                        self.scroll(self.start);
                    }
                }
            }
        });

        return () => {
            horizontalScroll.kill();
        };
    }, []);

    return (
        <section className="noSpacing">
            <div className="h-(--spacing-160)" />
            <h2>WoRKs</h2>
            <div className="h-(--spacing-40)" />
            <div ref={containerRef} className={`hidden md:flex ${styles.worksContainer}`}>
                {works.map((work, i) => (
                    <WorkCard 
                        key={i}
                        title={work.title}
                        color={work.color}
                        img={work.img}
                        width={work.width}
                        height={work.height}
                        description={work.description}
                    />
                ))}
            </div>
            <div className={styles.carouselContainer}>
                <Carousel data={works} />
            </div>
        </section>
    )
}//TODO sistema, bug in device flick a caso dovuto allo scroll laterale
//TODO metti le card non solo per la larghezza ma in base a device o desktop