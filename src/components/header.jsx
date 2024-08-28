import React from "react";
import "./style.css"; // Your main app styles
import logo from "../assets/img/logo.png";

const App = () => {
  return (
    <div className="container-fluid p-0 first_page">
      <header className="text-center py-5 bg-dark text-white header">
        {" "}
        {/* Added 'header' class here */}
        <h1 className="custom-header">HELLO EVERYONE!!!!!!</h1>
        <h2 className="custom-header">WELCOME TO</h2>
        <div className="d-flex justify-content-center align-items-center">
          <span className="me-3 text-digital">DIGITAL</span>
          <img src={logo} alt="Digital Dammish Logo" className="custom-logo" />
          <span className="ms-3 text-dammish">DAMMISH</span>
        </div>
      </header>
    </div>
  );
};

export default App;
