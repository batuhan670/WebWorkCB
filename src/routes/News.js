import React from 'react'

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
import ScrollButton from "../components/ScrollButton";

export const News = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="NEWS und PROJEKTE." text="we create the future" />
      <Work />
      <Footer />
      <ScrollButton />


    </div>
  )
}
export default News