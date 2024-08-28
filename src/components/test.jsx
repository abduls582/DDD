// src/components/Test.js
import React, { useEffect } from "react";
import "./test.css"; // Make sure to reference the correct CSS file

const Test = () => {
  const image =
    "https://images.unsplash.com/photo-1711941339560-a1bf95bc4f02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const handleScroll = () => {
      const stickyImages = document.querySelectorAll(".sticky-image");
      stickyImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        // Scale up when the top of the image is at the center of the viewport
        if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
          img.style.transform = `scale(1.2)`; // Scale up
        } else {
          img.style.transform = `scale(1)`; // Scale down
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky-section">
      <div className="sticky-image">
        <img src={image} alt="Image 1" />
      </div>
      <div className="sticky-image">
        <img src={image} alt="Image 2" />
      </div>
      <div className="sticky-image">
        <img src={image} alt="Image 3" />
      </div>
    </div>
  );
};

export default Test;
