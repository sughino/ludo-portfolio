'use client'

import { ReactNode, useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
    children: ReactNode;
    width?: 'grow' | 'fit' | 'full',
    duration?: number
}

export const FadeIn = ({ children, width, duration = 1 } : Props) => {
    const divContainerRef = useRef<HTMLDivElement>(null);

    const widthMap: Record<string, string> = {
        grow: 'grow',
        fit: 'w-fit',
        full: 'w-full'
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
                scrollTrigger: {
                    trigger: divContainerRef.current,
                    start: "top 80%",
                    once: true
                }
            }
        );
    }, []);

    return (
        <div ref={divContainerRef} className={width && widthMap[width]}>
            {children}
        </div>
    )
}