import '../css/Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Cardsection(props) {
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
            <Button className='text-center' variant="light" size="lg">{props.button_text}</Button>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Cardsection;
