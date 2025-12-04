import React from 'react'
import styles from './About.module.css'
import { Fade } from 'react-reveal';

const About = () => {
  return <section className={styles.container} id="about">
    <Fade down distance='10%' duration={1500}>

      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <p className={styles.description}>
          We develop mobile apps for mobile workforces at medium to large enterprises. From compliance management to real-time operations, we transform complex systems into intuitive mobile experiences that drive productivity, efficiency, and adoption. Our experience spans service industries, automotive, and beyond.
        </p>
      </div>
      <div className={styles.imageContent}>
        <img className={styles.aboutImg}
          src="./assets/images/blurguystairs.jpg"
          alt="Blur guy image"
        />
        <p className={styles.description}>
          Our team brings decades of combined experience in mobile app development across iOS, Android, Flutter and React Native.
        </p>
      </div>
    </Fade>
  </section>
}

export default About
