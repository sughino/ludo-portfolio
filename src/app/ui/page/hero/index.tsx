import { montserrat } from '@/app/fonts/font';
import styles from './hero.module.css';
import LogoAnimation from '../../components/logoAnimation';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.topBar}>
        <LogoAnimation/>  
        <h3>web developer <span className={styles.coloredSpan}>&</span><br/>designer</h3>
      </div>
      <h1><span className={`${montserrat.className} antialiased uppercase`}>grasso</span><br/>LuDOvICo</h1>

      {/*blueprint line*/}
      <div className={styles.bluePrintRight}></div>
      <div className={styles.bluePrintLeft}></div>
      <div className={styles.bluePrintTop}></div>
      <div className={styles.bluePrintBottom}></div>
    </section>
  )
}