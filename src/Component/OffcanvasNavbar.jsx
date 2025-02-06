import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEquals, faHouseChimney, faUser, faFile, faBarsStaggered, faShapes, faAddressCard, faTableList, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import NavbarLinks from "./NavbarLinks";
import Mystatus from "./Mystatus";
import Settingback from "./Settingback";
import SelfIntroduction from "./SelfIntroduction";
import RoundText from "./RoundText";
import Projectandexpdetails from "./Projectandexpdetails";
import Aboutuser from "./Aboutuser";
import Resume from "./Resume";
import Curser from "./Curser";
import Services from "./Services";
import MySkills from "./MySkills";
import Portfolio from "./Portfolio";
FontAwesomeIcon
const OffcanvasNavbar = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(true)} className="open-btn">
                <FontAwesomeIcon className="iconequal" icon={faEquals} />
            </button>

            <div className={`offcanvas-menu ${show ? "show" : ""}`}>
                <h5 className="textmiddle">Menu</h5>
                <button className="close-btn" onClick={() => setShow(false)}>&times;</button>
                <nav>
                    <ul>
                        <div className="iconflex">
                            <FontAwesomeIcon className="chagecolor" icon={faHouseChimney} />
                            <li><a href="#home">Home</a></li>
                        </div>

                        <div className="iconflex">
                            <FontAwesomeIcon className="chagecolor" icon={faUser} />
                            <li><a href="#about">About</a></li>
                        </div>
                        <div className="iconflex">
                            <FontAwesomeIcon className="chagecolor" icon={faFile} />
                            <li><a href="#resume">Resume</a></li>
                        </div>

                        <div className="iconflex">
                            <FontAwesomeIcon className="chagecolor" icon={faBarsStaggered} />
                            <li><a href="#services">Services</a></li>
                        </div>

                        <div className="iconflex">
                            <FontAwesomeIcon className="chagecolor" icon={faShapes} />
                            <li><a href="#skills">Skills</a></li>
                        </div>

                        <div className="iconflex">
                            <FontAwesomeIcon className="chagecolor" icon={faAddressCard} />
                            <li><a href="#portfolio">Portfolio</a></li>
                        </div>

                        <div className="iconflex">
                            <FontAwesomeIcon className="chagecolor" icon={faTableList} />
                            <li><a href="#Testimonal">Testimonal</a></li>
                        </div>
                        <div className="iconflex">
                            <FontAwesomeIcon className="chagecolor" icon={faEnvelopeOpenText} />
                            <li><a href="#contact">Contact</a></li>
                        </div>
                        <div className="container">
                            <div className="socialtarget">
                                <h6>Social</h6>
                                <ul className="soical">
                                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </nav>

            </div>
            {show && <div className="overlay" onClick={() => setShow(false)}></div>}
            <NavbarLinks/>
            <Mystatus/>
            <Settingback/>
            <SelfIntroduction/>
            <RoundText/>
            <Projectandexpdetails/>
            <Aboutuser/>
            <Resume/>
            <Curser/>
            <Services/>
            <MySkills/>
            <Portfolio/>
        </div>

    );
};

export default OffcanvasNavbar;