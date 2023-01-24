import React from 'react'
import Navigation from '../components/Nav';
import Cardsection from '../components/Cards';
import SpecialCard from '../components/SpecialCards';
import Footer from '../components/Footer';
  
function Home() {
  return (
    <React.StrictMode>
        <Navigation />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Cardsection/>
        
        <Cardsection  cardtype="CONNECT"/>

        <Cardsection cardtype="CH_RCH"/>

        <SpecialCard cardtype="LATEST PREACHING"/>

        <Cardsection cardtype="SCHOOL"/>

        <SpecialCard cardtype="QUESTIONS"/>

        <Footer />

  </React.StrictMode>
  )
}

export default Home;


