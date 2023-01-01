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
        <Container fluid>
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
          <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">INFORMATION</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">GALLERY</Nav.Link>
              </Nav.Item>
              <NavDropdown title="ARCHIVE" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">BIBLE STUDY</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">WILDSONS</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">CELL CELEBRATION</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">SOL &amp; LIFECLASS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="CELL GROUP" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">VIP</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">NEED A CELL</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">CELL LEADERS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="STUDENTS" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">REGISTRATION</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">TEACHERS LOUNGE</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">LIFE GUIDES</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link eventKey="link-2">SUNDAY SCHOOL</Nav.Link>
              </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
