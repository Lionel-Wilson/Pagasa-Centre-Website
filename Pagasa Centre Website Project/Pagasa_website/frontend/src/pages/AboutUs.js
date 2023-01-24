import React from 'react'
import Cardsection from '../components/Cards';
import Footer from '../components/Footer';
import SpecialCard from '../components/SpecialCards';

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
function AboutUs(props) {
  return (
    <React.StrictMode>
        {pageStartSpace}
        <Cardsection  cardtype="ABOUT"/>
        <SpecialCard cardtype="GOSH LEADER"/>
        <SpecialCard cardtype="DOC AND SHAY LEADERS"/>
        <Footer />
    </React.StrictMode>
  )
}

export default AboutUs
