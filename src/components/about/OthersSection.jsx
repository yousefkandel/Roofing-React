import React from "react";
import otIcon from "../../assets/img/icons/ot-icons4.svg";
import { Link } from "react-router-dom";

function OthersSection() {
  return (
    <div className="others-section2 sp10">
      <div className="container">
        <div className="row">
          {/* Our Mission */}
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="others-boxes">
              <div className="icons-heading">
                <div className="icons">
                  <img src={otIcon} alt="Our Mission Icon" />
                </div>
                <div className="heading">
                  <Link to="/">Our Mission</Link>
                  <div className="space16"></div>
                  <p>
                    Our mission is to provide quality roofing solutions that
                    protect and enhance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="others-boxes">
              <div className="icons-heading">
                <div className="icons">
                  <img src={otIcon} alt="Our Vision Icon" />
                </div>
                <div className="heading">
                  <Link to="/">Our Vision</Link>
                  <div className="space16"></div>
                  <p>
                    Our vision is the leading roofing company known for
                    excellence, innovation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Services */}
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="others-boxes">
              <div className="icons-heading">
                <div className="icons">
                  <img src={otIcon} alt="Trusted Services Icon" />
                </div>
                <div className="heading">
                  <Link to="/">Trusted Services</Link>
                  <div className="space16"></div>
                  <p>
                    Roofing vision refers to the overall purpose mission that a
                    roofing company's.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OthersSection;
