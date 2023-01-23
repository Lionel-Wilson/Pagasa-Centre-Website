import '../css/Nav.css';
import pagasalogo from '../static/images/pagasa_logo.png';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container fluid className='px-5'>
          <Nav className="justify-content-start">
            <Navbar.Brand href="#home" >
                <img
                  src={pagasalogo}
                  width="180"
                  height="180"
                  className="d-inline-block align-top"
                  alt="Pagasa logo"
                />
            </Navbar.Brand>
          </Nav>
          <Nav className="Nav justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">ABOUT US</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">GALLERY</Nav.Link>
              </Nav.Item>
              <NavDropdown title="ARCHIVE" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">EVANGELIST NIGHT</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">BIBLE STUDY</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">CELL CELEBRATION</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="CELL GROUP" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">VIP</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">NEED A CELL</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">CELL LEADERS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="MINISTRY" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.2">MEDIA</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">CHILDREN’S MINISTRY</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">CREATIVE ARTS</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">WORSHIP</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">USHERING</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">PRODUCTION TEAM</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="EQUIPPING TRACK" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">REGISTRATION</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">TEACHERS LOUNGE</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">LIFE GUIDES</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
