// src/components/ServicesSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../../assets/img/all-images/service/service-img29.png";
import p2 from  "../../assets/img/all-images/service/service-img30.png";
import p3 from   "../../assets/img/all-images/service/service-img31.png";
import c1 from "../../assets/img/icons/ch-icons1.svg";
import c2 from "../../assets/img/icons/ch-icons2.svg";
import c3 from "../../assets/img/icons/ch-icons3.svg";
import { Link } from "react-router-dom";

const services = [
      {
    img:p3,
    icon: c3,
    title: "Flat & Low-Slope Roofing",
    desc: "When you need roofing help, you need it fast & done right. We offer quick, dependable roofing solutions.",
    link: "../../service-single"
  },
  {
    img: p1,
    icon: c1,
    title: "Gutter-Flashing Services",
    desc: "Roofing isn’t just our job, it’s our passion. With years of hands-on experience and a commitment to top-quality.",
    link: "/service-single"
  },
  {
    img:p2,
    icon: c2,
    title: "Energy-Efficient Roofing",
    desc: "We’re more than just roofers—we’re your neighbors. As a proud local business, we serve the community with honesty.",
    link: "/service-single"
  },
  {
    img:p3,
    icon: c3,
    title: "Flat & Low-Slope Roofing",
    desc: "When you need roofing help, you need it fast & done right. We offer quick, dependable roofing solutions.",
    link: "../../service-single"
  },
   {
    img:p2,
    icon: c2,
    title: "Energy-Efficient Roofing",
    desc: "We’re more than just roofers—we’re your neighbors. As a proud local business, we serve the community with honesty.",
    link: "/service-single"
  }
];

function ServicesSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="service10-section sp1">
      <div className="container">
        <div className="row space-margin60 align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="heading10">
             
              <div className="space16"></div>
              <h2>Crafting Roofs with <span>Precision and Care</span></h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-2"></div>
          <div className="col-xl-3 col-lg-4">
            <div className="space16 d-lg-none d-block"></div>
            <div className="btn-area1 text-end">
              <Link to="/services" className="vl-btn12">Explore our services</Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              {services.map((service, index) => (
                <div key={index} className="service10-boxarea">
                  <div className="img1">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="content10-area">
                    <div className="icons">
                      <img src={service.icon} alt="Icon" />
                    </div>
                    <Link to='services' className="title">{service.title}</Link>
                    <div className="space16"></div>
                    <p>{service.desc}</p>
                    <div className="space24"></div>
                    <Link to='services' className="readmore">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
