'use client'

import { useParams } from 'next/navigation' 
import styles from './workPage.module.css'
import Carousel from '@/ui/components/carousel'
import { works } from '@/data/works'
import { logos } from '@/data/logos'
import { CarouselImage } from '@/ui/components/carouselCard'
import ActionBadge from '@/ui/components/actionBadge'
import Image from 'next/image'
import { useIsTouchDevice } from '@/utils/isTouchDevice';

export default function Work() {
    const isTouch = useIsTouchDevice()

    const params = useParams()
    const id = params.id as string   

    const work = works.find(item => item.id === id);
    if (!work) return

    const categoryMap: Record<string, string> = {
        frontEnd: 'Front-end',
        backEnd: 'Back-end',
        database: 'Database',
        design: 'Design'
    }
    return (
        <section className={styles.workSection} data-device={isTouch ? 'device' : 'desktop'}>
            {isTouch && (
                <>
                    <h2 className={styles.workTitleDevice}>{work.title}</h2>
                    <div className="h-(--spacing-40)" />
                    <div className={styles.grabBar}/>
                </>
            )}
            <div className={styles.carouselContainer}>
               <Carousel
                    data={work.images}
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
                        <h2 className={styles.workTitle}>{work.title}</h2>
                    </>
                )}
                
            </div>
            <div className="h-(--spacing-80)" />
            <div className={styles.paddingContainer}>
                <p>{work.longDescription}</p>

                <div className="h-(--spacing-160)" />
                <div className={styles.mainContentContainer}>
                    <h3>TeCH StACk</h3>
                    <div className={styles.techStackContainer}>
                        {Object.entries(work.techStack).map(([category, items]) => {
                            if (!items) return null;

                            return (
                                <div key={category} className={styles.techStackInnerContainer}>
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
                            );
                        })}
                    </div>
                </div>
                
                <div className="h-(--spacing-160)" />
                <div className={styles.mainContentContainer}>
                    <h3>KeY FEaTUrES</h3>
                    <div className={styles.keyFeaturesContainer}>
                        {Object.entries(work.keyFeatures).map(([title, description]) => (
                            <div key={title} className={styles.keyFeaturesInnerContainer}>
                                <p className={styles.littleTitle}>{title}</p>
                                <p className={styles.keyFeaturesParagraph}>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-(--spacing-160)" />
            </div>
        </section>
    )
}
//TODO la card per il carosello avrà per mobile solo l'immagine, per quanto riguarda il pc ma gari delle frecce laterali?
//TODO magari quando andiamo hover sarebbe figo in modo da non dare fastidio con l'ui, oppure il cursore si forma in modo da diventare una freccia