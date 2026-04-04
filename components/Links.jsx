import styles from '../styles/links.module.scss';

export default function Links(props) {
    return (
        <div className={styles.links}>
            <p className={styles.title}>QUICK LINKS</p>

            <a href='https://wa.me/12428077154' target="_blank" rel="noopener noreferrer">
                <div className={`${styles.card} ${styles.whatsapp}`}>
                    <div className={styles.whatsappIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                            <path d="M12.0503 0C5.46388 0 0.102684 5.33472 0.0998894 11.8916C0.0991909 13.9875 0.64963 16.0334 1.69533 17.8366L0 24L6.33494 22.3462C8.08056 23.2937 10.0455 23.7928 12.0454 23.7935H12.0503C18.636 23.7935 23.9972 18.4581 24 11.9013C24.0014 8.72367 22.7594 5.73584 20.5032 3.48836C18.2469 1.24018 15.2468 0.00139034 12.0503 0ZM12.0503 21.7852H12.0461C10.2642 21.7852 8.51575 21.3076 6.99086 20.4074L6.62832 20.1933L2.86955 21.1748L3.87264 17.5273L3.63653 17.1533C2.64253 15.5794 2.11724 13.7602 2.11793 11.8929C2.12003 6.44282 6.57594 2.00904 12.0545 2.00904C14.7075 2.00973 17.2012 3.03928 19.0761 4.90789C20.9516 6.77581 21.9834 9.25965 21.9827 11.9006C21.9806 17.3507 17.5247 21.7852 12.0503 21.7852ZM17.4981 14.3823C17.1998 14.2336 15.7315 13.5148 15.4577 13.4154C15.1839 13.316 14.9848 13.2666 14.7857 13.5641C14.5866 13.8617 14.0146 14.5311 13.8406 14.7292C13.6667 14.9281 13.4921 14.9524 13.1938 14.8036C12.8955 14.6549 11.9329 14.3406 10.7929 13.3285C9.90512 12.5408 9.30578 11.5676 9.13185 11.2701C8.95791 10.9725 9.11299 10.812 9.26317 10.6639C9.39729 10.5311 9.56144 10.317 9.71093 10.1432C9.86041 9.96941 9.91001 9.84567 10.0092 9.64686C10.1084 9.44873 10.0588 9.27494 9.98405 9.12617C9.90931 8.97741 9.31207 7.51477 9.06339 6.91971C8.821 6.34063 8.57512 6.41849 8.39141 6.40945C8.21747 6.40042 8.01839 6.39903 7.81931 6.39903C7.62023 6.39903 7.29682 6.47341 7.02299 6.77094C6.74917 7.06848 5.978 7.78728 5.978 9.24991C5.978 10.7125 7.04814 12.1258 7.19693 12.3239C7.34641 12.5221 9.30229 15.5238 12.2976 16.8106C13.0101 17.1164 13.5661 17.2993 13.9999 17.4362C14.7152 17.6621 15.3662 17.6302 15.8803 17.5537C16.4538 17.4682 17.6469 16.8349 17.8956 16.1404C18.1442 15.4466 18.1442 14.8516 18.0695 14.7271C17.9948 14.6034 17.7957 14.529 17.4974 14.3803L17.4981 14.3823Z"/>
                        </svg>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.title}>Message me on WhatsApp</p>
                        <p>Fastest way to reach me</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </a>
            <a href='https://brea.xposureapp.com/portal/bahamas/InteractiveLink?u=92901&l=65168,65169,64290,63386,38026&t=mls&h=dgEkxGgW38hpIdTE%2FKNuAdMzhRU%3D&pl=true&cids=13984&currency=BSD'>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <p className={styles.title}>My Listings</p>
                        <p>View my current listings in The Bahamas.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </a>
            {/* <a href='#'>
                <div className={`${styles.card} ${styles.featured}`}>
                    <div className={styles.content}>
                        <p className={styles.title}>Subscribe on YouTube <span className={styles.badge}>NEW</span></p>
                        <p>Full Market Breakdowns Coming Soon.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </a> */}
        </div>
    )
}