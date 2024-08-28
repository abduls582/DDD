// src/components/HorizontalScroll.js
import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./horizontalScroll.css"; // Create this CSS file for styling

const HorizontalScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".panel");
    const totalPanels = sections.length;
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (totalPanels - 1), // Move to the left based on the number of panels
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container", // Element that triggers the scrolling
        pin: true, // Pin the scroll container during the animation
        scrub: 1, // Smooth scrubbing
        end: "+=3000", // Total scroll distance
      },
    });

    return () => {
      scrollTween.kill(); // Clean up the animation on component unmount
    };
  }, []);

  return (
    <div className="scroll-container">
      <div className="panel">
        {" "}
        {/* Your content goes here */}
        <img
          src="https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1"
          alt="Image 1"
        />
      </div>
      <div className="panel">
        <img
          src="https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2"
          alt="Image 2"
        />
      </div>
      <div className="panel">
        <img
          src="https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3"
          alt="Image 3"
        />
      </div>
      {/* Add more panels as needed */}
    </div>
  );
};

export default HorizontalScroll;
