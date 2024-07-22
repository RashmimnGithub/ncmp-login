import React from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
import "./landingPage.css";

const LandingPage1 = () => {
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
      path: "https://172.19.2.21:8061/",
      title: "Ops",
      content: "    "
    },
    {
      path: "https://www.ansible.com/awx",
      title: "Zabbix",
      content: ""
    },
    {
      path: "https://www.economize.cloud",
      title: "Prig",
      content: ""
    },
  ];
  
  return (
    <div className="landing-page-container">
      <button className="logout-button" onClick={handleBack}>Back</button>
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
