import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/photo-1474631245212-32dc3c8310c6.jpg";
import { Link } from "react-router-dom";

const heroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
             </div>
            <div className="content">
                <p>Willkommen bei</p>
                <h1>WebWork.</h1>
                <div>
                    <Link to="/news" className = "btn">News</Link>
                    <Link to="/kontakte" className = "btn btn-light">Kontakt</Link>
                </div>
            </div>

       
    </div>
  )
}

export default heroImg