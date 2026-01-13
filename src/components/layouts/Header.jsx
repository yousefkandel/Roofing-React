// src/components/Header.jsx
import React from "react";
import Logo from "../../assets/img/logo/logo1.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="homepage3-body">
      <div id="vl-header-sticky" className="vl-header-area vl-transparent-header">
        <div className="container">
          <div className="row row-bg1 align-items-center">
            <div className="col-xl-2 col-md-6 col-6">
              <div className="vl-logo">
                <a href="#">
                  <img src={Logo} alt="RoofPro Logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-7 d-none d-xl-block">
              <nav className="vl-main-menu text-center">
                <ul>
                  <li className="">
                                        <Link to="/">Home</Link>

               
                  </li>
                  <li className="">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="">
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li className="">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="">
                    <Link to="/contact">Contac Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
         <div className="col-xl-3 col-md-6 col-6">
  <div className="vl-hero-btn d-none d-xl-block text-end">
    <Link to="/contact" className="btn btn-danger">
      +123 456 7890
    </Link>
  </div>
</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
