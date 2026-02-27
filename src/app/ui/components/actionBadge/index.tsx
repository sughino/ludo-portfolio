import styles from './actionBadge.module.css'
import { ArrowRight } from 'lucide-react';
import { Expand } from 'lucide-react';

type ActionBadgeProps = {
  info: string
  usage: 'skills' | 'works'
  color?: string
}

export default function ActionBadge ({
    info,
    usage,
    color
} : ActionBadgeProps) {
    return (
        <div 
            className={styles.actionBadgeContainer}
            data-variant={usage}
            data-color={color}
        >
            <div className={styles.actionBadgeContent}>
                <h6>{info}</h6>
            </div>
            <div 
                className={styles.actionBadgeIconContainer}
            >
                {usage === 'works' ? (
                    <ArrowRight className={styles.actionBadgeIcon}/>
                ) : (
                    <Expand className={styles.actionBadgeIcon}/>
                )}
            </div>
        </div>
    )
}