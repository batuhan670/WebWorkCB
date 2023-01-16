import React from 'react'
import "./WorkerStyles.css"


const Worker = (props) => {
    return (
        <div className="worker-container">
            <img src={props.avatar} alt="Mitarbeiterfoto" className='workerIMG' />
            <div>
                <p className="worker-heading"> Vorname: {props.first_name}</p>
                <p>Nachname: {props.last_name}</p>
                <p className='emailWorker'>Email: {props.email}</p>
            </div>
        </div>
    )
}


export default Worker