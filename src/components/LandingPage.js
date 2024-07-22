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
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };
  
  const buttonData = [
    {
      path: "https://www.zoho.com/desk",
      title: "ITSM",
      content: "Cloud help desk software: Zoho Desk is a cloud help desk software that helps you support your customers, no matter how they reach out to you, wherever you are, via a single interface."
    },
    {
      path: "https://www.ansible.com/awx",
      title: "Automation",
      content: "AWX makes it possible for users across an organization to share, vet, and manage automation content by means of a simple, powerful, and agentless technical implementation. IT managers can provide guidelines on how automation is applied to individual teams"
    },
    {
      path: "https://www.economize.cloud",
      title: "Finops",
      content: "FinOps is an operational framework and cultural practice which maximizes the business value of cloud, enables timely data-driven decision making, and creates financial accountability through collaboration between engineering, finance, and business teams."
    },
    {
      path: "https://grafana.com/grafana",
      title: "Reporting",
      content: "Grafana is an open-source observability platform for visualizing metrics, logs, and traces collected from your applications. It's a cloud-native solution for quickly assembling data dashboards that let you inspect and analyze your stack"
    },
    {
      path: "/landing1",
      title: "NoC (Monitoring)",
      content: "Cloud monitoring involves analyzing, tracking, and managing cloud-based services and applications. It provides visibility, automation, and control for monitoring and optimizing website and application performance"
    },
    {
      path: "/url6",
      title: "Asset Management",
      content: "Cloud Asset Management (CAM) is a crucial practice in today’s digital era. It focuses on managing and tracking resources essential for delivering cloud services. These assets include both tangible elements, such as physical or virtual storage and servers, as well as intangible components like software licenses and undocumented staff knowledge"
    },
    {
      path: "/url7",
      title: "CMP",
      content: " A Cloud Management Platform (CMP) is a software tool that helps organizations manage and optimize their cloud infrastructure across multiple cloud providers and services. CMPs provide a centralized interface for monitoring, provisioning, deploying, and managing cloud resources, such as virtual machines, containers, storage, and networking"
    },
    {
      path: "/url9",
      title: "SoC",
      content: " A Cloud Management Platform (CMP) is a software tool that helps organizations manage and optimize their cloud infrastructure across multiple cloud providers and services. CMPs provide a centralized interface for monitoring, provisioning, deploying, and managing cloud resources, such as virtual machines, containers, storage, and networking"
    },
  ];
  
  return (
    <div className="landing-page-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <h1>Welcome to the Netcon</h1>
      <br />
      <div className="buttons-container">
        {buttonData.map((button, index) => (
          <div key={index} className="button-wrapper">
            <h4>{button.title}</h4>
            <p>{button.content}</p>
            <button onClick={() => handleNavigation(button.path)}>{button.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default LandingPage;
