import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img2 from '../static/images/pag-test-img-2.jpg';
import img4 from '../static/images/pag-test-img-4.jpg';

function SimpleCard(props) {
    var cardImage = img2;
    var buttonText = ["I WANT TO SERVE"];
  
    if (props.cardtype === "VIP"){
      cardImage = img4;
      buttonText = ["CONNECT ME"];
    }
    //create buttons
    var cardButton = buttonText.map(text => {
        return (
        <>
        <div className="mx-3 text-center">
            <Button class='btn text-center' variant="light" size="lg" type="button" ><p class="mb-0 fs-2 fw-bold">{text}</p></Button>
        </div>
        </>
        )
    });

    return (
        <>
        <Card className="bg-dark text-white mb-6">
            <Card.Img src={cardImage}/>
            <Card.ImgOverlay className='bg-overlay d-flex align-items-center justify-content-end flex-column' >
            <div>
                {cardButton}
            </div>
            </Card.ImgOverlay>
        </Card> 
        </>
    )
}

export default SimpleCard
