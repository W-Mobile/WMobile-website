// import React from 'react'
// import styles from './ProjectCard.module.css'
// const ProjectCard = ({ project: {name, imageSrc, about, techStack} }) => {
//   return (
//     <div className={styles.container}>
//                     <img src={imageSrc} alt={`Image of ${name}`} className={styles.image} />
//                     <h3 className={styles.title}>{name}</h3>
//                     <p className={styles.description}>{about}</p>
//                     <ul className={styles.techStack}>{
//                         techStack.map((tech, id) => {
//                             return (
//                                 <li key={id} className={styles.tech}>
//                                 {tech}
//                             </li>
//                             );               
//                         })
//                         }
//                         </ul>
//                         <div>
                            
//                         </div>
//                 </div>
//   );
// }

// export default ProjectCard
import React from 'react';
import styles from './ProjectCard.module.css';

// const ProjectCard = ({ project: { name, imageSrc, about, techStack, link } }) => {
//   const renderDescription = (text) => {
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     return text.split(urlRegex).map((part, index) => 
//       urlRegex.test(part) ? (
//         <a key={index} href={part} target="_blank" rel="noopener noreferrer" className={styles.link}>
//           {part}
//         </a>
//       ) : (
//         part
//       )
//     );
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.imageWrapper}>
//         <img src={imageSrc} alt={`Image of ${name}`} className={styles.image} />
//       </div>
//       <h3 className={styles.title}>{name}</h3>
//       <p className={styles.description}>{renderDescription(about)}</p>
//       <ul className={styles.techStack}>
//         {techStack.map((tech, id) => (
//           <li key={id} className={styles.tech}>
//             {tech}
//           </li>
//         ))}
//       </ul>
//       {link && (
//         <a href={link} target="_blank" rel="noopener noreferrer" className={styles.learnMore}>
//           Learn More
//         </a>
//       )}
//     </div>
//   );
// }
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