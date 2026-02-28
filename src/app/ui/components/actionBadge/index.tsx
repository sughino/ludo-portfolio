import styles from './actionBadge.module.css'
import { ArrowRight } from 'lucide-react';

type ActionBadgeProps = {
  info: 'Development only' | 'Full build' | 'Design'
}

export default function ActionBadge ({
    info
} : ActionBadgeProps) {
    return (
        <div 
            className={styles.actionBadgeContainer}
        >
            <div className={styles.actionBadgeContent}>
                <h6>{info}</h6>
            </div>
            <div 
                className={styles.actionBadgeIconContainer}
            >
                <ArrowRight className={styles.actionBadgeIcon}/>
            </div>
        </div>
    )
}