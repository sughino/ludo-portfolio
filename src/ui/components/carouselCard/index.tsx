import Image from 'next/image';
import styles from './carouselCard.module.css';
import type { CarouselType } from '@/types/carouselType';
import ActionBadge from '../actionBadge';
import { useIsTouchDevice } from '@/utils/isTouchDevice';
import Button from '../button';

type CarouselCardProps = CarouselType & {
    onClick?: (id: string) => void;
};

export function CarouselCard (
    {
        id,
        title,
        description,
        img,
        width,
        height,
        color,
        variant,
        role,
        onClick
    } : CarouselCardProps
) {
    const isTouch = useIsTouchDevice();
    return (
        <div 
            className={styles.carouselCard}
            data-variant={variant}
        >
            <div className={styles.imgWrapper}>
                <div className={styles.imgShadowBg} data-variant={'main'}/>
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
                {!isTouch && role && id && (
                    <ActionBadge info={role} onClick={() => onClick?.(id)}/>
                )}
            </div>
            <div className={styles.cardTitleContainer}>
                {isTouch && role && id && (
                    <Button content={'go to'} icon={'arrow-right'} width={'full'} onClick={() => onClick?.(id)}/>
                    //TODO devi inserire qualcosa per far si che chi è da divce capisca che può cliccarlo
                )}
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export function CarouselImage (
    {
        title,
        img,
        width,
        height,
        color,
        variant,
    } : CarouselType
) {
    const isMainImg = img.includes('main.webp');

    return (
        <div 
            className={styles.carouselCard}
            data-variant={variant}
        >
            <div className={styles.imgWrapper}>
                {isMainImg && (
                    <>
                        <div 
                            className={styles.imgColorBg}
                            style={{ backgroundColor: `var(--color-${color})` }}
                        />
                        <div className={styles.imgShadowBg} data-variant={'main'}/>
                        <Image 
                            className={styles.placeholderImg}
                            src={img}
                            alt={`${title} image`}
                            width={width}
                            height={height}
                            draggable={false}
                        />
                    </>
                )}
                <Image 
                    className={styles.carouselImg}
                    src={img}
                    alt={`${title} image`}
                    width={width}
                    height={height}
                    draggable={false}
                />
            </div>
        </div>
    )
}