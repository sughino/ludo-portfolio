import styles from './card.module.css';
import Image from 'next/image';
import { Skill } from '@/types/skill';
import Chip from '../chip';

export function Card ({
    level,
    color,
    title,
    description
} : Skill) {
    return (
        <div 
            className={styles.cardContainer}
            data-variant={color}
        >
            <Chip
                content={level}
                className={styles.chip}
                variant={color}
            />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export function BlueprintCard () {
    return (
        <div className={styles.blueprintContainer}>
            {/*circle for radius*/}
            <div className={styles.blueprintCircle1} />
            <div className={styles.blueprintCircle2} />
            <div className={styles.blueprintCircle3} />
            <div className={styles.blueprintCircle4} />
            {/*line for padding*/}
            <div className={styles.blueprintLine1} />
            <div className={styles.blueprintLine2} />
            <div className={styles.blueprintLine3} />
            <div className={styles.blueprintLine4} />
            {/*text for info*/}
            <p className={`${styles.info1} ${styles.blueprintInfo}`}>40px</p>
            <p className={styles.blueprintTitle}>
                what is lorem ipsum?
            </p>
            <div className={styles.blueprintLine5} />

            <div className="h-[8.5px]" />
            <p className={`${styles.info2} ${styles.blueprintInfo}`}>32px</p>
            <div className="h-[8.5px]" />

            <div className={styles.blueprintLine6} />
            <p className={styles.bluePrintContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    )
}

export function CodeCard () {
    return (
        <div className={styles.codeCardContainer}>
            <div className={styles.codeTopBar}>
                <div className="w-[12px] h-[12px] bg-[#CC2936] rounded-full" />
                <div className="w-[12px] h-[12px] bg-[#ED8B00] rounded-full" />
                <div className="w-[12px] h-[12px] bg-[#08AF64] rounded-full" />
            </div>
            <div className="h-(--spacing-gap-8)" />
            <div className={styles.codeTextContainer}>
                <p className={styles.code}>
                    PS C:\\Project&gt; <span className="text-[#ED8B00]">npm</span> run dev<br />
                    &gt; client@0.0.0 dev<br />
                    &gt; vite<br />
                    <span className='text-[#08AF64]'>VITE v6.3.2</span> <span className='text-(--color-white-30)'>ready in</span> 5133ms<br />
                    Local: <span className='text-[#4A90E2]'>http://localhost:5173/</span>
                </p>
            </div>
        </div>
    )
}

export function ImgCard () {
    return (
        <div className={styles.imgCard}>
            <Image
                src="/logo3d.webp"
                alt="Ludo Portfolio Logo 3d"
                width={150} 
                height={106}
                priority
            />
        </div>
    )
}