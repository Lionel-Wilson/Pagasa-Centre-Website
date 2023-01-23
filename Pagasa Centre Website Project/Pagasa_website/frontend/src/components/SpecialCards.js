import '../css/Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SpecialCard(props) {
    var titleText = "";
    var subTitleText = "";
    var buttonText = [];
    //create buttons
    var cardButton;
    
    //Question form
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
    //Youtube embedments 
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
  }

export default SpecialCard;