import React, { Component } from 'react';
import "./SlideshowStyles.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Img1 from "../assets/Focus.png"
import Img2 from "../assets/Dreams.jpg"
import Img3 from "../assets/Teamworkbild.jpg"


class Slideshow extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>
                <div className='slideImg'>
                    <img src={Img1} alt="FOCUS" />

                </div>
                <div>
                    <img src={Img2} alt="DREAMS" />

                </div>
                <div>
                    <img src={Img3} alt="TEAMWORK" />

                </div>
            </Carousel>
        );
    }
};

export default Slideshow