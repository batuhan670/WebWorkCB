import React from 'react'
import "./WorkerStyles.css"


const Worker = (props) => {
    return (
        <div className="worker-container">
            <h1 className="worker-heading">{props.first_name} {props.first_name}</h1>
            <img src={props.avatar} alt="Mitarbeiterfoto" />
            <p>Email: {props.email}</p>
        </div>
    )
}


export default Worker