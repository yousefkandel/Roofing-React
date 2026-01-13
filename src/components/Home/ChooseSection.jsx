// src/components/ChooseSection.jsx
import React from "react";

// استيراد الصور
import icon1 from "../../assets/img/icons/ch-icons1.svg";
import icon2 from "../../assets/img/icons/ch-icons2.svg";
import icon3 from "../../assets/img/icons/ch-icons3.svg";
import icon4 from "../../assets/img/icons/ch-icons4.svg";
import { Link } from "react-router-dom";

function ChooseSection() {
  const boxes = [
    {
      icon: icon1,
      title: "Emergency Services",
      desc: "As a locally owned business, we understand the unique needs of our community",
    },
    {
      icon: icon2,
      title: "Profession Approach",
      desc: "At Roofpro services we are committed to providing top notch roofing services",
    },
    {
      icon: icon3,
      title: "Reliability Focused",
      desc: "We pride ourselves on delivering high-quality roofing solutions backed.",
    },
    {
      icon: icon4,
      title: "Experience Focused",
      desc: "Choosing the right roofing contractor is a big decision & we don’t take that lightly.",
    },
  ];

  return (
    <div className="choose10-section sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="heading10">
              <h5>
                <img src={icon1} alt="Sub Logo" /> why choose us
              </h5>
              <div className="space16"></div>
              <h2>
                Roofing You Can Rely <span>On Every Shingle Time</span>
              </h2>
              <div className="space16"></div>
              <p>
                With years of hands-on roofing experience and a team of licensed professionals, we bring unmatched skill and reliability to every job. We’ve helped hundreds of homeowners just like you protect what matters most, &amp; we back our work with warranties you can trust.
              </p>
              <div className="space16"></div>
              <p>
                When it comes to protecting your home or business, you deserve a roofing team you can trust. At roofing we combine years of experience with top-tier craftsmanship &amp; dependable.
              </p>
              <div className="space38"></div>
              <div className="btn-area1">
                <Link to="/" className="vl-btn12">Learn More</Link>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="choose10-all-boxes-area">
              <div className="row">
                {boxes.map((item, index) => (
                  <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="choose10-boxarea">
                      <div className="icons">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="space16"></div>
                      <div className="content1-area">
                        <Link to="/">{item.title}</Link>
                        <div className="space12"></div>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                    {index % 2 === 1 && <div className="space30 d-xl-block d-none"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ChooseSection;
