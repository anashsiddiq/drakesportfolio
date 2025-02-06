import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faDAndD } from "@fortawesome/free-brands-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos";

const Resume = () => {
    useEffect(() => {
        Aos.init();
    })
    const timelineData = [
        { year: "2022", title: "Project Initiation", description: "Started brainstorming and research for the project." },
        { year: "2023", title: "Development Phase", description: "Built the core functionalities and backend API." },
        { year: "2024", title: "Testing & Deployment", description: "Performed testing and launched the first version." },
        { year: "2025", title: "Expansion & Updates", description: "Enhancing features and expanding user base." },
    ];
    return (
        <div className='container'id="resume">
            
            <div className='row'>
                <div className='resume d-flex' data-aos="fade-up" data-aos-duration="2000">
                    <FontAwesomeIcon className="resumefile" icon={faFile} />
                    <h6>Reume</h6>
                </div>
                <div className="educationdetails" data-aos="fade-up" data-aos-duration="2000">
                    <h4 className="text-white">Education
                        <FontAwesomeIcon className="endicons" icon={faDAndD} />
                        <span>Experience</span></h4>
                </div>
                <div className="timeline"  data-aos="flip-right" data-aos-duration="1500">
                    {timelineData.map((event, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="timeline-content">
                                <h3>{event.year}</h3>
                                <h5>{event.title}</h5>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    
    )
}

export default Resume
