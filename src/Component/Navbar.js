import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" className="navbar expand navbar-dark bg-dark" >
            
            <Container fluid>
                <Navbar.Brand href="#"><Image src={require('../Component/Images/Solar-logo.png')}style={{width:'75px'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 mx-5 "
                        style={{ maxHeight: '90px' }}
                        navbarScroll
                    >
                        <Link className='nav-link' to="/" style={{ paddingInline: '35px' }}>Home</Link >
                        <Link className='nav-link' to="#action1" style={{ paddingInline: '35px' }}>Past Projects</Link >
                        <Link className='nav-link' to="#action2" style={{ paddingInline: '35px' }}>Overview</Link >
                        <Link className='nav-link' to="/contactus" style={{ paddingInline: '35px' }}>Contact Us</Link >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;