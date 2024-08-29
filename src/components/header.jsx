import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css"; // Importing the CSS file with necessary styles
import logo from "../assets/img/logo.png";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="container-fluid p-0 first_page">
      {/* Sticky Logo */}
      <div className="sticky-logo">
        <img src={logo} alt="Digital Dammish Logo" className="custom-logo" />
      </div>

      {/* Animated Blocks Section */}
      <h1 className="text-center mt-5">Animate On Scroll</h1>
      <div className="view">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className={`block block-${index + 1}`}
            data-aos="fade-up"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
