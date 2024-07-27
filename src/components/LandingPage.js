import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "./firebase";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [filteredButtonData, setFilteredButtonData] = useState([]);

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
      path: "/noc",
      title: "Monitoring",
      content: "The Network Operations Center (NOC) is a centralized location where 24/7 monitoring and management of events affecting technology services and infrastructure take place. Originating in the late 1970s by telecommunication service providers, today’s NOCs monitor not only networking equipment but also cloud, power, environmental, and service aspects.",
      roles: ["admin", "user"]
    },
    {
      path: "https://support.netcon.in:8448/",
      title: "ITSM",
      content: "ITSM in cloud refers to IT Service Management solutions that are deployed and delivered through cloud infrastructure. ITSM cloud solutions can simplify the operations, planning, and implementation of IT services for businesses.",
      roles: ["admin"]
    },
    {
      path: "http://20.197.45.42:32167/#/login",
      title: "Automation",
      content: "AWX makes it possible for users across an organization to share, vet, and manage automation content by means of a simple, powerful, and agentless technical implementation. IT managers can provide guidelines on how automation is applied to individual teams",
      roles: ["admin", "user"]
    },
    {
      path: "https://app.powerbi.com/links/G56uML9AUH?ctid=3865b44b-651f-4df8-a0c8-2625494f6198&pbi_source=linkSharea",
      title: "Reporting",
      content: "Cloud reporting involves collecting, analyzing, and presenting data generated in a cloud environment to derive valuable insights for better decision-making12. It transforms raw data into meaningful charts, graphs, and tables, enabling real-time insights and timely decisions.",
      roles: ["admin"]
    },
    {
      path: "/up",
      title: "Finops",
      content: "FinOps is an operational framework and cultural practice which maximizes the business value of cloud, enables timely data-driven decision making, and creates financial accountability through collaboration between engineering, finance, and business teams.",
      roles: ["admin", "user"]
    },
    {
      path: "/soc",
      title: "SoC",
      content: "A Cloud SOC monitors cloud applications and infrastructure 24/7 to detect vulnerabilities, respond to threats, and prevent attacks. It ensures continuous vigilance over an organization’s IT infrastructure, maintaining security while adhering to compliance requirements.",
      roles: ["admin", "user"]
    }, 
    {
      path: "/up",
      title: "Asset Management",
      content: "Cloud Asset Management (CAM) is a crucial practice in today’s digital era. It focuses on managing and tracking resources essential for delivering cloud services. These assets include both tangible elements, such as physical or virtual storage and servers, as well as intangible components like software licenses and undocumented staff knowledge",
      roles: ["admin", "user"]
    },
    {
      path: "/up",
      title: "CMP",
      content: "A Cloud Management Platform (CMP) is a software tool that helps organizations manage and optimize their cloud infrastructure across multiple cloud providers and services. CMPs provide a centralized interface for monitoring, provisioning, deploying, and managing cloud resources, such as virtual machines, containers, storage, and networking",
      roles: ["admin", "user"]
    },
    {
      path: "/noc",
      title: "NoC",
      content: "The Network Operations Center (NOC) is a centralized location where 24/7 monitoring and management of events affecting technology services and infrastructure take place. Originating in the late 1970s by telecommunication service providers, today’s NOCs monitor not only networking equipment but also cloud, power, environmental, and service aspects.",
      roles: ["admin", "user"]
    },
  ];

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await firestore.collection('users').doc(user.uid).get();
          const userRole = userDoc.data().role;
          setRole(userRole);

          const filteredData = buttonData.filter(button => button.roles.includes(userRole));
          setFilteredButtonData(filteredData);
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };

    fetchUserRole();
  }, []);

  if (role === null) {
    return <div>Loading...</div>; // Show a loading indicator while fetching role
  }

  return (
    <div className="landing-page-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <h1>Welcome to the Netcon</h1>
      <br />
      <div className="buttons-container">
        {filteredButtonData.map((button, index) => (
          <div key={index} className="button-wrapper" onClick={() => handleNavigation(button.path)}>
            <h4>{button.title}</h4>
            <p>{button.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
