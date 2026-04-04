import styles from '../styles/Header.module.scss';

export default function Header(props) {
    return (
        <div className={styles.header}>
            <p className={styles.text}>THE REAL ESTATE BEY</p>
            <p className={styles.subtext}>Nassau ·  Bahamas</p>
        </div>
    )
}