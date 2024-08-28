import React from "react";
import "./style.css";

const FeedbackForm = () => {
  return (
    <div className="feedback-container d-flex justify-content-center align-items-center">
      <div className="card feedback-form p-4 text-light shadow rounded">
        <h2 className="text-center mb-4">GIVE US YOUR FEEDBACK</h2>

        <button className="btn btn-outline-success w-100 mb-3 whatsapp-button">
          MESSAGE US ON WHATSAPP
        </button>

        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control feedback-input"
              placeholder="YOUR EMAIL"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="form-control feedback-input"
              rows="4"
              placeholder="YOUR QUERIES"
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
