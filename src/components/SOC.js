import React from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "../yqgzPwOk.jpg"; // Update the path to your logo
import userIcon from "../R.png"; // Update the path to your user icon
import "./landingPage.css";

const SOC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // navigate("/landing");
    window.history.back();
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
      path: "https://wazuh.com/cloud/",
      title: "Wazuh",
      content:
        "Wazuh is a free and open source platform used for threat prevention, detection, and response. It is capable of protecting workloads across on-premises, virtualized, containerized, and cloud-based environments.Wazuh solution consists of an endpoint security agent, deployed to the monitored systems, and a management server, which collects and analyzes data gathered by the agents.",
    },
  ];

  return (
    <div className="landing-page-container">
      <div className="header">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
        <h1 className="company-name">Netcon</h1>
        <div className="user-section">
          <img src={userIcon} alt="User Icon" className="user-icon" />
          {/* <button className="logout-button" onClick={handleBack}>
            <i className="material-icons">arrow_back</i>
          </button> */}
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <button className="back-button" onClick={handleBack}><i class="material-icons">arrow_back</i> Back</button>

        </div>
      </div>
      {/* <h2>SOC Management</h2> */}
      <br />
      <div className="buttons-container">
        {buttonData.map((button, index) => (
          <div
            key={index}
            className="button-wrapper"
            onClick={() => handleNavigation(button.path)}
          >
            <h4>{button.title}</h4>
            <p>{button.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SOC;
