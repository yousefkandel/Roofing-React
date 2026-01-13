import React from "react";

import p1 from "../../assets/img/all-images/hero/hero-img19.png";
import p2 from "../../assets/img/elements/elements23.png";
import { Link } from "react-router-dom";
function HeroSlider() {
  return (
    <div className="hero10-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-main-heading">
              <h1>Roofing</h1>
              <div className="space20"></div>
              <h1 className="text-end">
                <span>Services</span>
              </h1>
              <p>
                At RoofPro services, we specialize in providing high-quality roofing solutions designed to protect and enhance your home.
              </p>
              <div className="space60 d-lg-block d-none"></div>
              <div className="space30 d-lg-none d-block"></div>
              <div className="btn-area1">
                <Link to="/contact" className="vl-btn12">Upgrade Your Roof</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الصور */}
      <div className="img1">
        <img src={p1} alt="Roof Service" />
      </div>
      <img src={p2} alt="Decoration" className="elements23" />
    </div>
  );
}

export default HeroSlider;
