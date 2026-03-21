import { Skeleton } from '@/ui/components/skeleton'
import { useIsTouch } from '@/contexts/DeviceContext'
import styles from './workPage.module.css'

export default function Loading() {
    const isTouch = useIsTouch();
    return (
        <section className={styles.workSection} data-device={isTouch && 'device'}>
            <div className={styles.skeletonContainer}>
                {isTouch && (
                    <>
                        <Skeleton className={styles.skeletonDeviceTitle} />
                        <Skeleton className={styles.skeletonBadge} />
                    </>
                )}
                <div className={styles.skeletonImgContainer}>
                    <Skeleton className={styles.skeletonImg} />
                    <Skeleton className={styles.skeletonDot} />
                    {!isTouch && (
                        <>
                            <Skeleton className={styles.skeletonActionBadge} />
                            <Skeleton className={styles.skeletonTitle} />
                        </>
                    )}
                </div>
                <div className="h-(--spacing-80)" />
                <div className={styles.paddingContainer}>
                    <Skeleton className={styles.skeletonContent} />
                </div>
            </div>
        </section>
    )
}