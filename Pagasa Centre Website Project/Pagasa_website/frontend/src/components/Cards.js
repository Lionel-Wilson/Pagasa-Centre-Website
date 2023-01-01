import '../css/Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Cardsection(props) {
  if (props.cardtype === "CH_RCH"){
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
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={props.image}/>
        <Card.ImgOverlay className='d-flex align-items-center justify-content-center flex-column mb-3 ' >
          <Card.Title className='text-center display-1 fw-bold'>{props.main_text}</Card.Title>
          <br></br>
          <Card.Subtitle className='text-center'><h4>{props.sub_text}</h4></Card.Subtitle>
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
