import "./WorkStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
    return (
        <div className="work-container">
            <h1 className="news-heading"></h1>
            <div className="news-container">
                <div className="news-card">
                    <img src={props.imgsrc} alt="image" />
                    <h2 className="news-titel">{props.titel}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to={props.view}
                                className="btn">Weiter</NavLink>
                            <NavLink to="/Kontakte"
                                className="btn">Kontaktieren</NavLink>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default WorkCard