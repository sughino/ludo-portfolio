import Image from 'next/image';
import styles from './workCard.module.css';
import type { Work } from '@/app/types/work';

export default function WorkCard (
    {
        title,
        description,
        img,
        width,
        height,
        color,
        variant
    } : Work
) {
    return (
        <div 
            className={styles.workCard}
            data-variant={variant}
        >
            <div className={styles.imgWrapper}>
                <div 
                    className={styles.imgColorBg}
                    data-color={color}
                />
                <Image 
                    src={img}
                    alt={`${title} image`}
                    width={width}
                    height={height}
                    draggable={false}
                />
            </div>
            <div className={styles.cardTitleContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}