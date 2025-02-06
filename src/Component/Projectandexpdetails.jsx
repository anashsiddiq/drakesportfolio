import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Projectandexpdetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Aos from 'aos';

const Projectandexpdetails = () => {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div className='container'>
            <div className="row">
                <div className='aboutexp' data-aos="flip-left">
                    <h4>2</h4>
                    <FontAwesomeIcon className='styleplus' icon={faPlus} />
                    <p>Year Of experience</p>
                </div>

                <div className='Company' data-aos="flip-right">
                    <h4>15</h4>
                    <FontAwesomeIcon className='styleplusagain' icon={faPlus} />
                    <p>Attempt Company Project</p>
                </div>
            </div>
        </div>

    )
}

export default Projectandexpdetails
