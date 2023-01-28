import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import pagasalogo from '../static/images/pagasa_logo.png';

function PictureandName() {
    var personImg = pagasalogo;
    var personDetails = [
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
        "Name & Contact",
    ];
    //create grid
    var grid = personDetails.map(person => {
        return (
        <>
        <div className="d-flex flex-column ">
        <img
                src={personImg}
                width="110"
                height="110"
                className="mb-3 mx-3"
                alt="Pagasa logo"
            />
        <p className='text-center fw-bold'>{person}</p>
        </div>
        
        </>
        )
    });
    return (
    <Container className="d-flex flex-row flex-wrap justify-content-between mb-5">
        {grid}
    </Container>
  )
}

export default PictureandName