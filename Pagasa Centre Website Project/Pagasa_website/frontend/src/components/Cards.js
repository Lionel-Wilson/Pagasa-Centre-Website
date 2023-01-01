import '../css/Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';


function Cardsection(props) {
  if (props.cardtype === "CH_RCH"){
    return (
      <>
          <Card className="bg-dark text-white">
            <Card.Img src={props.image}/>
            <Card.ImgOverlay className='d-flex align-items-center justify-content-center flex-column mb-3 ' >
              <Card.Title className='text-center display-1 fw-bold mb-0'>{props.main_text}</Card.Title>
              <br></br>

              <Card.Subtitle className='text-center'><h4 class='mb-0'>{props.sub_text}</h4></Card.Subtitle>
              <br></br>
              
              <div className='d-flex align-items-center justify-content-center '>
                <div className="mx-3 text-center">
                  <Button class='btn text-center' variant="light" size="lg" type="button" ><p class="mb-0 fs-2 ">{props.button_text}</p></Button>
                </div>
                <div className="mx-3 text-center">
                  <Button class='btn text-center' variant="light" size="lg" type="button"><p class="mb-0 fs-2 ">{props.button_text2}</p></Button>
                </div>
                <div className="mx-3 text-center">
                  <Button class='btn text-center' variant="light" size="lg" type="button"><p class="mb-0 fs-2 ">{props.button_text3}</p></Button>
                </div>
                <div className="mx-3 text-center">
                  <Button class='btn text-center' variant="light" size="lg" type="button"><p class="mb-0 fs-2 ">{props.button_text4}</p></Button>
                </div>
              </div>
            </Card.ImgOverlay>
          </Card> 
      </>
    )
  }
  if (props.cardtype === "SCHOOL"){
    return (
      <>
        <Card className="bg-dark text-white">
          <Card.Img src={props.image}/>
          <Card.ImgOverlay className='d-flex align-items-center justify-content-center flex-column mb-3 ' >
            <Card.Title className='text-center display-1 fw-bold'>{props.main_text}</Card.Title>
            <br></br>

            <Card.Subtitle className='text-center'><h4>{props.sub_text}</h4></Card.Subtitle>
            <br></br>
            
            <div className='d-flex align-items-center justify-content-center '>
              <div className="mx-3 text-center">
                <Button class='btn text-center' variant="light" size="lg" type="button"><p class="mb-0 fs-2 ">{props.button_text}</p></Button>
              </div>
              <div className="mx-3 text-center">
                <Button class='btn text-center' variant="light" size="lg" type="button"><p class="mb-0 fs-2 ">{props.button_text2}</p></Button>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </>
    )
  }
  if (props.cardtype === "QUESTIONS"){
    return (
      <>
        <Container fluid className='p-0'>
          <Card className="bg-white text-dark">
          <Card.Body className='d-flex align-items-center justify-content-center flex-column mb-0 py-5 ' >
              <Container fluid className='row'>
                <div className='col-sm-6'>
                  <Card.Title className='text-start display-1 fw-bold mb-0'>{props.main_text}</Card.Title>
                  <br></br>
                  <Card.Subtitle className='text-start'><h4 className='mb-0 text-wrap'>{props.sub_text}</h4></Card.Subtitle>
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

                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>MESSAGE</Form.Label>
                    <Form.Control type="message" placeholder="Message" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
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
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={props.image}/>
        <Card.ImgOverlay className='d-flex align-items-center justify-content-center flex-column mb-3 ' >
          <Card.Title className='text-center display-1 fw-bold mb-0'>{props.main_text}</Card.Title>
          <br></br>

          <Card.Subtitle className='text-center'><h4 className='mb-0 text-wrap'>{props.sub_text}</h4></Card.Subtitle>
          <br></br>

          <div class="text-center">
            <Button className='btn text-center' variant="light" size="lg" type="button"><p class="mb-0 fs-2 ">{props.button_text}</p></Button>
          </div>
        </Card.ImgOverlay>
      </Card>
      
    </>
  )
  
}

export default Cardsection;
