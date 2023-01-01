import React from 'react'
import Navigation from '../components/Nav';
import Cardsection from '../components/Cards';
import img1 from '../static/images/pag-test-img-1.jpg';
import img2 from '../static/images/pag-test-img-2.jpg';
import img3 from '../static/images/pag-test-img-3.jpg';

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
        <Cardsection image={img1} main_text="WELCOME TO PAG-ASA CENTRE" sub_text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." button_text="JOIN SERVICE" />
        <br></br>
        <br></br>
        <br></br>
        <Cardsection image={img2} main_text="NEW HERE? CONNECT WITH US!" sub_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" button_text="CONNECT ME" />
        <br></br>
        <br></br>
        <br></br>
        <Cardsection cardtype="CH_RCH" image={img3} main_text="CH_RCH IS NOT COMPLETE WITHOUT U" sub_text="We invite you to participate in one of our cells and meetings so that you may be transformed through a special message that Jesus has for you." 
        button_text="SUNDAY CELLEBRATION" button_text2="CELL GROUP" button_text3="CHILDREN'S MINISTRY" button_text4="WILDSONS" />
        <br></br>
        <br></br>
        <br></br>
        <Cardsection cardtype="SCHOOL" image={img3} main_text="LIFECLASS & SCHOOL OF LEADERS" sub_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
        button_text="SIGN UP" button_text2="LOGIN" />
  </React.StrictMode>
  )
}

export default Home;


