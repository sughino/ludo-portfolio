'use client'

import styles from "./toast.module.css"
import { FadeIn } from "../fadeIn"
import { TriangleAlert, X } from 'lucide-react';
import { useRef, useState } from "react";

export default function Toast({title, content} : {title: string, content: string}) {
    const [isOpen, setIsOpen] = useState<boolean>(() => {
        if (typeof window === 'undefined') return true;
        return sessionStorage.getItem('toastClosed') !== 'true';
    });
    const toastRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('toastClosed', 'true');
    };

    if (!isOpen) return null;
    return(
        <div className={styles.toastOuterContainer} ref={toastRef}>
            <FadeIn 
                reverse={!isOpen}
                delay={isOpen ? .5 : 0}
                onComplete={() => {
                    if (toastRef.current && !isOpen) {
                        toastRef.current.style.display = "none";
                    }
                }}
            >
                <div className={styles.toastContainer}>
                    <div className={styles.toastTopContainer}>
                        <div className={styles.toastTitleContainer}>
                            <TriangleAlert />
                            <h6>{title}</h6>
                        </div>
                        <button 
                            data-cursor="hover"
                            onClick={() => {handleClose()}} 
                            aria-label="close error"
                        >
                            <X />
                        </button>
                    </div>
                    <h6 className={styles.toastContent}>{content}</h6>
                </div>
            </FadeIn>
        </div>
    )
}