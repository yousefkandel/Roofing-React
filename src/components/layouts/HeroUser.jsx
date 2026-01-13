import React from "react";
import heroBg from "../../assets/img/all-images/bg/hero-bg1.png";
import heroImg from "../../assets/img/all-images/hero/hero-img13.png";

function HeroUser({ pageName, pageLink }) {
  return (
    <div
      className="hero-inner-area"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="inner-header">
              <h2>{pageName}</h2>
              <div className="space24"></div>
              <span>
                <a href="/">{pageLink.home}</a>
                <i className="fa-solid fa-angle-right"></i> {pageName}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="img1">
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  );
}

export default HeroUser;
