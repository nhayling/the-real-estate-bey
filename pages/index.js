import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import MarketUpdates from "@/components/MarketUpdates";
import Head from "next/head";
import styles from '../styles/main.module.scss';
import Socials from "@/components/SocialMedia";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noah Hayling | The Real Estate Bey</title>
        <meta name="description" content="Nassau real estate with Noah Hayling — Sales Associate at Corcoran CA Christie. Monthly MLS market data, active listings, and straight answers for buyers, sellers, and investors in New Providence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Noah Hayling" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#111113" />
        <link rel="canonical" href="https://therealestatebey.com" />
        <link rel="icon" href="https://cdn.archipelagoapps.com/real-estate/the-real-estate-bey/NH.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://therealestatebey.com" />
        <meta property="og:title" content="Noah Hayling | The Real Estate Bey" />
        <meta property="og:description" content="MLS data, active listings, and straight answers for Nassau buyers, sellers, and investors." />
        <meta property="og:image" content="https://cdn.archipelagoapps.com/real-estate/the-real-estate-bey/og-the-real-estate-bey.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Noah Hayling | The Real Estate Bey" />
        <meta name="twitter:description" content="MLS data, active listings, and straight answers for Nassau buyers, sellers, and investors." />
        <meta name="twitter:image" content="https://cdn.archipelagoapps.com/real-estate/the-real-estate-bey/og-the-real-estate-bey.jpg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
          <Hero />
          <Links />
          <MarketUpdates />
          <Socials />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
