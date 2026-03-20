'use client'

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './titleAnimation.module.css';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  delay?: number;
  position?: string;
  reverse?: boolean;
  duration?: number;
}

export default function TitleAnimation({ 
    children, 
    delay = 0,
    position,
    reverse = false,
    duration = .8
}: Props) {
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titles = titleContainerRef.current?.querySelectorAll('[data-animate="title"]');
    if (!titles) return;

    gsap.fromTo(
      titles,
      { 
        bottom: reverse ? 0 : -180,
        filter: reverse ? "blur(0px)" : "blur(10px)"
      },
      {
        bottom: reverse ? -180 : 0,
        filter: reverse ? "blur(10px)" : "blur(0px)",
        duration: duration,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: titleContainerRef.current,
          start: "top 100%",
          once: true
        }
      }
    );
  }, [delay, reverse]);

  return (
    <div className={styles.titleContainer} data-position={position} ref={titleContainerRef}>
      {children}
    </div>
  );
}