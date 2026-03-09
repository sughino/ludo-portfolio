'use client'

import { useParams } from 'next/navigation'
import Footer from '@/ui/page/footer'
import styles from './workPage.module.css'
import Carousel from '@/ui/components/carousel'
import { works } from '@/data/works'
import { logos } from '@/data/logos'
import { CarouselImage } from '@/ui/components/carouselCard'
import ActionBadge from '@/ui/components/actionBadge'
import Image from 'next/image'
import { useIsTouchDevice } from '@/utils/isTouchDevice';
import TitleAnimation from '@/ui/components/titleAnimation'
import { useState } from 'react'
import { FadeIn } from '@/ui/components/fadeIn'

export default function Work() {
    const params = useParams()
    const id = params.id as string  

    const isTouch = useIsTouchDevice()
    const [currentSlide, setCurrentSlide] = useState(false);

    const work = works.find(item => item.id === id);
    if (!work) return

    const titleWords = work.title.split(" ");

    const categoryMap: Record<string, string> = {
        frontEnd: 'Front-end',
        backEnd: 'Back-end',
        database: 'Database',
        design: 'Design'
    }
    //TODO sistema flick iniziale
    return (
        <section className={styles.workSection} data-device={isTouch && 'device'}>
            {isTouch && (
                <>
                    {titleWords.map((word, i) => (
                        <TitleAnimation 
                            key={i} 
                            delay={titleWords.length > 1 && i === 0 ? .5 : 0}
                        >
                            <h2 className={styles.workTitleDevice} data-animate="title">
                                {word}
                            </h2>
                        </TitleAnimation>
                    ))}
                    <div className="h-(--spacing-40)" />
                    <div className={styles.grabBar}/>
                </>
            )}
            <FadeIn duration={2.5}>
                <div className={styles.carouselContainer}>
                <Carousel
                        data={work.images}
                        onSlideChange={(index) => setCurrentSlide(index === 0 ? false : true)}
                        renderItem={(imgPath, i, active) => (
                            <CarouselImage
                                img={imgPath}
                                title={work.title}
                                width={work.width}
                                height={work.height}
                                color={work.color}
                                variant={i !== active ? 'not-selected' : ''}
                            />
                        )}
                    />
                    {!isTouch && (
                        <>
                            <ActionBadge info={work.role} reverse={true} iconColor={work.color} position={'top'}/>
                            <div className={styles.workTitleContainer}>
                                {titleWords.map((word, i) => (
                                    <TitleAnimation 
                                        key={i} 
                                        reverse={currentSlide} 
                                        delay={titleWords.length > 1 && i === 0 && !currentSlide ? .5 : titleWords.length > 1 && i === 1 && currentSlide ? .5 : 0}
                                    >
                                        <h2 className={styles.workTitle} data-animate="title">
                                            {word}
                                        </h2>
                                    </TitleAnimation>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </FadeIn>
            <div className="h-(--spacing-80)" />
            <div className={styles.paddingContainer}>
                <p>{work.longDescription}</p>

                <div className="h-(--spacing-160)" />
                <div className={styles.mainContentContainer}>
                    <TitleAnimation>
                        <h3 data-animate="title">TeCH StACk</h3>
                    </TitleAnimation>
                    
                    <div className={styles.techStackContainer}>
                        {Object.entries(work.techStack).map(([category, items]) => {
                            if (!items) return null;

                            return (
                                <FadeIn key={category} width='grow'>
                                    <div className={styles.techStackInnerContainer}>
                                        <p className={styles.littleTitle}>
                                            {categoryMap[category]}:
                                        </p>

                                        <div className={styles.techStackIconContainer}>
                                            {items.map((id) => {
                                            const logo = logos.find(item => item.id === id);
                                            if (!logo) return null;

                                            return (
                                                <Image
                                                key={id}
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={logo.width}
                                                height={logo.height}
                                                className={styles.techStackIcon}
                                                />
                                            );
                                            })}
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
                
                <div className="h-(--spacing-160)" />
                <div className={styles.mainContentContainer}>
                    <TitleAnimation>
                        <h3 data-animate="title">KeY FEaTUrES</h3>
                    </TitleAnimation>
                    <div className={styles.keyFeaturesContainer}>
                        {Object.entries(work.keyFeatures).map(([title, description]) => (
                            <FadeIn key={title}>
                                <div className={styles.keyFeaturesInnerContainer}>
                                    <p className={styles.littleTitle}>{title}</p>
                                    <p>{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <div className="h-(--spacing-160)" />
            </div>

            {!isTouch && (
                <Footer/>
            )}
        </section>
    )
}
//TODO la card per il carosello avrà per mobile solo l'immagine, per quanto riguarda il pc ma gari delle frecce laterali?
//TODO magari quando andiamo hover sarebbe figo in modo da non dare fastidio con l'ui, oppure il cursore si forma in modo da diventare una freccia