import React from "react";

// استيراد الصور
import serviceImg7 from "../../assets/img/all-images/service/service-img7.png";
import serviceImg8 from "../../assets/img/all-images/service/service-img8.png";
import serviceImg9 from "../../assets/img/all-images/service/service-img9.png";
import serviceImg10 from "../../assets/img/all-images/service/service-img10.png";
import serviceImg11 from "../../assets/img/all-images/service/service-img11.png";
import serviceImg12 from "../../assets/img/all-images/service/service-img12.png";
import serviceImg14 from "../../assets/img/all-images/service/service-img14.png";
import serviceImg15 from "../../assets/img/all-images/service/service-img15.png";
import serviceImg16 from "../../assets/img/all-images/service/service-img16.png";

// استيراد أيقونات
import icon7 from "../../assets/img/icons/s-icons7.svg";
import icon8 from "../../assets/img/icons/s-icons8.svg";
import icon9 from "../../assets/img/icons/s-icons9.svg";
import icon10 from "../../assets/img/icons/s-icons10.svg";
import icon11 from "../../assets/img/icons/s-icons11.svg";
import icon12 from "../../assets/img/icons/s-icons12.svg";
import { Link } from "react-router-dom";

const servicesData = [
  {
    img: serviceImg7,
    icon: icon7,
    title: "Flat Roofing Solutions",
    desc: "Our flat roofing service are ideal for commercial buildings homes",
    duration: 900,
  },
  {
    img: serviceImg8,
    icon: icon8,
    title: "Green Roof Installation",
    desc: "Transform your roof into an eco-friendly asset with green roof.",
    duration: 1000,
  },
  {
    img: serviceImg9,
    icon: icon9,
    title: "Metal Roofing Services",
    desc: "Metal roofing offers unmatched durability, energy efficiency.",
    duration: 1100,
  },
  {
    img: serviceImg10,
    icon: icon10,
    title: "Asphalt Shingle Roofing",
    desc: "Asphalt shingles remain popular choice for their affordability.",
    duration: 1200,
  },
  {
    img: serviceImg11,
    icon: icon11,
    title: "Roof Maintenance",
    desc: "Routine roof maintenance is key ensuring long term performance",
    duration: 1300,
  },
  {
    img: serviceImg12,
    icon: icon12,
    title: "Roof Installation",
    desc: "Our roof installation services are designed to provide your home.",
    duration: 1400,
  },
  {
    img: serviceImg14,
    icon: icon10,
    title: "Metal Roofing Systems",
    desc: "Metal roofing offers unmatched durability and modern appeal.",
    duration: 1200,
  },
  {
    img: serviceImg15,
    icon: icon8,
    title: "Asphalt Shingle Roofing",
    desc: "Asphalt shingles are one of the most popular roofing materials",
    duration: 1300,
  },
  {
    img: serviceImg16,
    icon: icon12,
    title: "Green Roofing Solution",
    desc: "Green roofs are an eco-friendly choice that combines natural",
    duration: 1400,
  },
];

const ServicesPage = () => {
  return (
    <div className="service-inner-area sp1">
      <div className="container">
        <div className="row">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={service.duration}
              data-aos-offset={50 + index * 20}
            >
              <div className="service2-boxarea">
                <div className="image-icons">
                  <div className="img1 image-anime">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="icons">
                    <img src={service.icon} alt={service.title} />
                  </div>
                </div>
                <div className="content-area">
                  <Link to="/" className="title">
                    {service.title}
                  </Link>
                  <div className="space16"></div>
                  <p>{service.desc}</p>
                  <div className="space24"></div>
                  <Link to="/" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-xl-12">
            <div className="space18"></div>
            <div className="pagination-area">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="/" aria-label="Previous">
                      <i className="fa-solid fa-angle-left"></i>
                    </Link>
                  </li>
                  <li className="page-item"><Link className="page-link active" to="/">1</Link></li>
                  <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                  <li className="page-item"><Link className="page-link" to="/">...</Link></li>
                  <li className="page-item"><Link className="page-link" to="/">12</Link></li>
                  <li className="page-item">
                    <Link className="page-link" to="/" aria-label="Next">
                      <i className="fa-solid fa-angle-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
