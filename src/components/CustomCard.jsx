import React, { useState } from "react";
import './CustomCard.css';

const Card = ({ image, title, role, description }) => {
  
    return (
        <body>
        <div className="card">
        <img src={image} alt='' className="card-img" />
        <div className="card-body">
            <h1 class="card-title">{title}</h1>
            <p class="card-role">{role}</p>
            <p class="card-description">{description}</p>
        </div>
      </div>
        </body>
     
    );
  };
  
  export default Card;