import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";

const Home = () => {
    return (<div>
        <Navbar/>
        <HeroImg/>        
        <Footer/>
        <ScrollButton/>
    </div>
    )
}
export default Home