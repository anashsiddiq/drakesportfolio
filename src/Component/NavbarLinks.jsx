import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/NavbarLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faUser, faFile, faBarsStaggered, faShapes, faAddressCard, faListUl, faTableList, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
const NavbarLinks = () => {

    return (
        <div>
            <div className="container changeToColor">
                <div className="social-icons-container d-flex justify-content-center mt-3">
                    <div className="tooltip-container">
                        <a href="">
                            <span className="tooltip-text">Home</span>
                            <FontAwesomeIcon className="fontbordetr tooltip-icon" icon={faHouseChimney} />
                        </a>
                    </div>
                    <div className="tooltip-container">
                    <a href="#About">
                    <span className="tooltip-text">About</span>
                    <FontAwesomeIcon className="fontbordetr" icon={faUser} />
                    </a>
                    </div>

                    <div className="tooltip-container">
                    <a href="#resume">
                    <span className="tooltip-text">Resume</span>
                    <FontAwesomeIcon className="fontbordetr" icon={faFile} />
                    </a>
                    </div>

                    <div className="tooltip-container">
                    <a href="">
                    <span className="tooltip-text">Services</span>
                    <FontAwesomeIcon className="fontbordetr" icon={faBarsStaggered} />
                    </a>
                    </div>

                    <div className="tooltip-container">
                    <a href="">
                    <span className="tooltip-text">Skills</span>
                    <FontAwesomeIcon className="fontbordetr" icon={faShapes} />
                    </a>
                    </div>

                    <div className="tooltip-container">
                    <a href="">
                    <span className="tooltip-text">Services</span>
                    <FontAwesomeIcon className="fontbordetr" icon={faAddressCard} />
                    </a>
                    </div>

                    <div className="tooltip-container">
                    <a href="">
                    <span className="tooltip-text">Portfolio</span>
                     <FontAwesomeIcon className="fontbordetr" icon={faTableList} />
                    </a>
                    </div>

                    <div className="tooltip-container">
                    <a href="">
                    <span className="tooltip-text">Testimonal</span>
                    <FontAwesomeIcon className="fontbordetr" icon={faListUl} />
                    </a>
                    </div>
              
                    <div className="tooltip-container">
                    <a href="">
                    <span className="tooltip-text">Contact</span>
                    <FontAwesomeIcon className="fontbordetr" icon={faEnvelopeOpenText} />
                    </a>
                    </div>
          
                </div>
            </div>
        </div>
    )
}

export default NavbarLinks
