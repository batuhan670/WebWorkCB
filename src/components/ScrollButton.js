import React from 'react'
import {  FaArrowAltCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  return (
        <FaArrowAltCircleUp size={'3rem'} style={{
            position:'fixed',
            bottom: '2rem',
            right: '2rem'
            }                
        } onClick={() => {
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
                });
        }}/>
  )
}

export default ScrollButton