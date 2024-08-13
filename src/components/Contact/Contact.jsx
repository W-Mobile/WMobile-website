import React from 'react'
import styles from './Contact.module.css'
import { Fade } from 'react-reveal';

const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <Fade right distance='10%' duration={1200}>
    <div>
        <h2 className={styles.title}>Get in touch</h2>
        <h2 className={styles.subtitle}>WorkMobile AB</h2>
        <p className={styles.address}>Kungsgatan 57 411 15 Gothenburg</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img className={styles.iconImg} src="./assets/images/linkedinicon.svg" alt="LinkedIn Icon" />
            <a href="https://www.linkedin.com/company/work-mobile">WorkMobile AB</a>
        </li>
        <li className={styles.link}>
            <img className={styles.iconImg} src="./assets/images/mailicon.svg" alt="Mail Icon" />
            <a href="mailto:info@workmobile.se">info@workmobile.se</a>
        </li>
        <li className={styles.link}>
            <img className={styles.iconImg} src="./assets/images/phoneicon.svg" alt="Phone Icon" />
            <p>0706 342 54 00</p>
        </li>
    </ul>
    </Fade>
  </footer>
}

export default Contact
