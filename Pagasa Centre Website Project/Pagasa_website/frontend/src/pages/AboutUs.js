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
        <div className='px-5 py-5 mb-5'>
            <p className='text-center display-4 fw-bold'>
                Block small heading text about Pag-asa Centre
                history, G12 vision, etc. Fill fill fill Fill fill fill Fill fill fill
                Fill fill fill Fill fill fill Fill fill fill Fill fill fill Fill fill fill Fill fill
                fill Fill fill fill Fill fill fill Fill fill fill Fill fill fill this space
                with text.
                fill Fill fill fill Fill fill fill Fill fill fill Fill fill fill this space
                with text.
                with text.
                fill Fill fill fill Fill fill fill Fill fill fill Fill fill fill this space
                with text.
                fill Fill fill fill Fill fill fill Fill fill fill Fill fill fill this space
                with text.
                with text.
            </p>
        </div>
        <SpecialCard cardtype="DOC AND SHAY LEADERS"/>
        <SpecialCard cardtype="GOSH LEADER"/>
        <Footer />
    </React.StrictMode>
  )
}

export default AboutUs
