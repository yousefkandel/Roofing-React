import React from "react";
import aboutImg1 from "../../assets/img/all-images/about/about-img9.png";
import aboutImg2 from "../../assets/img/all-images/about/about-img10.png";
import subIcon from "../../assets/img/icons/sub-logo1.svg";

function AboutInner() {
  return (
    <div className="about-inner sp1">
      <div className="container">
        <div className="row">
          {/* الصورة الأولى والـ Counters */}
          <div className="col-xl-6">
            <div className="about-content-area">
              <div className="img1 image-anime">
                <img src={aboutImg1} alt="About" />
              </div>
              <div className="space32"></div>
              <div className="heading1">
                <p>
                  Our team of skilled professionals is dedicated to protecting
                  your home with durable, high-quality roofing that stands the
                  test of time. Whether it’s a minor repair, a complete
                  replacement.
                </p>
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="counter-area">
                      <h2>
                        <span className="counter">2.5</span>K
                      </h2>
                      <div className="space16"></div>
                      <p>Projects Competed</p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6">
                    <div className="counter-area">
                      <h2>
                        <span className="counter">84</span>+
                      </h2>
                      <div className="space16"></div>
                      <p>Workers in Company</p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6">
                    <div className="counter-area">
                      <h2>
                        <span className="counter">12</span>+
                      </h2>
                      <div className="space16"></div>
                      <p>Benefit Every Day</p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6">
                    <div className="counter-area">
                      <h2>
                        <span className="counter">05</span>+
                      </h2>
                      <div className="space16"></div>
                      <p>Received Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* النصوص والصورة الثانية */}
          <div className="col-xl-6">
            <div className="heading1">
              <h5 className="vl-section-subtitle">
                <img src={subIcon} alt="Sub Icon" /> About Us
              </h5>
              <div className="space16"></div>
              <h2 className="vl-section-title">
                Passion Meets Precision Transforming Roofing, Transforming Lives.
              </h2>
              <div className="space16"></div>
              <p>
                We believe that a strong roof is the foundation of a secure
                home. With years of experience in the roofing industry, we have
                built a reputation for delivering exceptional craftsmanship,
                innovative.
              </p>
              <div className="space32"></div>
              <div className="img1 image-anime">
                <img src={aboutImg2} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInner;
