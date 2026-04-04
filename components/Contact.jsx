import styles from '../styles/contact.module.scss';

export default function Contact(props) {
    return (
        <div className={styles.contact}>
            <p className={styles.title}>CONTACT</p>
            <div className={styles.container}>
                <div className={styles.section}>
                    <p className={styles.label}>MOBILE</p>
                    <a className={styles.value} href="tel:2428077154" target="_blank" rel="noopener noreferrer">242.807.7154</a>
                </div>
                <div className={styles.section}>
                    <p className={styles.label}>EMAIL</p>
                    <a className={styles.value} href="mailto:noah@corcorancac.com" target="_blank" rel="noopener noreferrer">noah@corcorancac.com</a>
                </div>
                <div className={styles.section}>
                    <p className={styles.label}>WHATSAPP</p>
                    <a className={styles.value} href="https://wa.me/12428077154" target="_blank" rel="noopener noreferrer">242.807.7154</a>
                </div>
                <div className={styles.section}>
                    <p className={styles.label}>OFFICE</p>
                    <a className={styles.value} href="tel:2423264800" target="_blank" rel="noopener noreferrer">242.326.4800</a>
                </div>
            </div>
        </div>
    )
}