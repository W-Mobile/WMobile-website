import React, { useState } from "react";
import './CustomCard.css';

const Card = ({ image, title, role, description }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

    return (
        <div className={`card ${isActive ? 'active' : ''}`} onClick={handleCardClick}>
        <img src={image} alt={`${title} profile`} className="card-img" />
        <div className="card-body">
            <h1 className="card-title">{title}</h1>
            <p className="card-role">{role}</p>
            <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };

  export default Card;