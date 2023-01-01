import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import pagasalogo from '../static/images/pagasa_logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
        <Container fluid className='row py-5 bg-black m-0'>
            <div className='col-sm-3'>
                <Nav className="justify-content-start">
                    <Navbar.Brand href="#home" >
                        <img
                        src={pagasalogo}
                        width="220"
                        height="220"
                        className="d-inline-block align-top"
                        alt="Pagasa logo"
                        />
                    </Navbar.Brand>
                </Nav>
            </div>

            <div className='col-sm-2 text-white'>
                <h4 className='text-center'>PAG-ASA CENTRE</h4>
                <p className='text-center'>OUR VISION</p>
                <p className='text-center'>HISTORY</p>
                <p className='text-center'>OUR PASTORS</p>

            </div>

            <div className='col-sm-2 text-white'>
                <h4 className='text-center'>GROW & DEVELOP</h4>
                <p className='text-center'>DAILY DEVOTION</p>
                <p className='text-center'>CELLS</p>
                <p className='text-center'>UNIVERSITY OF LIFE</p>
                <p className='text-center'>BAPTISM</p>
                <p className='text-center'>CONFERENCES</p>

            </div>

            <div className='col-sm-2 text-white'>
                <h4 className='text-center'>FIND US</h4>
                <p className='text-center'>LOCATIONS</p>
                <p className='text-center'>CONTACT US</p>

            </div>

            <div className='col-sm-3 text-white'>
            SOCIALS ICONS YOUTUBE, FACEBOOK INSTAGRAM, SPOTIFY

            </div>
            
        </Container>

        <Container fluid className='bg-black text-white'>
            <p className='text-center'>PAG-ASA CENTRE ALL RIGHTS RESERVED ETC.</p>
        </Container>
    </>
  )
}

export default Footer