import '../css/Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from '../static/images/pag-test-img-1.jpg';
import img2 from '../static/images/pag-test-img-2.jpg';
import img3 from '../static/images/pag-test-img-3.jpg';
import img4 from '../static/images/pag-test-img-4.jpg';

function Cardsection(props) {
  //HOME PAGE CARDS 
  var titleText = "WELCOME TO PAG-ASA CENTRE";
  var subTitleText = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some more text to make it overflow";
  var cardImage = img1;
  var buttonText = ["JOIN SERVICE"];

  if (props.cardtype === "CH_RCH"){
    titleText = "CH_RCH IS NOT COMPLETE WITHOUT U";
    subTitleText = "We invite you to participate in one of our cells and meetings so that you may be transformed through a special message that Jesus has for you.";
    cardImage = img3;
    buttonText = ["SUNDAY CELEBRATION","CELL GROUP", "CHILDREN'S MINISTRY", "WILDSONS"];
  }

  if (props.cardtype === "SCHOOL"){
    titleText = "LIFECLASS & SCHOOL OF LEADERS";
    subTitleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    cardImage = img4;
    buttonText = ["SIGN UP", "LOG IN"];
  }

  if (props.cardtype === "CONNECT"){
    titleText = "NEW HERE? CONNECT WITH US!";
    subTitleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    cardImage = img2;
    buttonText = ["CONNECT ME"];
  }
  
  if (props.cardtype === "CONNECT"){
    titleText = "NEW HERE? CONNECT WITH US!";
    subTitleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    cardImage = img2;
    buttonText = ["CONNECT ME"];
  }

  //create buttons
  var cardButton = buttonText.map(text => {
    return (
    <>
      <div className="mx-3 text-center">
        <Button class='btn text-center' variant="light" size="lg" type="button" ><p class="mb-0 fs-2 ">{text}</p></Button>
      </div>
    </>
    )
});

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={cardImage}/>
        <Card.ImgOverlay className='bg-overlay d-flex align-items-center justify-content-center flex-column mb-3 ' >
          <Card.Title className='text-center display-1 fw-bold mb-0'>{titleText}</Card.Title>
          <br></br>
          <div className='cards-subtitle-container'>
            <Card.Subtitle className='text-center'><h4 class='mb-0 text-wrap'>{subTitleText}</h4></Card.Subtitle>
          </div>
          <br></br>
          
          <div className='d-flex align-items-center justify-content-center '>
            {cardButton}
          </div>
        </Card.ImgOverlay>
      </Card> 
    </>
  )
}

export default Cardsection;
