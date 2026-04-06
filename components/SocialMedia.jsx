import styles from '../styles/socials.module.scss';

export default function Socials(props) {
    return (
        <div className={styles.socials}>
            <p className={styles.title}>FOLLOW ME</p>
            <div className={styles.grid}>
                <a>
                    <div className={styles.entry}>
                        <img src='/socials/svg/Instagram_Glyph_Gradient.svg' alt='Instagram'></img>
                    </div>
                </a>
                <a>
                    <div className={styles.entry}>
                        <img src='/socials/svg/TIKTOK_SOCIAL_ICON_SOLO_WHITE.svg' alt='TikTok'></img>
                    </div>
                </a>
                <a>
                    <div className={styles.entry}>
                        <img src='/socials/yt_icon_red_digital.png' alt='YouTube'></img>
                    </div>
                </a>
                <a>
                    <div className={styles.entry}>
                        <img src='/socials/svg/logo.svg' alt='X Logo'></img>
                    </div>
                </a>
            </div>
        </div>
    )
}