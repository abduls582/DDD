import React from 'react';
import './style.css';  // Import custom CSS for styling if needed
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import gmail from "../assets/img/gmail.png";

const SocialMedia = () => {
  return (
    <div className="album py-5 bg-dark text-center">
      <div className="container">
        <h2 className="text-white mb-5">Let's Chat</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <img 
              src={instagram}
              alt="Instagram" 
              className="img-fluid mb-4" 
            />
          </div>
          <div className="col-md-3">
            <img 
              src={facebook}
              alt="Facebook" 
              className="img-fluid mb-4" 
            />
          </div>
          <div className="col-md-3">
            <img 
              src={gmail}
              alt="Email" 
              className="img-fluid mb-4" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
