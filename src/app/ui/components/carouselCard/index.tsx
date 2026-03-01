import Image from 'next/image';
import styles from './carouselCard.module.css';
import type { CarouselType } from '@/app/types/carouselType';
import ActionBadge from '../actionBadge';
import { useIsTouchDevice } from '@/app/utils/isTouchDevice';
import Button from '../button';

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
    const isTouch = useIsTouchDevice()
    return (
        <div 
            className={styles.carouselCard}
            data-variant={variant}
        >
            <div className={styles.imgWrapper}>
                <div 
                    className={styles.imgColorBg}
                    style={{ backgroundColor: `var(--color-${color})` }}
                />
                <Image 
                    className={styles.carouselImg}
                    src={img}
                    alt={`${title} image`}
                    width={width}
                    height={height}
                    draggable={false}
                />
                {!isTouch && role && (
                    <ActionBadge info={role} />
                )}
            </div>
            <div className={styles.cardTitleContainer}>
                {/* {isTouch && role && (
                    <Button content={'go to'} icon={'arrow-right'} width={'full'}/>
                    //TODO devi inserire qualcosa per far si che chi è da divce capisca che può cliccarlo
                )} */}
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}