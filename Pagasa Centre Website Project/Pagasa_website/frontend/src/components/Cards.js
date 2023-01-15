import '../css/Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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
  var cardButton = buttonText.map(text => {
    return (
    <>
      <div className="mx-3 text-center">
        <Button class='btn text-center' variant="light" size="lg" type="button" ><p class="mb-0 fs-2 ">{text}</p></Button>
      </div>
    </>
    )
});


  if (props.cardtype === "CH_RCH"){
    titleText = "CH_RCH IS NOT COMPLETE WITHOUT U";
    subTitleText = "We invite you to participate in one of our cells and meetings so that you may be transformed through a special message that Jesus has for you.";
    cardImage = img3;
    buttonText = ["SUNDAY CELEBRATION","CELL GROUP", "CHILDREN'S MINISTRY", "WILDSONS"];
    cardButton = buttonText.map(text => {
      return (
      <>
        <div className="mx-3 text-center">
          <Button class='btn text-center' variant="light" size="lg" type="button" ><p class="mb-0 fs-2 ">{text}</p></Button>
        </div>
      </>
      )
  });
  }

  if (props.cardtype === "SCHOOL"){
    titleText = "LIFECLASS & SCHOOL OF LEADERS";
    subTitleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    cardImage = img4;
    buttonText = ["SIGN UP", "LOG IN"];
    cardButton = buttonText.map(text => {
      return (
      <>
        <div className="mx-3 text-center">
          <Button class='btn text-center' variant="light" size="lg" type="button" ><p class="mb-0 fs-2 ">{text}</p></Button>
        </div>
      </>
      )
  });
  }

  if (props.cardtype === "CONNECT"){
    titleText = "NEW HERE? CONNECT WITH US!";
    subTitleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    cardImage = img2;
    buttonText = ["CONNECT ME"];
    cardButton = buttonText.map(text => {
      return (
      <>
        <div className="mx-3 text-center">
          <Button class='btn text-center' variant="light" size="lg" type="button" ><p class="mb-0 fs-2 ">{text}</p></Button>
        </div>
      </>
      )
  });
  }

  if (props.cardtype === "QUESTIONS"){
    titleText = "ANY QUESTIONS?";
    subTitleText = "WE ARE HERE TO SERVE!";
    return (
      <>
        <Container fluid className='p-0'>
          <Card className="bg-white text-dark">
          <Card.Body className='d-flex align-items-center justify-content-center flex-column mb-0 py-5 ' >
              <Container fluid className='row'>
                <div className='col-sm-6'>
                  <Card.Title className='text-start display-1 fw-bold mb-0'>{titleText}</Card.Title>
                  <Card.Title className='text-start display-1 fw-bold mb-0'>{subTitleText}</Card.Title>
                  <br></br>
                  <Card.Subtitle className='text-start'><h4 className='mb-0 text-wrap'>Email: somename@fakememail.com</h4></Card.Subtitle>
                  <br></br>
                  <Card.Subtitle className='text-start'><h4 className='mb-0 text-wrap'> Phone: +44 7958 662 568</h4></Card.Subtitle>
                  <br></br>
                </div>
                <div className='col-sm-6'>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="name" placeholder="Enter your full name" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>EMAIL ADDRESS</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="PhoneNumber">
                    <Form.Label>PHONE NUMBER</Form.Label>
                    <Form.Control type="number" placeholder="Enter your phone number" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="PhoneNumber">
                    <Form.Label>MESSAGE</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control as="textarea" placeholder="Enter your phone number" />
                    </InputGroup>
                  </Form.Group>
                  

                  <Button variant="dark" type="submit">
                    SEND
                  </Button>
                </Form>
                </div>
              </Container>
          </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
  
  if (props.cardtype === "CONNECT"){
    titleText = "NEW HERE? CONNECT WITH US!";
    subTitleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    cardImage = img2;
    buttonText = ["CONNECT ME"];
    cardButton = buttonText.map(text => {
      return (
      <>
        <div className="mx-3 text-center">
          <Button class='btn text-center' variant="light" size="lg" type="button" ><p class="mb-0 fs-2 ">{text}</p></Button>
        </div>
      </>
      )
  });
  }

  if (props.cardtype === "LATEST PREACHING"){
    titleText = "LATEST PREACHING";
    subTitleText = "PREVIOUS MESSAGES";
    buttonText = ["SUBSCRIBE TO OUR YOUTUBE CHANNEL"];
    cardButton = buttonText.map(text => {
      return (
      <>
        <div className="mx-3 text-center button-text-container">
          <Button href="https://www.youtube.com/@PagasaCentre" target="_blank" class='btn text-center' variant="dark" size="lg" type="button" ><p class="mb-0 fs-2 ">{text}</p></Button>
        </div>
      </>
      )
  });
    return (
      <>
        <Container fluid className='p-0'>
          <Card className="bg-white text-dark">
          <Card.Body className='d-flex align-items-center justify-content-center flex-column mb-0 py-5 ' >
              <Container fluid className='row'>
                <div className='col-sm-7'>
                  <Card.Title className='text-center display-1 fw-bold mb-0'>{titleText}</Card.Title>
                  {/* latest preaching */} 
                  <div className='py-3 text-center'>
                    <iframe 
                    width="920" 
                    height="400" 
                    src="https://www.youtube.com/embed/GQdzqakLfBg" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen = "true">
                    </iframe>
                  </div>
                  
                  <div className='d-flex align-items-center justify-content-center '>
                    {cardButton}
                  </div>
                  <br></br>
                </div>
                <div className='col-sm-5'>
                  {/* PREVIOUS MESSAGES */} 
                  <Card.Title className='text-center display-3 fw-bold mb-0'>{subTitleText}</Card.Title>
                  <div className='d-flex flex-wrap justify-content-center py-3 text-center'>
                    <iframe className = "py-3 px-3" width="270" height="154" src="https://www.youtube.com/embed/m0RbiocBq2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className = "py-3 px-3" width="270" height="154" src="https://www.youtube.com/embed/KRSuDeZKc90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className = "py-3 px-3" width="270" height="154" src="https://www.youtube.com/embed/GQdzqakLfBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className = "py-3 px-3" width="270" height="154" src="https://www.youtube.com/embed/gUbEA_I8-CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className = "py-3 px-3" width="270" height="154" src="https://www.youtube.com/embed/l-InZfgxr4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className = "py-3 px-3" width="270" height="154" src="https://www.youtube.com/embed/GQdzqakLfBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </div>
              </Container>
          </Card.Body>
          </Card>
        </Container>
      </>
    )
  }

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
