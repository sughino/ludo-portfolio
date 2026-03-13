import Image from 'next/image';
import styles from './carouselCard.module.css';
import type { CarouselType } from '@/types/carouselType';
import ActionBadge from '../actionBadge';
import Button from '../button';
import { useIsTouch } from '@/contexts/DeviceContext'

type CarouselCardProps = CarouselType & {
    description?: string;
    role?: 'Development only' | 'Full build' | 'Design';
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
    const isTouch = useIsTouch();
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
                    //TODO sistema carosello per telefono (quando arrivo al carosello e voglio andare sotto si blocca)
                )}
                <h3>{title}</h3>
                <p data-cursor="text">{description}</p>
            </div>
        </div>
    )
}

type CarouselImageProps = CarouselType & {
    index: number;
    totalImages: number;
    onPrev: () => void;
    onNext: () => void;
    onOpen: () => void;
};

export function CarouselImage (
    {
        title,
        img,
        width,
        height,
        color,
        variant,
        index,
        totalImages,
        onPrev,
        onNext,
        onOpen
    } : CarouselImageProps
) {
    const isMainImg = img.includes('main.webp');
    const isTouch = useIsTouch();

    return (
        <div 
            className={styles.carouselCard}
            data-variant={variant}
        >
            <div className={styles.imgWrapper}>
                {!isTouch && (
                    <div className={styles.carouselButtonContainer}>
                        <button className={styles.carouselButton} data-size={index === 0 ? '0' : '1'} onClick={onPrev} data-cursor="arrowLeft"/>
                        <button className={styles.carouselButton} data-size={'2'} onClick={onOpen} data-cursor="label" data-label="Toggle gui"/>
                        <button className={styles.carouselButton} data-size={index === totalImages - 1 ? '0' : '1'} onClick={onNext} data-cursor="arrowRight"/>
                    </div>
                )}
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