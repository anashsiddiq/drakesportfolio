import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/MySkills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import htmllogo from '../assets/Image/html.svg';
import csslogo from '../assets/Image/css.svg';
import jslogo from '../assets/Image/Javascript.svg';
import Bootstraplogo from '../assets/Image/Bootstrap.svg';
import Jquerylogo from '../assets/Image/jquery.svg';
import Reactlogo from '../assets/Image/Reactjs.svg';
import phplogo from '../assets/Image/php.svg';
import mysqllogo from '../assets/Image/mysql.svg';
import laravelogo from '../assets/Image/laravel.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos";

const MySkills = () => {
    useEffect(()=>{
        Aos.init();
    })
    return (
        <div className="container" id="skills">
            <div className="row">
                <div id="About" className='Myskills d-flex' data-aos="fade-up" data-aos-duration="2000">
                    <FontAwesomeIcon className='Myskillsicons' icon={faShapes} />
                    <h6>Skills</h6>
                </div>
                <div className="Myskillsdetails" data-aos="fade-up" data-aos-duration="2000">
                    <h4 className="text-white">
                        My <span>Advantages</span>
                    </h4>
                </div>
                
                <div className="skills_develop">
                 <div className="html-container" data-aos="fade-right" data-aos-duration="2000">
                    <img src={htmllogo} alt="" />
                    <h6>97%</h6>
                 </div>
                 <div className="css-container"  data-aos="fade-up" data-aos-duration="2000">
                    <img src={csslogo} alt="" />
                    <h6>95%</h6>
                 </div>
                 <div className="js-container" data-aos="fade-left" data-aos-duration="2000">
                    <img src={jslogo} alt="" />
                    <h6>93%</h6>
                 </div>
                </div>
                <div className="skills_develop">
                 <div className="html-container" data-aos="fade-right" data-aos-duration="2000">
                    <img src={Bootstraplogo} alt="" />
                    <h6>90%</h6>
                 </div>
                 <div className="css-container" data-aos="fade-up" data-aos-duration="2000">
                    <img src={Jquerylogo} alt="" />
                    <h6>87%</h6>
                 </div>
                 <div className="js-container" data-aos="fade-left" data-aos-duration="2000">
                    <img src={Reactlogo} alt="" />
                    <h6>98%</h6>
                 </div>
                </div>
                <div className="skills_develop">
                 <div className="html-container"data-aos="fade-right" data-aos-duration="2000">
                    <img src={phplogo} alt="" />
                    <h6>98%</h6>
                 </div>
                 <div className="css-container"  data-aos="fade-up" data-aos-duration="2000">
                    <img src={mysqllogo} alt=""/>
                    <h6>90%</h6>
                 </div>
                 <div className="js-container" data-aos="fade-left" data-aos-duration="2000">
                    <img src={laravelogo} alt="" />
                    <h6>80%</h6>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default MySkills
