import styles from './not-found.module.css'
import LogoAnimation from '../ui/components/logoAnimation'

export default function NotFound() {
  return (
    <section className='errorSection'>
      <div className={styles.mainContainer}>
        <h2>404</h2>
        <h3>this page could<br/>not be found</h3>
      </div>
      <div className={styles.bottomBar}>
        <LogoAnimation/>
        <h3 className='noWrap'>web developer&nbsp;<span className={styles.coloredSpan}>&</span><br/>designer</h3>
      </div>

      <div className={styles.bluePrintRight}></div>
      <div className={styles.bluePrintLeft}></div>
      <div className={styles.bluePrintTop}></div>
      <div className={styles.bluePrintBottom}></div>
    </section>
  )
}