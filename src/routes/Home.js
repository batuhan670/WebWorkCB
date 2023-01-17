import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import Slideshow from "../components/Slideshow";
import Work from '../components/Work';

const Home = () => {
    return (<div>
        <Navbar />
        <HeroImg />
        <Slideshow />
        <Work />
        <Footer />
        <ScrollButton />
    </div>
    )
}
export default Home