import React from 'react'
import styles from './Hero.module.css';
import { Fade } from 'react-reveal';

const Hero = () => {
    return (
    <section className={styles.container}>
     <Fade down distance='10%' duration={1500}>
    <div className={styles.content}>
     <h1 className={styles.title}>Powering enterprise retail through simplicity</h1>
     <p className={styles.description}>WorkMobile is an app development studio on a mission to create a better and everyday user experience and interfaces for business processes, staff productivity and customer engagement.</p>
    </div>
    <img src="./assets/images/wmobile-logo-icon-white.png" alt="Hero WMobile logo" className={styles.heroImg} />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
    </Fade>
  </section>
    );
}

export default Hero
