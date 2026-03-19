'use client'

import { useEffect, useRef } from 'react';
import Button from '../button';
import styles from './actionBadge.module.css'
import gsap from 'gsap';

type ActionBadgeProps = {
  info: 'Development only' | 'Full build' | 'Design';
  reverse?: boolean;
  iconColor?: string;
  position?: 'top' | 'bottom';
  hidden?: boolean;
  onClick?: () => void;
}

export default function ActionBadge ({
    info,
    reverse = false,
    iconColor,
    position = 'bottom',
    hidden= false,
    onClick
} : ActionBadgeProps) {
    const divContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!divContainerRef.current) return;
        const el = divContainerRef.current;

        gsap.fromTo(
            el,
            {
                y: hidden ? 0 : 15,
                opacity: hidden ? 1 : 0,
                scale: hidden ? 1 : 0.9,
            },
            {
                y: hidden ? 15 : 0,
                opacity: hidden ? 0 : 1,
                scale: hidden ? 0.9 : 1,
                duration: 0.5,
                ease: "power4.out",
                onStart: () => {
                    if (!hidden) {
                        gsap.set(el, { display: "flex" });
                    }
                },
                onComplete: () => {
                    if (hidden) {
                    gsap.set(el, { display: "none" });
                    }
                }
            }
        );
    }, [hidden]);
    return (
        <div 
            className={styles.actionBadgeContainer}
            data-variant={reverse && 'reverse'}
            data-position={position}
            ref={divContainerRef}
        >
            <div className={styles.actionBadgeContent}>
                <h6>{info}</h6>
            </div>
            <div 
                className={styles.actionBadgeIconContainer}
            >
                <Button onClick={() => onClick?.()} iconColor={iconColor} icon={reverse ? 'arrow-left' : 'arrow-right'} className={styles.actionBadgeIcon} reverse={reverse}/>
            </div>
        </div>
    )
}