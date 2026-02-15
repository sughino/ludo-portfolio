import styles from './footer.module.css';
import { ExternalLink } from 'lucide-react';
import LogoAnimation from '../../components/logoAnimation';

export default function Footer () {
    return (
        <footer>
            <div className="h-(--spacing-padding-50)" />
            
            <div className={styles.footerContainer}>
                <div className={styles.footerTitleContainer}>
                    <LogoAnimation variant='footer'/> 
                    <h3>web developer <span className={styles.coloredSpan}>&</span><br/>designer</h3>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contact}>
                        <p className={styles.contactTitle}>Phone number</p>
                        <p className={styles.contactContent}>+39 333 955 3916</p>
                    </div>
                    <div className={styles.contact}>
                        <p className={styles.contactTitle}>Email</p>
                        <p className={styles.contactContent}>ludograsso08@gmail.com</p>
                    </div>
                    <div className={styles.contact}>
                        <p className={styles.contactTitle}>Quick links</p>
                        <div className={styles.contactContainer}>
                            <div className={styles.linksContainer}>
                                <p className={styles.contactContent}>Github</p>
                                <ExternalLink />
                            </div>
                            <div className={styles.linksContainer}>
                                <p className={styles.contactContent}>Linkedin</p>
                                <ExternalLink />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-(--spacing-160)" />
        </footer>
    )
}