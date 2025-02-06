import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Aboutuser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutuser = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container" id="About">
            <div className="row">
                <div  className='about d-flex' data-aos="fade-up" data-aos-duration="2000">
                    <FontAwesomeIcon className='iconabout' icon={faUser} />
                    <h6>ABOUT</h6>
                </div>

                <div className="myinfo" data-aos="fade-up" data-aos-duration="2000">
                    <h5 className="text-white">
                        Every great design begins with an even <span>better story</span>
                    </h5>
                    <p>
                        Anash Siddiqui is a passionate web developer with 2 years of experience specializing in PHP, Laravel, ReactJs, JavaScript, and MySQL. He excels in building dynamic websites, e-commerce platforms, and management systems with seamless functionality. With a keen eye for design, he enhances user experience using Bootstrap, CSS, and jQuery. Anash is dedicated to optimizing performance, ensuring efficient and scalable web solutions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutuser
