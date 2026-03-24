'use client'

import { ReactNode, useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeInProps = {
    children: ReactNode;
    width?: 'grow' | 'fit' | 'full',
    duration?: number;
    animationStart?: string;
    blurEffect?: boolean;
    onComplete?: () => void;
    reverse?: boolean;
    delay?: number;
}

export const FadeIn = ({ children, width, duration = 1, animationStart = "70", blurEffect = false, onComplete, reverse = false, delay } : FadeInProps) => {
    const divContainerRef = useRef<HTMLDivElement>(null);

    const widthMap: Record<string, string> = {
        grow: 'grow',
        fit: 'w-fit',
        full: 'w-full shrink-0'
    }

    useEffect(() => {
        if (!divContainerRef.current) return;

        gsap.fromTo(
            divContainerRef.current,
            {
                y: reverse ? 0 : 15,
                opacity: reverse ? 1 : 0,
                scale: reverse ? 1 : .9,
                filter: blurEffect ? "blur(5px)" : "blur(0px)"
            },
            {
                y: reverse ? 15 : 0,
                opacity: reverse ? 0 : 1,
                scale: reverse ? .9 : 1,
                filter: "blur(0px)",
                duration: duration,
                ease: "power4.out",
                force3D: true,
                delay: delay,
                onComplete,
                scrollTrigger: {
                    trigger: divContainerRef.current,
                    start: `top ${animationStart}%`,
                    once: true
                }
            }
        );
    }, [duration, reverse]);

    return (
        <div ref={divContainerRef} className={width && widthMap[width]} style={{ opacity: 0 }}>
            {children}
        </div>
    )
}