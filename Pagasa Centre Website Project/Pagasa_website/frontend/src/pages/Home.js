import React from 'react'
import Cardsection from '../components/Cards';
import SpecialCard from '../components/SpecialCards';
import Footer from '../components/Footer';

const pageStartSpace = (
  <>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </>
)


function Home() {
  return (
    <React.StrictMode>
        {pageStartSpace}
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


