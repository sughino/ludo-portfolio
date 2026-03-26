'use client'

import Image from 'next/image'
import styles from './about.module.css'
import { studies } from '@/data/studies'
import TitleAnimation from '@/ui/components/titleAnimation'
import { FadeIn } from '@/ui/components/fadeIn'
import { about } from '@/data/about'
import { useIsTouch } from '@/contexts/DeviceContext'

export default function About () {
    const isTouch = useIsTouch();
    return (
        <section className="bigSpacing">
            <div className="h-(--spacing-160)" />
            <TitleAnimation position={'center'}>
                <h2 data-animate="title" translate="no" className="notranslate">AbOUT</h2>
            </TitleAnimation>
            <div className="h-(--spacing-80)" />

            <FadeIn disabled={isTouch}>
                <div className={styles.photoContainer}>
                    <div className={styles.photo}></div>
                    <div className={styles.character} data-cursor="label" data-label="↑ ↑ ↓ ↓ ← → ← → B A">
                        <Image
                            src={'/about/character.webp'}
                            alt='character'
                            width={633}
                            height={1766}
                        />
                    </div>
                    <div className={`hidden md:block ${styles.photo}`}></div>
                </div>
            </FadeIn>

            <div className="h-(--spacing-gap-40)" />

            <div className={styles.aboutContainer}>
                {about.map((a, i) => (
                    <FadeIn key={i} blurEffect={true} disabled={isTouch}>
                        <div className={styles.aboutInnerContainer}>
                            <p data-cursor="text" className="littleTitle">{a.title}</p>
                            <p data-cursor="text">{a.description}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="h-(--spacing-gap-40)" />
            <div className={styles.line}/>
            <div className="h-(--spacing-gap-40)" />

            <div className={styles.studiesContainer}>
                {studies.map((study, i) => (
                    <FadeIn key={i} blurEffect={true} disabled={isTouch}>
                        <div className={styles.studyContainer}>
                            <h3>{study.title}</h3>
                            <div className={styles.studyContentContainer}>
                                <h6>{study.date}</h6>
                                <p data-cursor="text" translate="no" className={`${styles.studySchool} notranslate`}>{study.school}</p>
                            </div>
                        </div> 
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}//TODO sistema visualizzazione per device
//TODO vedi se riesci a fare il personaggino 3d, magari da mettere le footer in piccolo o sulla prima pagina penzolante