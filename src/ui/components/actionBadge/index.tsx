import Button from '../button';
import styles from './actionBadge.module.css'

type ActionBadgeProps = {
  info: 'Development only' | 'Full build' | 'Design',
  reverse?: boolean,
  iconColor?: string
}

export default function ActionBadge ({
    info,
    reverse = false,
    iconColor
} : ActionBadgeProps) {
    return (
        <div 
            className={styles.actionBadgeContainer}
            data-variant={reverse && 'reverse'}
        >
            <div className={styles.actionBadgeContent}>
                <h6>{info}</h6>
            </div>
            <div 
                className={styles.actionBadgeIconContainer}
            >
                <Button iconColor={iconColor} icon={reverse ? 'arrow-left' : 'arrow-right'} className={styles.actionBadgeIcon} reverse={reverse}/>
            </div>
        </div>
    )
}