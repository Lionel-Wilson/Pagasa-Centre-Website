import '../css/Card.css';
import pucci from '../static/images/pucci.jpeg';

function Card(props) {
  return (
    <div class="container-fluid">
        <div class="card text-bg-dark">
            <img src={pucci} class="card-img" alt=""></img>
            <div class="card-img-overlay position-absolute top-50 start-50 translate-middle">
                <h1 class="card-title text-center">{props.main_text}</h1>
                <h4 class="card-text text-center">{props.sub_text}</h4>
                <div class="text-center">
                    <button class="btn btn-light btn-lg " type="button">{props.button_text}</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
