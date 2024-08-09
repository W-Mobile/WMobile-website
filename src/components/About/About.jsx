import React from 'react'
import styles from './About.module.css'
import { Fade } from 'react-reveal';

const About = () => {
  return <section className={styles.container} id="about">
    <Fade down distance='10%' duration={1500}>
    
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
  <p className={styles.description}>
  We specialize in B2B solutions tailored for mobile employees within medium to large enterprises. While our core focus is on B2B services, we also extend our expertise to other sectors. Our primary markets include service industries and the automotive sector. 
  </p>
    </div>
    <div className={styles.imageContent}>
    <img className={styles.aboutImg} 
    src="./assets/images/blurguystairs.jpg" 
    alt="Blur guy image"
     />
       <p className={styles.description}>
  We work with an ever growing network of forward thinking developers and designers from all around the world. We are always on demand to recruit new talent of creatives and wizards. Email us your cover letter and CV to careers@workmobile.se. 
  </p>
    </div>
    </Fade>
  </section>
}

export default About
