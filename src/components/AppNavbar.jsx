import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';



function AppNavbar(props) {
    return (
            <Navbar expand="lg" className="bg-dark" >
              <Container fluid>
                <Navbar.Brand href="" className ="text-white text-decoration-none pr-20">Notes App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler text-white"/>
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1" className="text-white text-decoration-none">Home</Nav.Link>
                    <Nav.Link href="#action1" className="text-white text-decoration-none">About</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )
}

export default AppNavbar;