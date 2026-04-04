import styles from '../styles/hero.module.scss';

export default function Hero(props) {
    return (
        <div className={styles.hero}>
            <div className={styles.image}>
                <img src="https://cdn.archipelagoapps.com/real-estate/the-real-estate-bey/Noah%20Hayling.webp" alt="Noah Hayling" />
            </div>
            <div className={styles.content}>
                <p className={styles.position}>SALES AGENT · CORCORAN CA CHRISTIE</p>
                <p className={styles.agent}>Noah Hayling</p>
                <p className={styles.location}>Nassau, Bahamas</p>
            </div>
        </div>
    )
}