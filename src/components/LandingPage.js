import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-page-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <h1>Welcome to the Netcon</h1>
      <br></br>
      <div className="buttons-container">
        {["/url1", "/url2", "/url3", "/url4", "/url5", "/url6"].map((path, index) => (
          <div key={index} className="button-wrapper">
            <h4>Cloud</h4>
            
            <p>In cloud computing, you pay to access a shared pool of resources hosted on 
                remote servers managed by service providers. This eliminates the need for 
                self-managing physical resources, and you only pay for what you use. Cloud 
                platforms connect users via the internet, facilitating secure data exchange. 
                Deployment models include public, private, and hybrid clouds.</p>
            <button onClick={() => handleNavigation(path)}>Button {index + 1}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
