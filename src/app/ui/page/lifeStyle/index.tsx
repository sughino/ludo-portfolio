import Carousel from '../../components/carousel'
import styles from './lifeStyle.module.css'
import { hobbies } from '@/app/data/hobbies';

export default function LifeStyle () {
    return (
        <section className="bigSpacing">
            <div className="h-(--spacing-160)" />
            <h2>LiFeSTYlE</h2>
            <div className="h-(--spacing-80)" />

            <div className={`hidden md:grid ${styles.lifeStyleContainer}`}>
                <div className={styles.lifeStyleInnerContainer}>
                    <div className={styles.holderImg}></div>
                    <div className={styles.lifeStyleContentContainer}>
                        <h3>capturing moments</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className={styles.lifeStyleInnerContainer} data-variant="reverse">
                    <div className={styles.holderImg}></div>
                    <div className={styles.lifeStyleContentContainer}>
                        <h3>feeling rhythms</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className={styles.lifeStyleInnerContainer}>
                    <div className={styles.holderImg}></div>
                    <div className={styles.lifeStyleContentContainer}>
                        <h3>exploring</h3>
                        <p>Lorem Ipsum is simply. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className={styles.lifeStyleInnerContainer} data-variant="reverse">
                    <div className={styles.holderImg}></div>
                    <div className={styles.lifeStyleContentContainer}>
                        <h3>street culture</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </div>

            {/* <div className={styles.carouselContainer}>
                <Carousel data={hobbies} />
            </div> */}

            <div className="h-(--spacing-160)" />
        </section>
    )
}