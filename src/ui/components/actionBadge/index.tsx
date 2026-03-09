import Button from '../button';
import styles from './actionBadge.module.css'

type ActionBadgeProps = {
  info: 'Development only' | 'Full build' | 'Design';
  reverse?: boolean;
  iconColor?: string;
  position?: 'top' | 'bottom';
  onClick?: () => void;
}

export default function ActionBadge ({
    info,
    reverse = false,
    iconColor,
    position = 'bottom',
    onClick
} : ActionBadgeProps) {
    return (
        <div 
            className={styles.actionBadgeContainer}
            data-variant={reverse && 'reverse'}
            data-position={position}
        >
            <div className={styles.actionBadgeContent}>
                <h6>{info}</h6>
            </div>
            <div 
                className={styles.actionBadgeIconContainer}
            >
                <Button onClick={() => onClick?.()} iconColor={iconColor} icon={reverse ? 'arrow-left' : 'arrow-right'} className={styles.actionBadgeIcon} reverse={reverse}/>
            </div>
        </div>
    )
}