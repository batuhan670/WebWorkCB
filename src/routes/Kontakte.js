import React from 'react'

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Forms from '../components/Forms';
import ScrollButton from "../components/ScrollButton";

export const Kontakte = () => {
  return (
    <div>

      <Navbar />
      <HeroImg2 heading="Kontakt" text="Rückmeldung innerhalb 24 Stunden." />
      <Forms />
      <Footer />
      <ScrollButton />
    </div>
  )
}
export default Kontakte