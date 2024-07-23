import React from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
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
      content: "Wazuh is a free and open source platform used for threat prevention, detection, and response. It is capable of protecting workloads across on-premises, virtualized, containerized, and cloud-based environments.Wazuh solution consists of an endpoint security agent, deployed to the monitored systems, and a management server, which collects and analyzes data gathered by the agents."
    },
  ];
  
  return (
    <div className="landing-page-container">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <button className="back-button" onClick={handleBack}><i class="material-icons">arrow_back</i></button>
      <h1>SOC Management</h1>
      <br />
      <div className="buttons-container" >
        {buttonData.map((button, index) => (
          <div key={index} className="button-wrapper" onClick={() => handleNavigation(button.path)}>
            <h4>{button.title}</h4>
            <p>{button.content}</p>
            {/* <button onClick={() => handleNavigation(button.path)}>Click here</button> */}
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default SOC;
