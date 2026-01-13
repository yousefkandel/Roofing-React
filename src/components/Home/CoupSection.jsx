// src/components/CoupSection.jsx
import React from "react";

// استيراد الصور
import Logo from "../../assets/img/logo/logo1.png";
import SubLogo from "../../assets/img/icons/sub-logo4.svg";
import { Link } from "react-router-dom";

function CoupSection() {
  const coupons = [
    {
      title: "Unlock Huge Savings on Roofing Services Today!",
      price: "$1000 OFF",
      btnText: "Learn More",
    },
    {
      title: "Limited Time Roofing Deals Built for Every",
      price: "$500 OFF",
      btnText: "Learn More",
    },
    {
      title: "Affordable Roofing Starts with These Exclusive",
      price: "$400 OFF",
      btnText: "Claim Now",
    },
  ];

  return (
    <div className="coupons10-section-area sp2">
      <div className="container">
        <div className="row space-margin60 align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="heading10">
              <h5>
                <img src={SubLogo} alt="Sub Logo" /> COUPONS
              </h5>
              <div className="space16"></div>
              <h2>
                Save Big on Your Next <span>Roofing Project</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-2"></div>
          <div className="col-xl-3 col-lg-4">
            <div className="space16 d-lg-none d-block"></div>
            <div className="btn-area1 text-end">
              <Link to="/" className="vl-btn12">Explore coupons</Link>
            </div>
          </div>
        </div>

        <div className="row">
          {coupons.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
              <div className="coupons10-boxarea">
                <div className="counpons-head">
                  <img src={Logo} alt="RoofPro Logo" />
                  <div className="space24"></div>
                  <Link to="/" className="title">{item.title}</Link>
                </div>
                <div className="cupons-price">
                  <Link to="/" className="price">{item.price}</Link>
                  <div className="space24"></div>
                  <div className="btn-area1">
                    <Link to="/" className="vl-btn12">{item.btnText}</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CoupSection;
