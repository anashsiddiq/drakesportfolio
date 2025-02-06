import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import brelproj from '../assets/Image/BrelProject.png'
import bbvmg from '../assets/Image/bbvmgproject.png'
import brelcomp from '../assets/Image/Bhagirathcomp.png'
import bhagirathindus from '../assets/Image/bhagirathindstries.png'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

  return (
    <div className="container">
      <div className="row">
        <div id="About" className='Portfolio d-flex' data-aos="fade-up" data-aos-duration="2000">
          <FontAwesomeIcon className='Portfolioicon' icon={faTableList} />
          <h6>PORTFOLIO</h6>
          <h4 className="text-white">Featured <span>Project</span></h4>
        </div>
        <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          <div className="project" style={{ cursor: "pointer" }}>
            <img src={brelproj} alt="Brel Project" width="200" />
          </div>
          <div className="project" style={{ cursor: "pointer" }}>
            <img src={bbvmg} alt="BBVMG Project" width="200" />
          </div>
          <div className="project" style={{ cursor: "pointer" }}>
            <img src={brelcomp} alt="BrelComp Project" width="200" />
          </div>
          <div className="project" style={{ cursor: "pointer" }}>
            <img src={bhagirathindus} alt="BrelComp Project" width="200" />
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>

    


  )
}

export default Portfolio
