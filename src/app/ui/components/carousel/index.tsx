'use client'

import styles from './carousel.module.css';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import CauroselCard from '../carouselCard';
import { works } from '@/app/data/works';
import { hobbies } from '@/app/data/hobbies';

export default function Carousel ({ dataType } : { dataType : 'works' | 'hobbies'}) {
    const [slideCount, setSlideCount] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const currentX = useRef(0);
    const isDragging = useRef(false);

    const data = dataType === 'works' ? works : hobbies;


    const getSlideWidth = () => {
        if (!carouselRef.current) return 100;
        const containerWidth = carouselRef.current.offsetWidth;
        const gap = 16;
        const slideWidthWithGap = containerWidth + gap;
        return (slideWidthWithGap / containerWidth) * 100;
    };


    useEffect(() => {
        if (slidesRef.current) {
            const slideWidth = getSlideWidth();
            gsap.to(slidesRef.current, {
                x: -slideCount * slideWidth + '%',
                duration: 0.6,
                ease: 'power2.out'
            });
        }
    }, [slideCount]);


    const handleStart = (clientX: number) => {
        isDragging.current = true;
        touchStartX.current = clientX;
        const slideWidth = getSlideWidth();
        currentX.current = -slideCount * slideWidth;
       
        if (slidesRef.current) {
            gsap.killTweensOf(slidesRef.current);
        }
    };


    const handleMove = (clientX: number) => {
        if (!isDragging.current || !slidesRef.current || !carouselRef.current) return;


        const diff = clientX - touchStartX.current;
        const containerWidth = carouselRef.current.offsetWidth;
        const percentDiff = (diff / containerWidth) * 100;
       
        gsap.set(slidesRef.current, {
            x: currentX.current + percentDiff + '%'
        });
    };


    const handleEnd = (clientX: number) => {
        if (!isDragging.current || !carouselRef.current) return;
       
        isDragging.current = false;
        const diff = clientX - touchStartX.current;
        const containerWidth = carouselRef.current.offsetWidth;
        const threshold = containerWidth * 0.2;


        if (diff < -threshold && slideCount < data.length - 1) {
            setSlideCount(prev => prev + 1);
        } else if (diff > threshold && slideCount > 0) {
            setSlideCount(prev => prev - 1);
        } else {
            if (slidesRef.current) {
                const slideWidth = getSlideWidth();
                gsap.to(slidesRef.current, {
                    x: -slideCount * slideWidth + '%',
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        }
    };


    const handleTouchStart = (e: React.TouchEvent) => {
        handleStart(e.touches[0].clientX);
    };


    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };


    const handleTouchEnd = (e: React.TouchEvent) => {
        handleEnd(e.changedTouches[0].clientX);
    };


    const handleMouseDown = (e: React.MouseEvent) => {
        handleStart(e.clientX);
    };


    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    };


    const handleMouseUp = (e: React.MouseEvent) => {
        handleEnd(e.clientX);
    };


    const handleMouseLeave = (e: React.MouseEvent) => {
        if (isDragging.current) {
            handleEnd(e.clientX);
        }
    };


    return (
        <div
            ref={carouselRef}
            className={`flex ${styles.carouselContainer} md:hidden`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={slidesRef}
                className={styles.carouselSlideContainer}
            >
                {data.map((slide, i) => (
                    <CauroselCard
                        key={i}
                        title={slide.title}
                        color={slide.color}
                        img={slide.img}
                        width={slide.width}
                        height={slide.height}
                        description={slide.description}
                        variant={i !== slideCount ? 'not-selected' : ''}
                    />
                ))}
            </div>
           
            <div className={styles.carouselIndex}>
                {data.map((d, i) => (
                    <div
                        key={i}
                        data-variant={i === slideCount ? 'selected' : ''}
                        onClick={() => setSlideCount(i)}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
            </div>
        </div>
    )
}