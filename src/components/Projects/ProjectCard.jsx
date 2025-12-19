import { useState } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project: { name, imageSrc, challenge, solution, impact, techStack } }) => {
  const [isActive, setIsActive] = useState(false);

  const handleViewProject = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const handleCardClick = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  return (
    <div className={`${styles.card} ${isActive ? styles.active : ''}`} onClick={handleCardClick}>
      {/* Clean image section - no overlay */}
      <div className={styles.imageWrapper} onClick={handleViewProject}>
        <picture>
          <source srcSet={imageSrc.replace(/\.(png|jpg|jpeg)$/, '.webp')} type="image/webp" />
          <img src={imageSrc} alt={name} className={styles.image} />
        </picture>
      </div>

      {/* Content section - clean background */}
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.tagline} onClick={handleViewProject}>{challenge}</p>

        <div className={styles.techStack}>
          {techStack.map((tech, id) => (
            <span key={id} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <button className={styles.ctaButton} onClick={handleViewProject}>
          View Project →
        </button>
      </div>

      {/* Slide-in detail overlay */}
      <div className={styles.detailOverlay}>
        <div className={styles.detailContent}>
          <h3 className={styles.detailTitle}>{name}</h3>

          <div className={styles.storySection}>
            <div className={styles.storyItem}>
              <span className={styles.label}>Challenge</span>
              <p className={styles.storyText}>{challenge}</p>
            </div>

            <div className={styles.storyItem}>
              <span className={styles.label}>Solution</span>
              <p className={styles.storyText}>{solution}</p>
            </div>

            <div className={styles.storyItem}>
              <span className={styles.label}>Impact</span>
              <p className={styles.storyText}>{impact}</p>
            </div>
          </div>

          <div className={styles.detailTechStack}>
            {techStack.map((tech, id) => (
              <span key={id} className={styles.detailTechBadge}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;