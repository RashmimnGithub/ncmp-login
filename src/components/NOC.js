import React from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
import "./landingPage.css";

const NOC = () => {
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
      path: "https://172.19.2.21:8061/",
      title: "OpManager",
      content: "OpManager is a comprehensive network monitoring software that provides real-time visibility into the performance of various network devices, servers, and storage systems."
    },
    {
      path: "https://www.zabbix.com/cloud_monitoring",
      title: "Zabbix",
      content: "Zabbix is an enterprise-class open source distributed monitoring solution. Zabbix is a software that monitors numerous parameters of a network and the health and integrity of servers, virtual machines, applications, services, databases, websites, the cloud and more."
    },
    {
      path: "https://www.paessler.com/cloud-monitoring",
      title: "Prtg",
      content: "PRTG (Paessler Router Traffic Grapher ) is a network monitoring software developed by Paessler GmbH. It monitors system conditions like bandwidth usage or uptime and collect statistics from miscellaneous hosts such as switches, routers, servers, and other devices and applications."
    },
  ];
  
  return (
    <div className="landing-page-container">
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <button className="back-button" onClick={handleBack}><i class="material-icons">arrow_back</i>Back</button>
      <h1>NOC Management</h1>
      <br />
      <div className="buttons-container">
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

export default NOC;
