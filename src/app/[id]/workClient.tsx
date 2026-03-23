'use client'

import { useRouter } from 'next/navigation'
import Footer from '@/ui/page/footer'
import styles from './workPage.module.css'
import Carousel from '@/ui/components/carousel'
import { logos } from '@/data/logos'
import { CarouselImage } from '@/ui/components/carouselCard'
import ActionBadge from '@/ui/components/actionBadge'
import Image from 'next/image'
import { useIsTouch } from '@/contexts/DeviceContext'
import TitleAnimation from '@/ui/components/titleAnimation'
import { useEffect, useRef, useState } from 'react'
import { FadeIn } from '@/ui/components/fadeIn'
import gsap from 'gsap'
import Chip from '@/ui/components/chip'
import { WorkType } from '@/types/work'

export default function WorkClient({ work }: { work: WorkType }) {
    const saveProjectView = (projectName: string) => {
        const stored = sessionStorage.getItem('seenProjects');
        const projects: string[] = stored ? JSON.parse(stored) : [];

        if (!projects.includes(projectName)) {
            projects.push(projectName);
            sessionStorage.setItem('seenProjects', JSON.stringify(projects));
        }
    };
    saveProjectView(work.title);
    
    const router = useRouter();
    const carouselConatinerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isTouch = useIsTouch();
    const [currentSlide, setCurrentSlide] = useState(false);
    const [isActionBarHidden, setIsActionBarHidden] = useState(false);

    const titleWords = work.title.split(" ");
    const categoryMap: Record<string, string> = {
        frontEnd: 'Front-end',
        backEnd: 'Back-end',
        database: 'Database',
        design: 'Design'
    }

    //TODO sistema animazione iniziale per device
    //TODO sistema il fatto che quando torni indietro nella pagina non ti fliccka le animazioni non viste

    const grabBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isTouch || !grabBarRef.current || !sectionRef.current) return;

        let startY = 0;
        let currentY = 0;
        let isDragging = false;

        const onTouchStart = (e: TouchEvent) => {
            startY = e.touches[0].clientY;
            currentY = startY;
            isDragging = true;
            gsap.killTweensOf(sectionRef.current);
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!isDragging || !sectionRef.current) return;
            currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;

            if (deltaY <= 0) return;

            e.preventDefault();
            e.stopPropagation();

            const maxRadius = 40;
            const radius = Math.min((deltaY / 150) * maxRadius, maxRadius);

            gsap.set(sectionRef.current, {
                y: deltaY,
                borderTopLeftRadius: radius,
                borderTopRightRadius: radius,
            });
        };

        const onTouchEnd = () => {
            if (!isDragging || !sectionRef.current) return;
            isDragging = false;
            const deltaY = currentY - startY;

            if (deltaY > 150) {
                document.body.style.overflowY = 'hidden';
                const tl = gsap.timeline();
                tl.to(sectionRef.current, {
                    borderTopLeftRadius: '40px',
                    borderTopRightRadius: '40px',
                    duration: 0.2,
                }).to(sectionRef.current, {
                    y: '100%',
                    duration: 0.6,
                    ease: 'power4.inOut',
                    onComplete: () => router.back(),
                }, '-=0.1');
            } else {
                gsap.to(sectionRef.current, {
                    y: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    duration: 0.4,
                    ease: 'power3.out',
                });
            }
        };

        const grabBar = grabBarRef.current;

        grabBar.addEventListener('touchstart', onTouchStart, { passive: true });
        grabBar.addEventListener('touchmove', onTouchMove, { passive: false });
        grabBar.addEventListener('touchend', onTouchEnd);

        return () => {
            grabBar.removeEventListener('touchstart', onTouchStart);
            grabBar.removeEventListener('touchmove', onTouchMove);
            grabBar.removeEventListener('touchend', onTouchEnd);
        };
    }, [isTouch, router]);

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
            y: '150%',
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
                    <div ref={grabBarRef} className={styles.grabBarContainer}>
                        <div className={styles.grabBar}/>
                    </div>
                    <div className={styles.deviceTopContainer}>
                        <div className={styles.deviceTitleContainer}>
                            {titleWords.map((word, i) => (
                                <TitleAnimation
                                    key={i}
                                    delay={titleWords.length > 1 && i === 0 ? .5 : 0}
                                >
                                    <h2 translate='no' className={`${styles.workTitleDevice} notranslate`} data-animate="title">
                                        {word}
                                    </h2>
                                </TitleAnimation>
                            ))}
                        </div>
                        <Chip content={work.role}/>
                    </div>
                    <div className="h-(--spacing-40)" />
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
                                        <h2 translate='no' className={`${styles.workTitle} notranslate`} data-animate="title">
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
                <FadeIn blurEffect={true}>
                    <p data-cursor="text">{work.longDescription}</p>
                </FadeIn>

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
                                        <p data-cursor="text" translate='no' className={`${styles.littleTitle} notranslate`}>
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
                            <FadeIn key={title} blurEffect={true}>
                                <div className={styles.keyFeaturesInnerContainer}>
                                    <p data-cursor="text" className="littleTitle">{title}</p>
                                    <p data-cursor="text">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {isTouch ? (
                    <div className="h-(--spacing-40)" />
                ) : (
                    <div className="h-(--spacing-160)" />
                )}
            </div>

            {!isTouch && (
                <Footer/>
            )}
        </section>
    )
}