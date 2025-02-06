import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Mystatus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faXTwitter,faInstagram,faGithub,} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import DrakeLogo from '/src/assets/Image/logo.png';
import Mypics from '/src/assets/Image/Mypic.jpeg'
const Mystatus = () => {
    return (
        <div>
            <div id="home" className="container">
                <div className="borderstyles">
                    <div className="drakestyle">
                        <img src={DrakeLogo} />
                        <span className="text-white">Sofware Engineer <br />  Developer &amp; Designer</span>
                    </div>
                    <div className="picimage">
                        <img src={Mypics} alt="" srcset="" />
                    </div>
                    <div className="aboutinfo">
                        <h5 className="text-white">anashsiddiqui1998@gmail.com</h5>
                        <h4 className="text-white">Based in Los Angeles, CA</h4>
                    </div>
                    <div className="copyright">
                      <h6>© 2025 Drake. All Rights Reserved</h6>
                    </div>
                    <div className="socialitems">
                     <ul>
                        <li><FontAwesomeIcon icon={faFacebookF}/></li>
                        <li><FontAwesomeIcon icon={faXTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram}/></li>
                        <li><FontAwesomeIcon icon={faGithub}/></li>
                     </ul>
                    </div>
                    <div className="hirebutton">
                     <FontAwesomeIcon className="hire-icon" icon={faEnvelope} />
                      <button  className="hire-link">Hire Me!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mystatus
