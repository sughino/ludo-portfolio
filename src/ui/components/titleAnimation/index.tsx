'use client'

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './titleAnimation.module.css';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  delay?: number;
  centerTitle?: boolean
}

export default function TitleAnimation({ 
    children, 
    delay = 0,
    centerTitle = false
}: Props) {
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titles = titleContainerRef.current?.querySelectorAll('[data-animate="title"]');
    if (!titles) return;

    gsap.fromTo(
      titles,
      { bottom: -150 },
      {
        bottom: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: titleContainerRef.current,
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);

  return (
    <div className={styles.titleContainer} data-position={centerTitle && 'center'} ref={titleContainerRef}>
      {children}
    </div>
  );
}