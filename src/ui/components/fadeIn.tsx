'use client'

import { ReactNode, useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeInProps = {
    children: ReactNode;
    width?: 'grow' | 'fit' | 'full',
    duration?: number;
    onComplete?: () => void;
}

export const FadeIn = ({ children, width, duration = 1, onComplete } : FadeInProps) => {
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
                y: 15,
                opacity: 0,
                scale: .9
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: duration,
                ease: "power4.out",
                onComplete,
                scrollTrigger: {
                    trigger: divContainerRef.current,
                    start: "top 80%",
                    once: true
                }
            }
        );
    }, [duration]);

    return (
        <div ref={divContainerRef} className={width && widthMap[width]}>
            {children}
        </div>
    )
}