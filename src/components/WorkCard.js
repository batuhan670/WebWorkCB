import "./WorkCardStyles.css"

import React from 'react'
import pro1 from "../assets/istockphoto-1364358321-170667a.jpg"
import { NavLink } from "react-router-dom"

const WorkCard = () => {
return(
    <div className="work-container">
        <h1 className="news-heading"></h1>
        <div className="news-container">
            <div className="news-card">
                <img src={pro1} alt="image"/>
                <h2 className="news-titel">News Titel</h2>
                <div className="pro-details">
                    <p>this is text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com"
                        className="btn">Weiter</NavLink>
                         <NavLink to=""
                        className="btn">Kontaktieren</NavLink>
                    </div>
                
                </div>
            </div>
        </div>

    </div>
)
}


export default WorkCard