import React from 'react'
import Navigation from '../components/Nav';
import Cardsection from '../components/Cards';
import SpecialCard from '../components/SpecialCards';
import Footer from '../components/Footer';

//6 line breaks
const space = (
    <>
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
        {space}
        <Cardsection  cardtype="CONNECT"/>
        {space}
        <Cardsection cardtype="CH_RCH"/>
        {space}
        <SpecialCard cardtype="LATEST PREACHING"/>
        {space}
        <Cardsection cardtype="SCHOOL"/>
        {space}
        <SpecialCard cardtype="QUESTIONS"/>
        {space}
        {space}
        {space}
        <Footer />

  </React.StrictMode>
  )
}

export default Home;


