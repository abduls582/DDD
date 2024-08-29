import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./ScrollingImages.css";
import logo from "../assets/img/logo.png";
const ScrollingImages = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animation in milliseconds
      once: true,    // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      {/* Sticky Logo */}
      <div className="sticky-logo">
        <img
          src={logo}// Replace with your logo URL
          alt="Logo"
          className="custom-logo"
        />
      </div>

      {/* Scrolling Content */}
      <div className="view">
        {/* Block elements with images */}
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className={`block block-${index + 1}`}
            data-aos="fade-up"
          >
            {/* Content inside the block (if any) */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
