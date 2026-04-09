import { useState } from 'react';
import styles from '../styles/testimonials.module.scss';

export default function Testimonials(props) {
    return (
        <div className={styles.testimonials}>
            <p className={styles.title}>WHAT MY CLIENTS SAY</p>
            <div className={styles.container}>
                <div className={styles.card}>
                    <p className={styles.quote}>"Noah was very professional. I found he knew the market and the type of client to recommend to me as a landlord. He was pleasant and very easy to work with. I thought he was persistent and consistent. "</p>
                    <p className={styles.author}>Karen R., Rental Owner</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.quote}>"Noah stayed committed to the task until the end. Noah was pleasant, diligent, and easy to work with."</p>
                    <p className={styles.author}>Leotha Nixon, Buyer</p>
                </div>
            </div>
        </div>
    )
}