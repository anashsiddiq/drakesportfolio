import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/css/Testimonal.css";
import testimonalimg1 from "/src/assets/Image/testimonalimg.jpg";
import testimonialimg2 from "../assets/Image/testimonalimg2.jpg"
import testimonialimg3 from "../assets/Image/testimonialimage3.jpg"
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Testimonial = () => {
    return (
        <>
         <div id="About" className='testimonal d-flex' data-aos="fade-up" data-aos-duration="2000">
          <FontAwesomeIcon className='testimonalicon' icon={faListUl} />
          <h6>Testimonal</h6>
          <h4 className="text-white">Trusted<span>Client</span></h4>
        </div>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="testimonial-item">
                        <img src={testimonalimg1} className="testimonial-img" alt="simraan khan" />
                        <div className="detail-container">
                        <h5>Jhone Doe</h5>
                        <h4>Ceo of <span>IBM Global</span></h4>
                        </div>
                        <div className="testimonial-content mt-3">
                            <p>“Drake - A Developer with the creativity, professional and
                                master of code. Much more than what i'm expect.
                                High quality product &amp; flexiable price. Recommended!.”</p>
                            <h5>Project</h5>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="testimonial-item">
                        <img src={testimonialimg2} className="testimonial-img" alt="Simran khan" />
                        <div className="detail-container">
                        <h5>Simrann khan</h5>
                        <h4>Ceo of <span>Director</span></h4>
                        </div>
                        <div className="testimonial-content mt-3">
                            <p>“Drake was a real pleasure to work with and we look 
                                                forward to working with him again. He's definitely the kind of 
                                                designer that you can trust with any project from A-Z.”</p>
                            <h5>Project</h5>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="testimonial-item">
                        <img src={testimonialimg3} className="testimonial-img" alt="Alex Johnson" />
                        <div className="detail-container">
                        <h5>Alex Johnson</h5>
                        <h4>Ceo of <span>Porject Manager</span></h4>
                        </div>
                        <div className="testimonial-content mt-3">
                            <p>“Extremely profressional and fast service!. Drake is a master
                                                of code and he also very creative. We done 3 projects with
                                                him and certain will continue.”"</p>
                            <h5>Project</h5>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
};

export default Testimonial;