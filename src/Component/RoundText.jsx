import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/RoundText.css";
import RoundTextImage from '/src/assets/Image/round-text.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const RoundText = () => {
  return (
    <div className="container">
        <div className="row">
          <a href="#resume">
         <div className="round-circle">
          <img src={RoundTextImage} alt="" srcset="" />
          <FontAwesomeIcon className="arrowdown" icon={faArrowDown} />
         </div>
         </a>
        </div>
    </div>
  )
}

export default RoundText
