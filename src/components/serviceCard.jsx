import React from "react";
import "./style.css";

const ServiceCard = ({ title, image, description }) => {
    
  return (
    <div className="service-card">
      <div className="service-content">
        <h2>{title}</h2>
      </div>
      <div className="image-card">
        <img src={image} alt={title} className="service-image" />
      </div>
      <div className="service-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
