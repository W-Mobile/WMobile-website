import React from 'react'
import styles from './Team.module.css';
import Card from '../CustomCard';
import teamMembers from '/Users/alexandergunnarsson/Desktop/Projects/Web/wmobile-webiste/src/data/team.json'
import { Fade } from 'react-reveal';
const Team = () => {
  return <div> 
    <Fade down distance='10%' duration={1500}>
    <section className={styles.container} id="team">
    
    <h2 className={styles.title}>Meet the team</h2> 
    <div className={styles.content}>
    <div className={styles.teamMembers}>
      {
        teamMembers.map((teamMember, id) => {
            return <div key={id}>
                <div>
                    <Card
                    image={teamMember.imageSource}
                    title={teamMember.name}
                    role={teamMember.role}
                    description={teamMember.description}
                    />
                </div>
            </div>
        })
      }
    </div>
    </div>
  </section>
    </Fade>
  </div>
}

export default Team
