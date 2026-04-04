import { useState } from 'react';
import Turnstile from 'react-turnstile';
import styles from '../styles/market.module.scss';

export default function MarketUpdates(props) {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState(null);
    const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

    async function handleSubmit() {
        setStatus('loading');
        const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, turnstileToken: token }),
        });
        setStatus(res.ok ? 'success' : 'error');
    }

    return (
        <div className={styles.marketUpdates}>
            <p className={styles.title}>MARKET UPDATES</p>
            <div className={styles.container}>
                <p className={styles.header}><span>Monthly data,</span> straight to your inbox.</p>
                <p className={styles.subheader}>One email per month. Nassau MLS data by property type, area, and price band. No spam.</p>
                <input className={styles.input} type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onSuccess={setToken}
                    onExpire={() => setToken(null)}
                    onError={() => setToken(null)}
                    theme="dark"
                    appearance='interaction-only'
                />
                <button className={styles.button} disabled={!token || status === 'loading' || status === 'success'} onClick={handleSubmit}>
                    {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed!' : 'Get the monthly update'}
                </button>
                {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
            </div>
        </div>
    )
}