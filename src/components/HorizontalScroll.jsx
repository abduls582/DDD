import React, { useEffect, useState } from 'react';
import './HorizontalScroll.css'; // Import your CSS file
import logo from "../assets/img/logo.png";

const images = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
  'https://cdn.pixabay.com/photo/2019/09/15/12/09/network-4478141_1280.jpg',
  'https://images.unsplash.com/photo-1562577309-2592ab84b1bc',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
  'https://images.unsplash.com/photo-1562577309-2592ab84b1bc',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
  'https://cdn.pixabay.com/photo/2015/11/07/08/49/hand-1030563_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/08/29/10/21/business-3639565_1280.jpg',
  'https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661281312741-531b9e37b756?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/05/28/12/05/workplace-8793724_1280.jpg',
  'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const HorizontalScroll = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Duration of the animation in milliseconds
    const animationDuration = 1000; // Adjust to match the CSS animation duration

    // Timer to hide the logo after the animation ends
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="horizontal-scroll-wrapper">
      <div className={`sticky-logo ${showLogo ? '' : 'hide'}`}>
        <img src={logo} alt="Digital Dammish Logo" className="custom-logo" />
      </div>
    
      <div className="view">
        {images.map((image, index) => (
          <div
            key={index}
            className={`block block-${index}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
