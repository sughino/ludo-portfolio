import Link from 'next/link'
import styles from './not-found.module.css'
import LogoAnimation from '../ui/components/logoAnimation'
import TitleAnimation from '@/ui/components/titleAnimation'
import { FadeIn } from '@/ui/components/fadeIn'

export default function NotFound() {
  return (
    <Link href="/" className={styles.fullPageLink}> 
      <section className='errorSection' data-cursor="label" data-label="Lost? Click here">
        <div className={styles.mainContainer}>
          <TitleAnimation delay={.5} duration={1.2}>
            <h2 data-animate="title">404</h2>
          </TitleAnimation>
          <TitleAnimation duration={1.2}>
            <h3 data-animate="title">this page could<br/>not be found</h3>
          </TitleAnimation>
        </div>
        
        <div className={styles.bottomBarContianer}>
          <FadeIn animationStart={"90"}>
            <div className={styles.bottomBar}>
              <LogoAnimation/>
              <h3 className='noWrap'>web developer&nbsp;<span className={styles.coloredSpan}>&</span><br/>designer</h3>
            </div>
          </FadeIn>
        </div>

        <div className={styles.bluePrintRight}></div>
        <div className={styles.bluePrintLeft}></div>
        <div className={styles.bluePrintTop}></div>
        <div className={styles.bluePrintBottom}></div>
      </section>
    </Link>
  )
}