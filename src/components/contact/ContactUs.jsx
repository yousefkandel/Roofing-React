import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="contact-inenr-area sp1">
      <div className="container">
        <div className="row">
          {/* جهة المعلومات */}
          <div className="col-xl-6">
            <div className="contact-heading">
              <div className="heading1">
                <h5 className="vl-section-subtitle">
                  <img src="assets/img/icons/sub-logo1.svg" alt="" /> Contact Us
                </h5>
                <div className="space16"></div>
                <h2 className="vl-section-title">
                  Start Your Roofing Journey Today—Contact Us!
                </h2>
                <div className="space16"></div>
                <p>
                  We’re here to provide you with the best roofing solutions tailored
                  to your needs.
                </p>

                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="contact-boxarea">
                      <h4>Email Address</h4>
                      <Link to="/">
                        roofproservice@.com <br className="d-xl-block d-none" />
                        Support@roofpro.com
                      </Link>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6">
                    <div className="contact-boxarea">
                      <h4>Office Location</h4>
                      <p>
                        8708 Technology <br className="d-xl-block d-none" /> Forest
                        Pl Suite 125 -G
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* جهة الفورم */}
          <div className="col-xl-6">
            <div
              className="contact-main-boxarea aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <h3>Send Message</h3>
              <div className="space16"></div>
              <form>
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="input-area">
                      <input type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="input-area">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="input-area">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="input-area">
                      <input type="number" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-12">
                    <div className="input-area">
                      <select className="country-area">
                        <option>Are you a new client?</option>
                        <option>General Services</option>
                        <option>Specialist Services</option>
                        <option>Women’s Health Services</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-12">
                    <div className="input-area">
                      <textarea placeholder="How can we help you?"></textarea>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-12 text-end">
                    <button type="submit" className="vl-btn1">
                      Send Now <i className="fa-solid fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* الخريطة */}
          <div className="col-xl-12 mt-5">
            <div className="contact-maps-area">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
