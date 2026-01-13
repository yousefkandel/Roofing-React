import React from "react";

// استيراد الصور
import projectImg13 from "../../assets/img/all-images/projects/project-img13.png";
import projectImg14 from "../../assets/img/all-images/projects/project-img14.png";
import projectImg15 from "../../assets/img/all-images/projects/project-img15.png";
import projectImg16 from "../../assets/img/all-images/projects/project-img16.png";
import projectImg17 from "../../assets/img/all-images/projects/project-img17.png";
import projectImg18 from "../../assets/img/all-images/projects/project-img18.png";
import projectImg19 from "../../assets/img/all-images/projects/project-img19.png";
import projectImg20 from "../../assets/img/all-images/projects/project-img20.png";
import projectImg21 from "../../assets/img/all-images/projects/project-img21.png";
import { Link } from "react-router-dom";

const projectsData = [
  { img: projectImg13, tag: "#Insulation", title: "Roof Repair Services" },
  { img: projectImg14, tag: "#Residential", title: "Roofing Maintanance" },
  { img: projectImg15, tag: "#Repair", title: "Checking Roofing" },
  { img: projectImg16, tag: "#Residential", title: "Roofing Replacement" },
  { img: projectImg17, tag: "#Roofing", title: "Roof Inspections" },
  { img: projectImg18, tag: "#Residential", title: "Metal Roofing Systems" },
  { img: projectImg19, tag: "#Repair", title: "Slate Roofing Services" },
  { img: projectImg20, tag: "#Service", title: "Custom Roof Design" },
  { img: projectImg21, tag: "#Residential", title: "Roof Coating Services" },
];

const ProjectsPage = () => {
  return (
    <div className="project-inner-area sp1">
      <div className="container">
        <div className="row">
          {projectsData.map((project, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div className="projects-inner-box">
                <div className="img1">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="other-content">
                  <Link to="/" className="tags">{project.tag}</Link>
                  <div className="space16"></div>
                  <Link to="/" className="title">{project.title}</Link>
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

export default ProjectsPage;
