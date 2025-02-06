import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="conainer" id="service" style={{overflowX:"hidden"}} >
            <div className="row">
                <div id="Services" className='service d-flex' data-aos="fade-up" data-aos-duration="2000">
                    <FontAwesomeIcon className='Serviceicon' icon={faBarsStaggered} />
                    <h6>Service</h6>
                </div>
                <div className="infodetails" data-aos="fade-up" data-aos-duration="2000">
                    <h4 className="text-white">
                        My <span>Specializations</span>
                    </h4>

                </div>
                <div className="sepcialdata1" id="servicesinc" data-aos="fade-up" data-aos-duration="2000">
                    <h4>Front End Developer</h4>
                    <p>Front-end developers are responsible for the user interface and user experience aspects of a website. They work on the visual elements that users interact with directly in their browsers.</p>
                </div>

                <div className="sepcialdata2 mt-3" id="servicesinc" data-aos="fade-up" data-aos-duration="2000">
                    <h4>Backend Developer</h4>
                    <p> Back-end developers focus on the server-side components of web applications. They manage databases, server logic, and application integration. Key technologies and skills </p>
                </div>
            </div>
        </div>
    )
}

export default Services
