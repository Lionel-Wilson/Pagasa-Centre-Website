import '../css/Nav.css';

function Nav() {
  return (
    <nav class="navbar">
      <a class="navbar-brand">
        <img src="../static/images/pagasa logo.png" width="100" height="100"></img>
      </a>
      
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Information</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Archive</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Bible Study</a>
            <a class="dropdown-item" href="#">Wildsons</a>
            <a class="dropdown-item" href="#">Cell Celebration</a>
            <a class="dropdown-item" href="#">SOL &amp; LifeClass</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cell Group</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">VIP</a>
            <a class="dropdown-item" href="#">Need a cell</a>
            <a class="dropdown-item" href="#">Cell Celebration</a>
            <a class="dropdown-item" href="#">Cell Leaders</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Students</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sunday School</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
