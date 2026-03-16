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
import { useIsTouch } from '@/contexts/DeviceContext'
import TitleAnimation from '@/ui/components/titleAnimation'
import { useRef, useState } from 'react'
import { FadeIn } from '@/ui/components/fadeIn'
import gsap from 'gsap'
import { useRouter } from "next/navigation";
import Chip from '@/ui/components/chip'

export default function Work() {
    const params = useParams();
    const id = params.id as string;

    const router = useRouter();
    const carouselConatinerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isTouch = useIsTouch();
    const [currentSlide, setCurrentSlide] = useState(false);
    const [isActionBarHidden, setIsActionBarHidden] = useState(false);

    const work = works.find(item => item.id === id);
    if (!work) return

    const titleWords = work.title.split(" ");
    const categoryMap: Record<string, string> = {
        frontEnd: 'Front-end',
        backEnd: 'Back-end',
        database: 'Database',
        design: 'Design'
    }

    //TODO sistema immagini
    //TODO sistema animazione iniziale per device
    //TODO sistema il fatto che quando apri da telefono ti fa vedere prima la visualizzazione del pc
    //TODO aggiungi il grab e il goBack anche per il device
    //TODO sistema il fatto che quando torni indietro nella pagina non ti fliccka le animazioni non viste

    const goBack = () => {
        if (!sectionRef.current) return;
        const tl = gsap.timeline()
        document.body.style.overflowY = "hidden";

        tl.to(sectionRef.current, {
            borderTopLeftRadius: '40px',
            borderTopRightRadius: '40px',
            duration: 0.3,
            ease: "power2.out",
        })
        .to(sectionRef.current, {
            y: '100%',
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => {
                router.back();
            }
        }, "-=0.1")
    }
    return (
        <section ref={sectionRef} className={styles.workSection} data-device={isTouch && 'device'}> 
            {isTouch && (
                <>
                    {titleWords.map((word, i) => (
                        <div key={i} className={styles.deviceTitleContainer}>
                            <TitleAnimation 
                                delay={titleWords.length > 1 && i === 0 ? .5 : 0}
                            >
                                <h2 className={styles.workTitleDevice} data-animate="title">
                                    {word}
                                </h2>
                            </TitleAnimation>
                            <Chip content={work.role}/>
                        </div>
                    ))}
                    <div className="h-(--spacing-40)" />
                    <div className={styles.grabBar}/>
                </>
            )}
            <FadeIn duration={2.5} onComplete={() => {
                if (carouselConatinerRef.current) {
                    carouselConatinerRef.current.style.overflow = 'hidden';
                    document.body.style.overflowY = "scroll";
                }
            }}>
                <div className={styles.carouselContainer} ref={carouselConatinerRef}>
                    <Carousel
                        data={work.images}
                        onSlideChange={(index) => setCurrentSlide(index === 0 ? false : true)}
                        renderItem={(imgPath, i, active, onPrev, onNext) => (
                            <CarouselImage
                                img={imgPath}
                                title={work.title}
                                width={work.width}
                                height={work.height}
                                color={work.color}
                                variant={i !== active ? 'not-selected' : ''}
                                index={i}
                                totalImages={work.images.length}
                                onPrev={onPrev}
                                onNext={onNext}
                                onOpen={() => {setIsActionBarHidden(!isActionBarHidden)}}
                            />
                        )}
                    />
                    {!isTouch && (
                        <>
                            <ActionBadge hidden={isActionBarHidden} info={work.role} reverse={true} iconColor={work.color} position={'top'} onClick={() => goBack()}/>
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
                <p data-cursor="text">{work.longDescription}</p>

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
                                        <p data-cursor="text" className={styles.littleTitle}>
                                            {categoryMap[category]}:
                                        </p>

                                        <div className={styles.techStackIconContainer}>
                                            {items.map((id) => {
                                            const logo = logos.find(item => item.id === id);
                                            if (!logo) return null;

                                            return (
                                                <a
                                                    key={id}  
                                                    href={logo.href ?? '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Go to ${logo.alt} site`}
                                                    data-cursor="hover" 
                                                    className={styles.logoLink}
                                                >
                                                    <Image
                                                        src={logo.src}
                                                        alt={logo.alt}
                                                        width={logo.width}
                                                        height={logo.height}
                                                        className={styles.techStackIcon}
                                                    />
                                                </a>
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
                                    <p data-cursor="text" className="littleTitle">{title}</p>
                                    <p data-cursor="text">{description}</p>
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