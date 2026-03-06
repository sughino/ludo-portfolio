import { montserrat } from '@/fonts/font';
import styles from './hero.module.css';
import LogoAnimation from '../../components/logoAnimation';
import TitleAnimation from "@/ui/components/titleAnimation";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.topBar}>
        <LogoAnimation/>  
        <h3>web developer&nbsp;<span className={styles.coloredSpan}>&</span><br/>designer</h3>
      </div>

      <div className={styles.titleContainer}>
        <div className={`${styles.bluePrint} ${styles.bluePrintTopTitle}`}/>
        <div className={`${styles.bluePrint} ${styles.bluePrintBetween}`}/>
        <TitleAnimation delay={.5}>
          <h1 className={`${styles.title} ${montserrat.className} antialiased uppercase`} data-animate="title">grasso</h1>
        </TitleAnimation>
        <TitleAnimation>
          <h1 className={styles.titleStyled} data-animate="title">LuDOvICo</h1>
        </TitleAnimation>
      </div>

      <div className={`${styles.bluePrint} ${styles.bluePrintRight}`}/>
      <div className={`${styles.bluePrint} ${styles.bluePrintLeft}`}/>
      <div className={`${styles.bluePrint} ${styles.bluePrintTop}`}/>
      <div className={`${styles.bluePrint} ${styles.bluePrintBottom}`}/>
    </section>
  )
}