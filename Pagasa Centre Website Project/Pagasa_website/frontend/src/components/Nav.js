import '../css/Nav.css';
import pagasalogo from '../static/images/pagasa_logo.png';

function Nav() {
  return (
    <nav class="navbar">
      <a class="navbar-brand">
        <img src={pagasalogo} width="100" height="100"></img>
      </a>
      
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link fw-semibold " href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-semibold" href="#">INFORMATION</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-semibold" href="#">GALLERY</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-semibold" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">ARCHIVE</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">BIBLE STUDY</a>
            <a class="dropdown-item" href="#">WILDSONS</a>
            <a class="dropdown-item" href="#">CELL CELEBRATION</a>
            <a class="dropdown-item" href="#">SOL &amp; LIFECLASS</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link dropdown-toggle fw-semibold" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">CELL GROUP</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">VIP</a>
            <a class="dropdown-item" href="#">NEED A CELL</a>
            <a class="dropdown-item" href="#">CELL LEADERS</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-semibold" href="#">STUDENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-semibold" href="#">SUNDAY SCHOOL</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
