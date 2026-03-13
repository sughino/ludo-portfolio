import Image from 'next/image'
import styles from './about.module.css'
import { studies } from '@/data/studies'
import TitleAnimation from '@/ui/components/titleAnimation'
import { FadeIn } from '@/ui/components/fadeIn'

export default function About () {
    return (
        <section className="bigSpacing">
            <div className="h-(--spacing-160)" />
            <TitleAnimation position={'center'}>
                <h2 data-animate="title">AbOUT</h2>
            </TitleAnimation>
            <div className="h-(--spacing-80)" />

            <FadeIn>
                <div className={styles.photoContainer}>
                    <div className={styles.photo}></div>
                    <div className={styles.character}>
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

            <div className="h-(--spacing-gap-16)" />

            <p data-cursor="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

            <div className="h-(--spacing-gap-40)" />

            <div className={styles.studiesContainer}>
                {studies.map((study, i) => (
                    <FadeIn key={i}>
                        <div className={styles.studyContainer}>
                            <h3>{study.title}</h3>
                            <div className={styles.studyContentContainer}>
                                <h6>{study.date}</h6>
                                <p data-cursor="text" className={styles.studySchool}>{study.school}</p>
                            </div>
                        </div> 
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}//TODO sistema visualizzazione per device
//TODO vedi se riesci a fare il personaggino 3d, magari da mettere le footer in piccolo o sulla prima pagina penzolante