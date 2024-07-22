import React from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
import "./landingPage.css";

const LandingPage2 = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/landing"); // Redirect to landing page
  };

  const handleNavigation = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };
  
  const buttonData = [
    {
      path: "https://www.zoho.com/desk",
      title: "Wazu",
      content: "Cloud help desk software: Zoho Desk is a cloud help desk software that helps you support your customers, no matter how they reach out to you, wherever you are, via a single interface."
    },
  ];
  
  return (
    <div className="landing-page-container">
      <button className="logout-button" onClick={handleBack}>Back</button>
      <h1>SOC Management</h1>
      <br />
      <div className="buttons-container">
        {buttonData.map((button, index) => (
          <div key={index} className="button-wrapper">
            <h4>{button.title}</h4>
            <p>{button.content}</p>
            <button onClick={() => handleNavigation(button.path)}>{button.title} </button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default LandingPage2;
