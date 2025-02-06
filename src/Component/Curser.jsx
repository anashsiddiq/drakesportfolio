import React, {useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Curser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Curser = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
          setCursorPos({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
      return (
        <div>
          <div
            className={`custom-cursor ${hover ? 'hover' : ''}`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          ></div>
          <div 
            className="hover-element"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
          </div>
        </div>
      );
}

export default Curser
