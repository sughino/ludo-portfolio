import styles from './skeleton.module.css';

type SkeletonProps = {
    className?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    style?: React.CSSProperties;
};

export function Skeleton({ className, width, height, borderRadius, style }: SkeletonProps) {
    return (
        <div
            className={`${styles.skeleton} ${className ?? ''}`}
            style={{ width, height, borderRadius, ...style }}
        />
    );
}