import React from "react";
import "./style.css";
import webDevelopmentImage from "../assets/img/WEB_DEVELOPMENT.png";
import graphicDesignImage from "../assets/img/DIGITAL_DESIGNS.jpg";
import photoImage from "../assets/img/PHOTOGRAPHY.jpg";
import videographyImage from '../assets/img/VIDEOGRAPHY.jpg'; // Replace with your image path
import brandingImage from '../assets/img/BRANDING.jpg'; // Replace with your image path
import digitalMarketingImage from '../assets/img/DIGITAL_MARKETING.jpg';

import ServiceCard from "./serviceCard";

const SecondPart = () => {
  const services = [
    {
      title: "WEB DEVELOPMENT",
      image: webDevelopmentImage,
      description:
        "Front-End Development, Back-End Development, Web Hosting, Web Security, SEO",
    },
    {
      title: "GRAPHIC DESIGN",
      image: graphicDesignImage,
      description: "Logo Design, Branding, UI/UX Design, Illustrations",
    },
    {
      title: "DIGITAL MARKETING",
      image: photoImage, // Replace with actual image if available
      description:
        "SEO, Social Media Marketing, Content Creation, PPC Advertising",
    },
    {
        title: 'VIDEOGRAPHY',
        image: videographyImage, // Use the correct image path here
        description: 'Corporate Videos, Event Coverage, Promotional Videos, Video Editing',
      },
      {
        title: 'BRANDING',
        image: brandingImage, // Use the correct image path here
        description: 'Brand Strategy, Identity Design, Brand Positioning, Brand Messaging',
      },
      {
        title: 'DIGITAL MARKETING',
        image: digitalMarketingImage, // Use the correct image path here
        description: 'SEO, Content Marketing, Social Media Strategies, Email Campaigns',
      },
  ];

  return (
    <div className="container-fluid second-part">
      <div className="row text-center py-5">
        {services.map((service, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <ServiceCard
              title={service.title}
              image={service.image}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPart;
