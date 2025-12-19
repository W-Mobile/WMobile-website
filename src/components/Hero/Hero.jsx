import React from 'react'
import styles from './Hero.module.css';
import { Fade } from 'react-reveal';

const Hero = () => {
  return (
    <section className={styles.container}>
      <Fade down distance='10%' duration={1500}>
        <div className={styles.content}>
          <h1 className={styles.title}>From complex systems to simple taps</h1>
          <p className={styles.description}>We go beyond simple digitization to build mobile tools that drive measurable business impact and enhance the daily experience for every user.</p>
        </div>
        <img src="./assets/images/wmobile-logo-icon-white.png" alt="Hero WMobile logo" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </Fade>
    </section>
  );
}

export default Hero
