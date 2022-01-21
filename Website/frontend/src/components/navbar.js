import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import "../public/nav.css";

function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">AFCPlushies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features" className="navi">How it works</Nav.Link>
                            <span className="dots">&bull;</span>
                            <Nav.Link href="#pricing" className="navi">Who we are</Nav.Link>
                            <span className="dots">&bull;</span>
                            <Nav.Link href="#pricing" className="navi">What we do</Nav.Link>
                            <span className="dots">&bull;</span>
                            <Nav.Link href="#pricing" className="navi">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;