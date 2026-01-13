import React, { useEffect } from "react";
import ctaImg from "../../assets/img/all-images/cta/cta-img1.png";
import AOS from "aos";
import "aos/dist/aos.css";

function CTASection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="cta1-section-area">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-4">
            <div
              className="images1 image-anime"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img src={ctaImg} alt="CTA Image" />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-8">
            <div className="cta-content-area heading1">
              <h2 data-aos="fade-left" data-aos-duration="1000">
                Get in Touch with Our <br className="d-xl-block d-none" /> Roofing Experts Today
              </h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="1100">
                Ready to protect your home with a strong, reliable roof? <br className="d-xl-block d-none" /> Whether you're in need of a complete roof replacement.
              </p>
              <div className="space32"></div>
              <form data-aos="fade-left" data-aos-duration="1200">
                <input type="email" placeholder="Your Email Address.." />
                <button type="submit" className="vl-btn1">
                  Subscribe <i className="fa-solid fa-angle-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
