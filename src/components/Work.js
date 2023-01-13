import "./WorkStyles.css"

import React from 'react'
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

const Work = () => {
return(
    <div className="work-container">
        <h1 className="news-heading"></h1>
        <div className="news-container">
            {WorkCardData.map((val, ind) =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc ={val.imgsrc}
                    titel = {val.title}
                    text = {val.text}
                    view={val.view}
                    />
                )
                })}
        
        </div>

    </div>
)
}


export default Work