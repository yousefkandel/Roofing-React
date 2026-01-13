import React from "react";
import ErrorImg from "../../assets/img/all-images/others/error-img.png"; // تأكد من المسار الصحيح

const ErrorPage = () => {
  return (
    <div className="error1 sp1">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 m-auto">
            <div className="image-heading text-center">
              <div className="img1">
                <img src={ErrorImg} alt="Error" />
              </div>
              <div className="space48"></div>
              <div className="heading1">
                <h2>Sorry, Page Not Found!</h2>
                <div className="space16"></div>
                <p>
                  Sorry, the page you are looking for doesn’t exist or{" "}
                  <br className="d-xl-block d-none" /> has been moved. Here are
                  some helpful links.
                </p>
                <div className="space24"></div>
                <div className="btn-area1">
                  <a href="/" className="vl-btn1">
                    Back to Home <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
