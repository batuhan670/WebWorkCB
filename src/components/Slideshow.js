import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import IntroImg from "../assets/photo-1474631245212-32dc3c8310c6.jpg";


class Slideshow extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={IntroImg} alt="beschreibung"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={IntroImg} alt="beschreibung"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={IntroImg} alt="beschreibung"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default Slideshow