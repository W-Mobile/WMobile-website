import React from 'react';
import styles from './ProjectCard.module.css';

const renderDescription = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) => 
    urlRegex.test(part) ? (
      <a key={index}
       href={part}
        target="_blank"
         rel="noopener noreferrer"
         style={{color: 'white', textDecoration: 'underline'}}>
        {part}
      </a>
    ) : part
  );
};

const ProjectCard = ({ project: { name, imageSrc, about, techStack } }) => {
  return (
    <div className={styles.container} style={{backgroundImage: `url(${imageSrc})`}}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{renderDescription(about)}</p>
        </div>
        <ul className={styles.techStack}>
          {techStack.map((tech, id) => (
            <li key={id} className={styles.tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;