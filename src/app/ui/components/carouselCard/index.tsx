import Image from 'next/image';
import styles from './carouselCard.module.css';
import type { CarouselType } from '@/app/types/carouselType';
import ActionBadge from '../actionBadge';
import Carousel from '../carousel';

export default function CauroselCard (
    {
        title,
        description,
        img,
        width,
        height,
        color,
        variant,
        role
    } : CarouselType
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
                    className={styles.carouselImg}
                    src={img}
                    alt={`${title} image`}
                    width={width}
                    height={height}
                    draggable={false}
                />
                {role && (
                    <ActionBadge info={role} usage={"works"} />
                )}
            </div>
            <div className={styles.cardTitleContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}