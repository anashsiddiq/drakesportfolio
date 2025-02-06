import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/SelfIntroduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
const SelfIntroduction = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='intro d-flex'>
                    <FontAwesomeIcon className='iconhome' icon={faHouseChimney} />
                    <h6>INTRODUCE</h6>
                </div>
                <div className='self-inntro'>
                    <h1>I'm  <span> Anash Siddiqui</span>, a passionate software developer specializing in web development.
                    </h1>
                </div>
                <div className='telldesign'>
                    <h4>"Good design is all about making things simple, elegant, and intuitive. As developers, we don’t just build functionality; we create experiences that not only work but also captivate."</h4>
                </div>
            </div>
        </div>
    )
}

export default SelfIntroduction
