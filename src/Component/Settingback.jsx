import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/Settingback.css";
import  Waterwave from '../assets/videosbac/WaterWave.mp4'
const Settingback = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Setting Icon */}
      <div className="container">
        <div className="animation_setting" onClick={toggleOffCanvas}>
          <FontAwesomeIcon className="setting" icon={faGear} />
        </div>
      </div>

      {/* Offcanvas Sidebar */}
      <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasSettings" aria-labelledby="offcanvasSettingsLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" id='close-btn' onClick={toggleOffCanvas} aria-label="Close" style={{ filter: 'invert(1)', opacity: 1 }}></button>
        </div>
        <div className="offcanvas-body">
          <div className='container'>
            <div className='row'>
              <div className='color-configuration'>
              <h1 className='text-white'>Configuration</h1>
              <p className='text-white'>Color</p>
              <div className='d-flex color-combine'>
                <a href="" className='color1'></a>
                <a href="" className='color2'></a>
                <a href="" className='color3'></a>
                <a href="" className='color4'></a>
                <a href="" className='color5'></a>
                <a href="" className='color6'></a>
                <a href="" className='color7'></a>
                <a href="" className='color8'></a>
              </div>
              <div className='clickbackgroundchange'>
                   <h4 className='text-white'>Three Dimenstional Shape</h4>
                    <ul className='animation-effect'>
                      <li> <a href="">Earth Line Spare</a></li>
                      <li> <a href="">3D Abstract Balls</a></li>
                      <li> <a href="">Water Wave</a></li>
                      <li> <a href="">Liquid Way</a></li>
                      <li> <a href="">Solid Color</a></li>
                      <li> <a href="">Simple Strings</a></li>
                    </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};
export default Settingback
