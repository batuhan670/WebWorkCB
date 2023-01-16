import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import Slideshow from "../components/Slideshow";

const Home = () => {
    return (<div>
        <Navbar/>
        <HeroImg/>
        <Slideshow/>    
        <Footer/>
        <ScrollButton/>
    </div>
    )
}
export default Home