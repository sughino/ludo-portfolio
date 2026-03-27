'use client'

import styles from './carousel.module.css';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Carousel<T>({
    data,
    renderItem,
    onSlideChange
}: {
    data: T[],
    renderItem: (item: T, index: number, activeIndex: number, onPrev: () => void, onNext: () => void) => React.ReactNode
    onSlideChange?: (index: number) => void
}) {
    const [slideCount, setSlideCount] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const currentX = useRef(0);
    const isDragging = useRef(false);

    const touchStartY = useRef(0);
    const isScrolling = useRef<null | boolean>(null);


    const getSlideWidth = () => {
        if (!carouselRef.current) return 100;
        const containerWidth = carouselRef.current.offsetWidth;
        const gap = 16;
        const slideWidthWithGap = containerWidth + gap;
        return (slideWidthWithGap / containerWidth) * 100;
    };


    useEffect(() => {
        onSlideChange?.(slideCount)
        if (slidesRef.current) {
            const slideWidth = getSlideWidth();
            gsap.to(slidesRef.current, {
                x: -slideCount * slideWidth + '%',
                duration: 0.6,
                ease: 'power2.out'
            });
        }
    }, [slideCount, onSlideChange]);


    const handleStart = (clientX: number, clientY: number) => {
        isDragging.current = true;
        isScrolling.current = null;

        touchStartX.current = clientX;
        touchStartY.current = clientY;

        const slideWidth = getSlideWidth();
        currentX.current = -slideCount * slideWidth;

        if (slidesRef.current) {
            gsap.killTweensOf(slidesRef.current);
        }
    };

    const handleMove = (clientX: number, clientY: number) => {
        if (!isDragging.current || !slidesRef.current || !carouselRef.current) return;

        const diffX = clientX - touchStartX.current;
        const diffY = clientY - touchStartY.current;

        if (isScrolling.current === null) {
            isScrolling.current = Math.abs(diffY) > Math.abs(diffX);
        }

        if (isScrolling.current) return;

        const containerWidth = carouselRef.current.offsetWidth;
        const percentDiff = (diffX / containerWidth) * 100;

        gsap.set(slidesRef.current, {
            x: currentX.current + percentDiff + '%'
        });
    };

    const handleEnd = (clientX: number) => {
        if (!isDragging.current) return;

        if (isScrolling.current) {
            isDragging.current = false;
            return;
        }

        isDragging.current = false;

        const diff = clientX - touchStartX.current;
        const containerWidth = carouselRef.current?.offsetWidth ?? 0;
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
        handleStart(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        handleEnd(e.changedTouches[0].clientX);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        handleStart(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;

        const diffX = e.clientX - touchStartX.current;
        const containerWidth = carouselRef.current?.offsetWidth ?? 0;
        const percentDiff = (diffX / containerWidth) * 100;

        gsap.set(slidesRef.current, {
            x: currentX.current + percentDiff + '%'
        });
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
            className={styles.carouselContainer}
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
                {data.map((item, i) => (
                    <div key={i} className={styles.renderContainer}>
                        {renderItem(
                            item, 
                            i, 
                            slideCount,
                            () => setSlideCount(prev => Math.max(0, prev - 1)),
                            () => setSlideCount(prev => Math.min(data.length - 1, prev + 1))
                        )}
                    </div>
                ))}
            </div>
           
            <div className={styles.carouselIndex}>
                {data.map((d, i) => (
                    <div
                        key={i}
                        data-variant={i === slideCount ? 'selected' : ''}
                        onClick={() => setSlideCount(i)}
                        data-cursor="hover"
                    />
                ))}
            </div>
        </div>
    )
}