import { montserrat } from '@/app/fonts/font';
import styles from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.topBar}>
          <Image
              src="/logo.webp"
              alt="Ludo Portfolio Logo"
              width={150} 
              height={106}
              priority
              className={styles.logoImg}
          />
          <h3>web developer &<br/>designer</h3>
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