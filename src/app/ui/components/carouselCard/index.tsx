import Image from 'next/image';
import styles from './carouselCard.module.css';
import type { Hobby } from '@/app/types/hobby';

export default function CauroselCard (
    {
        title,
        description,
        img,
        width,
        height,
        color,
        variant
    } : Hobby
) {
    return (
        <div 
            className={styles.carouselCard}
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