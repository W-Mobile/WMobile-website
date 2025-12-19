import React from 'react'
import styles from './About.module.css'
import { Fade } from 'react-reveal';

const About = () => {
  return <section className={styles.container} id="about">
    <Fade down distance='10%' duration={1500}>

      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>

        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Value-Driven Solutions</h3>
              <p>By focusing on your specific business goals, we develop mobile solutions that go beyond code to create real, measurable impact for your entire organization.</p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Mobile Workforce Expertise</h3>
              <p>Deep experience in field service, operations, and mobile scenarios. We understand the unique challenges of mobile workforces and design solutions that work in real-world conditions.</p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Enterprise Integration</h3>
              <p>Seamless connection to your existing systems and workflows. We bridge complex backend infrastructure with intuitive mobile experiences that just work.</p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Built for Adoption</h3>
              <p>Apps people actually want to use. We focus on user experience and practical design to ensure high adoption rates and lasting impact on your operations.</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  </section>
}

export default About
