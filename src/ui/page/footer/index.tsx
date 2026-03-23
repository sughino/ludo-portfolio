'use client'

import styles from './footer.module.css';
import { ExternalLink } from 'lucide-react';
import LogoAnimation from '../../components/logoAnimation';
import { useEffect, useState } from 'react';

export default function Footer () {
    const [message, setMessage] = useState("Hi! I'm interested in working with you.");

    useEffect(() => {
        const stored = sessionStorage.getItem('seenProjects');
        const projects: string[] = stored ? JSON.parse(stored) : [];

        if (projects.length === 1) {
            setMessage(`Hi! I really liked your project "${projects[0]}", I'd love to know more.`);
        } else if (projects.length > 1) {
            setMessage("Hi! I checked your projects and I’d love to talk about working together.");
        }
    }, []);
    return (
        <footer data-cursor-blend>
            <div className="h-(--spacing-padding-50)" />
            
            <div className={styles.footerContainer}>
                <div className={styles.footerTitleContainer}>
                    <LogoAnimation variant='footer'/> 
                    <h3>web developer&nbsp;<span className={styles.coloredSpan}>&</span><br/>designer</h3>
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.contact}>
                        <p data-cursor="text" className={styles.contactTitle}>Phone number</p>
                        <a
                            href={`https://wa.me/3339553916?text=${encodeURIComponent(message)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="hover" 
                            className={styles.contactContent}
                        >+39 333 955 3916</a>
                    </div>
                    <div className={styles.contact}>
                        <p data-cursor="text" className={styles.contactTitle}>Email</p>
                        <a
                            href="mailto:ludograsso08@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="hover"
                            className={styles.contactContent}
                        >ludograsso08@gmail.com</a>
                    </div>
                    <div className={styles.contact}>
                        <p data-cursor="text" className={styles.contactTitle}>Quick links</p>
                        <div className={styles.linkContainer}>
                            <div className={styles.linksContainer} data-cursor="hover">
                                <a
                                    href="https://github.com/sughino"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactContent}
                                >Github</a>
                                <ExternalLink />
                            </div>
                            <div className={styles.linksContainer} data-cursor="hover">
                                <a 
                                    href="https://www.linkedin.com/in/ludovico-grasso/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactContent}
                                >Linkedin</a>
                                <ExternalLink />
                            </div>
                            <div className={styles.linksContainer} data-cursor="hover">
                                <a 
                                    href="/cv/Ludo-cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactContent}
                                >Look at my cv</a>
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