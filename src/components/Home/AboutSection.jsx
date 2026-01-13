// src/components/AboutSection.jsx
import React from "react";
import p1 from "../../assets/img/all-images/about/about-img16.png";
import p2 from "../../assets/img/all-images/about/about-img17.png";
import p3 from "../../assets/img/elements/elements21.png";
import p4 from "../../assets/img/elements/elements22.png";
import p5 from "../../assets/img/icons/sub-logo4.svg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="about10-section sp1">
      <div className="container">
        <div className="row align-items-center">
          {/* الصور */}
          <div className="col-xl-6">
            <div className="about6-images-area">
              <div className="img1">
                <img src={p1} alt="About 1" />
              </div>
              <div className="img2">
                <img src={p2} alt="About 2" />
              </div>
              <img src={p3} alt="Decoration" className="elements21" />
              <img src={p4} alt="Decoration" className="elements22" />
            </div>
          </div>

          {/* النصوص */}
          <div className="col-xl-6">
            <div className="heading10">
              <h5>
                <img src={p5} alt="Sub Logo" /> About our company
              </h5>
              <div className="space16"></div>
              <h2>
                Your partner for durable <span>quality-reliable roofing</span>
              </h2>
              <div className="space16"></div>
              <p>
                At RoofPro services we are committed to providing top-notch roofing services with a focus on quality, reliability and customer satisfaction. 
                With over years of experience in the industry, our team of skilled professionals delivers superior roof installations and maintenance for both residential & commercial properties. 
                We believe in going above and beyond to ensure your roof.
              </p>

              <div className="row">
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="about-counter-boxarea">
                    <h2><span className="counter">1500</span>+</h2>
                    <div className="space16"></div>
                    <p>Projects Completed</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-6">
                  <div className="about-counter-boxarea">
                    <h2><span className="counter">800</span>+</h2>
                    <div className="space16"></div>
                    <p>Happy Customer</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-6">
                  <div className="about-counter-boxarea">
                    <h2><span className="counter">98</span>%</h2>
                    <div className="space16"></div>
                    <p>Satisfied Customer</p>
                  </div>
                </div>
              </div>

              <div className="space38"></div>
              <div className="btn-area1">
                <Link to="/about" className="vl-btn12">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
