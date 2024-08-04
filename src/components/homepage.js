import React, { Fragment } from "react";
import "./style.css";
import "./responsive.css"
import "./style.css.map"
// import "./style.scss"
import "./bootstrap.css"
import logo from "../images/netcon_logo.jpg";
import monitoring from "../images/Monitoring_image.jpg"
import monitoring1 from "../images/monitoring_logo.svg"
import asset from "../images/asset.jpg"
import asset1 from "../images/asset_logo.png"
import cloud from "../images/cloud management_image.png"
import cloud1 from "../images/cloud management_logo.png"
import soc from "../images/soc_image.png"
import soc1 from "../images/soc_logo.png"
import finops from "../images/finops_image.png"
import finops1 from "../images/finops_logo.webp"
import reporting from "../images/reporting_image.jpg"
import reporting1 from "../images/reporting_logo.png"
import itsm from "../images/itsm_image.png"
import itsm1 from "../images/itsm_logo.jpg"
import noc from "../images/noc_images.webp"
import noc1 from "../images/noc_monitoring_logo.jpg"
import automation from "../images/automation_image.jpg"
import automation1 from "../images/automation_logo.png"
import { Link } from "react-router-dom";
import plug from "../images/plug.png";

function Home(){
    return(
        <Fragment>
            <div className="hero_area">
    {/* <!-- header section strats --> */}
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="">
            <img src={logo} alt=""/>
            <span>
              
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="s-1"> </span>
            <span className="s-2"> </span>
            <span className="s-3"> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                <Link className="nav-link" to="/homepage"> Home <span className="sr-only">(current)</span></Link>  
                  {/* <a className="nav-link" href="/homepage">Home <span className="sr-only">(current)</span></a> */}
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>  */}
                <li className="nav-item">
                <Link className="nav-link" to="/landing"> Service</Link>  
                  {/* <a className="nav-link" href="service.html"> Service </a> */}
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="blog.html"> Blog </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* <!-- end header section -->
    <!-- slider section --> */}
    <section className=" slider_section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="detail_box">
              <h1>
                Netcon <br></br>
                CMP <br></br>
                Services
                </h1>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-1">
            <div className="img_content">
              <div className="img_container">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="img-box">
                        <img src={asset} alt=""/>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={monitoring} alt=""/>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={cloud} alt=""/>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={soc} alt=""/>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={finops} alt=""/>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={reporting} alt=""/>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={itsm} alt=""/>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={noc} alt=""/>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="img-box">
                        <img src={automation} alt=""/>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="sr-only">Next</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
    {/* <!-- end slider section --> */}
  </div>


  {/* <!-- service section --> */}
  <section className="service_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Services
        </h2>
        <img src={plug} alt=""/>
      </div>

      <div className="service_container">

      <div className="box">
          <div className="img-box">
            <img src={monitoring1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Monitoring
            </h5>
            <p>
            Monitoring is a process to periodically collect, analyse and use information to actively manage performance, maximise positive impacts and minimise the risk of adverse impacts.
            </p>
          </div>
        </div>
        
        <div className="box">
          <div className="img-box">
            <img src={itsm1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              ITSM
            </h5>
            <p>
              ITSM in cloud refers to IT Service Management solutions that are deployed and delivered through cloud infrastructure. ITSM cloud solutions can simplify the operations, planning, and implementation of IT services for businesses.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="img-box">
            <img src={automation1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Automation
            </h5>
            <p>
              AWX makes it possible for users across an organization to share, vet, and manage automation content by means of a simple, powerful, and agentless technical implementation. IT managers can provide guidelines on how automation is applied to individual teams
            </p>
          </div>
        </div>

        <div className="box">
          <div className="img-box">
            <img src={reporting1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Reporting
            </h5>
            <p>
              Cloud reporting involves collecting, analyzing, and presenting data generated in a cloud environment to derive valuable insights for better decision-making12. It transforms raw data into meaningful charts, graphs, and tables, enabling real-time insights and timely decisions.
            </p>
          </div>
        </div>

        <div className="box ">
          <div className="img-box">
            <img src={finops1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Finops
            </h5>
            <p>
              FinOps is an operational framework and cultural practice which maximizes the business value of cloud, enables timely data-driven decision making, and creates financial accountability through collaboration between engineering, finance, and business teams.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="img-box">
            <img src={soc1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              SoC
            </h5>
            <p>
              A Cloud SOC monitors cloud applications and infrastructure 24/7 to detect vulnerabilities, respond to threats, and prevent attacks. It ensures continuous vigilance over an organization’s IT infrastructure, maintaining security while adhering to compliance requirements.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="img-box">
            <img src={asset1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Asset Management
            </h5>
            <p>
              Cloud Asset Management (CAM) is a crucial practice in today’s digital era. It focuses on managing and tracking resources essential for delivering cloud services.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="img-box">
            <img src={cloud1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              CMP
            </h5>
            <p>
              A Cloud Management Platform (CMP) is a software tool that helps organizations manage and optimize their cloud infrastructure across multiple cloud providers and services. 
            </p>
          </div>
        </div>

        <div className="box">
          <div className="img-box">
            <img src={noc1} className="img1" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              NoC
            </h5>
            <p>
              The Network Operations Center (NOC) is a centralized location where 24/7 logo and management of events affecting technology services and infrastructure take place. Originating in the late 1970s by telecommunication service providers, today’s NOCs monitor not only networking equipment but also cloud, power, environmental, and service aspects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- end service section -->

  <!-- footer section --> */}
  <footer className="container-fluid footer_section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-9 mx-auto">
          <p>
            &copy; 
            <a href="https://html.design/">Netcon Technologies pvt ltd</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/* <!-- footer section --> */}


  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
        </Fragment>
    )
}

export default Home;