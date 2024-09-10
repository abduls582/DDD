
import React, { useState } from "react";
import "./style.css";

const FeedbackForm = () => {
  const [data, setData] = useState({
    email: "", 
    query: "",
  });

  const { email, query } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Prepare data in 2D array format
    const requestBody = [
      ["email", "query", "timestamp"], // Column headers
      [email, query, new Date().toLocaleString()] // Data row
    ];
  
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/abduls582/google_sheets/iwgVrTLIrFBxjcrN?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
  
      const result = await response.json();
      if (response.ok) {
        alert("Feedback submitted successfully!");
        setData({ email: "", query: "" });
      } else {
        console.error("API Error:", result);
        alert("Error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting your feedback.");
    }
  };
  

  return (
    <div className="feedback-container d-flex justify-content-center align-items-center">
      <div className="card feedback-form p-4 text-light shadow rounded">
        <h2 className="text-center mb-4">GIVE US YOUR FEEDBACK</h2>

        <button className="btn btn-outline-success w-100 mb-3 whatsapp-button">
          MESSAGE US ON WHATSAPP
        </button>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              className="form-control feedback-input"
              placeholder="YOUR EMAIL"
              value={email}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="query"
              className="form-control feedback-input"
              rows="4"
              placeholder="YOUR QUERIES"
              value={query}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100 submit-button">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
