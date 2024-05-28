import { useRef } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    const navbarRef = useRef(null);

    const handleLinkClick = () => {
        if (navbarRef.current) {
            navbarRef.current.classList.remove('show');
        }
    };

    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark">
            <Container>
                <Navbar.Brand href="#">
                    <Image src={require('../Component/Images/Solar-logo.png')} style={{ width: '75px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" ref={navbarRef}>
                    <Nav className="me-auto my-2 my-lg-0 mx-5" style={{ maxHeight: '80px' }} navbarScroll>
                        <Link className='nav-link' to="/" style={{ paddingInline: '35px' }} onClick={handleLinkClick}>Home</Link>
                        <Link className='nav-link' to="/pastprojects" style={{ paddingInline: '35px' }} onClick={handleLinkClick}>Past Projects</Link>
                        <Link className='nav-link' to="/overview" style={{ paddingInline: '35px' }} onClick={handleLinkClick}>Overview</Link>
                        <Link className='nav-link' to="/contactus" style={{ paddingInline: '35px' }} onClick={handleLinkClick}>Contact Us &#128222;</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
