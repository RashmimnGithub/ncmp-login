import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import "./landingPage.css";
import monitoring from "../assets/monitoring.jpg";
// import ITSM from "../assets/monitoring.jpg";
// import Automation from "../assets/monitoring.jpg";
// import Dashboard from "../assets/monitoring.jpg";
// import FinOps from "../assets/monitoring.jpg";
// import SOC from "../assets/monitoring.jpg";
// import AssetManagement from "../assets/monitoring.jpg";
// import CMP from "../assets/monitoring.jpg";
// import NOC from "../assets/monitoring.jpg";
import userLogo from "../assets/userlogo.png";
import logo from "../assets/logo.jpg";

const buttonData = [
  {
    path: "https://172.19.2.21:8061/",
    title: "Monitoring",
    content: "Monitoring is a process to periodically collect, analyse and use information to actively manage performance, maximise positive impacts and minimise the risk of adverse impacts.",
    image: monitoring,
    docLink: "https://example.com/monitoring-doc",
    department: ["admin"]
  },
  {
    path: "https://support.netcon.in:8448/",
    title: "ITSM",
    content: "ITSM in cloud refers to IT Service Management solutions that are deployed and delivered through cloud infrastructure. ITSM cloud solutions can simplify the operations, planning, and implementation of IT services for businesses.",
    image: monitoring,
    docLink: "https://example.com/itsm-doc",
    department: ["admin", "user"]
  },
  {
   path: "http://20.197.45.42:32167/#/login",
    title: "Automation",
    content: "AWX makes it possible for users across an organization to share, vet, and manage automation content by means of a simple, powerful, and agentless technical implementation. IT managers can provide guidelines on how automation is applied to individual teams",
    department: ["admin"],
    image: monitoring,
    docLink: "https://example.com/itsm-doc"  
  },
  {
    path: "https://app.powerbi.com/links/G56uML9AUH?ctid=3865b44b-651f-4df8-a0c8-2625494f6198&pbi_source=linkSharea",
    title: "Dashboard",
    content: "Cloud reporting involves collecting, analyzing, and presenting data generated in a cloud environment to derive valuable insights for better decision-making12. It transforms raw data into meaningful charts, graphs, and tables, enabling real-time insights and timely decisions.",
    department: ["admin"],
     image: monitoring,
     docLink: "https://example.com/itsm-doc"  
   },
   {
    path: "/up",
    title: "FinOps",
    content: "FinOps is an operational framework and cultural practice which maximizes the business value of cloud, enables timely data-driven decision making, and creates financial accountability through collaboration between engineering, finance, and business teams.",
    department: ["admin", "user"],
     image: monitoring,
     docLink: "https://example.com/itsm-doc"  
   },
  //  {
  //   path: "/up",
  //   title: "Finops",
  //   content: "FinOps is an operational framework and cultural practice which maximizes the business value of cloud, enables timely data-driven decision making, and creates financial accountability through collaboration between engineering, finance, and business teams.",
  //   department: ["admin", "user"],
  //    image: "./monitoring.jpg",
  //    docLink: "https://example.com/itsm-doc"  
  //  },
     {
    path: "/soc",
    title: "SoC",
    content: "A Cloud SOC monitors cloud applications and infrastructure 24/7 to detect vulnerabilities, respond to threats, and prevent attacks. It ensures continuous vigilance over an organization’s IT infrastructure, maintaining security while adhering to compliance requirements.",
    department: ["admin"],
    image: monitoring,
   docLink: "https://example.com/itsm-doc"
  },
  {
    path: "/up",
    title: "Asset Management",
    content: "Cloud Asset Management (CAM) is a crucial practice in today’s digital era. It focuses on managing and tracking resources essential for delivering cloud services. These assets include both tangible elements, such as physical or virtual storage and servers, as well as intangible components like software licenses and undocumented staff knowledge",
    department: ["admin", "user"],
    image: monitoring,
     docLink: "https://example.com/itsm-doc"
  },
  {
    path: "/up",
    title: "CMP",
    content: "A Cloud Management Platform (CMP) is a software tool that helps organizations manage and optimize their cloud infrastructure across multiple cloud providers and services. CMPs provide a centralized interface for monitoring, provisioning, deploying, and managing cloud resources, such as virtual machines, containers, storage, and networking",
    department: ["admin", "user"],
    image: monitoring,
     docLink: "https://example.com/itsm-doc"
  },
  {
    path: "/noc",
    title: "NoC",
    content: "The Network Operations Center (NOC) is a centralized location where 24/7 monitoring and management of events affecting technology services and infrastructure take place. Originating in the late 1970s by telecommunication service providers, today’s NOCs monitor not only networking equipment but also cloud, power, environmental, and service aspects.",
    department: ["admin"],
    image: monitoring,
     docLink: "https://example.com/itsm-doc"
  },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [department, setRole] = useState(null);
  const [filteredButtonData, setFilteredButtonData] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [userInfo, setUserInfo] = useState({ fullName: "", email: "", department: "" });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, 'Users', user.uid));
          if (userDoc.exists()) {
            const userRole = userDoc.data().department;
            setRole(userRole);

            const filteredData = buttonData.filter(button => button.department.includes(userRole));
            setFilteredButtonData(filteredData);

            setUserInfo({
              fullName: userDoc.data().fullName,
              email: user.email,
              department: userRole
            });
          } else {
            console.error("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };

    fetchUserRole();
  }, []);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  if (department === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="landing-page-container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to Netcon</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button><br></br>
        <div className="user-info-container">
          <img src={userLogo} alt="User Logo" className="user-logo" />
          <div className="user-info-tooltip">
            <p>User Name: {userInfo.fullName}</p>
            <p>Email: {userInfo.email}</p>
            <p>Department: {userInfo.department}</p>
          </div>
        </div>
      </div>
      <div className="layout-container">
        <div className="buttons-panel">
          {filteredButtonData.map((button, index) => (
            <div key={index} className="button-item" onClick={() => handleButtonClick(button)}>
              {button.title}
            </div>
          ))}
        </div>
        <div className="content-panel">
          {selectedButton ? (
            <>
              <h2>{selectedButton.title}</h2><br></br>
              <div className="win"> 
              <img src={selectedButton.image} alt={selectedButton.title} className="content-image" />
              <p>{selectedButton.content}</p>
              </div><br></br>
              <a href={selectedButton.path} target="_blank" rel="noopener noreferrer" className="doc-link">Read More</a>
            </>
          ) : (
            <p>Please select an option from the left panel.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;