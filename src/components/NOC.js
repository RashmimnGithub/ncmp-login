import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./landingPage.css";

const LandingPage1 = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      navigate("/landing"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
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
      title: "Ops",
      content: "Cloud help desk software: Zoho Desk is a cloud help desk software that helps you support your customers, no matter how they reach out to you, wherever you are, via a single interface."
    },
    {
      path: "https://www.ansible.com/awx",
      title: "Zabbix",
      content: "AWX makes it possible for users across an organization to share, vet, and manage automation content by means of a simple, powerful, and agentless technical implementation. IT managers can provide guidelines on how automation is applied to individual teams"
    },
    {
      path: "https://www.economize.cloud",
      title: "Prig",
      content: "FinOps is an operational framework and cultural practice which maximizes the business value of cloud, enables timely data-driven decision making, and creates financial accountability through collaboration between engineering, finance, and business teams."
    },
  ];
  
  return (
    <div className="landing-page-container">
      <button className="logout-button" onClick={handleLogout}>Back</button>
      <h1>NOC Management</h1>
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

export default LandingPage1;
