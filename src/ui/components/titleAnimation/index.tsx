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
}

export default function TitleAnimation({ 
    children, 
    delay = 0,
    position,
    reverse = false
}: Props) {
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titles = titleContainerRef.current?.querySelectorAll('[data-animate="title"]');
    if (!titles) return;

    gsap.fromTo(
      titles,
      { bottom: reverse ? 0 : -150 },
      {
        bottom: reverse ? -150 : 0,
        duration: 1.2,
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