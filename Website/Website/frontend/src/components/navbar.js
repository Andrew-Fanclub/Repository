import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import "../public/nav.css";
import "../routes/contact";

function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">AFCPlushies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="../routes/howWorks" className="navi">How it works</Nav.Link>
                            <span className="dots">&bull;</span>
                            <Nav.Link href="../routes/whoWe" className="navi">Who we are</Nav.Link>
                            <span className="dots">&bull;</span>
                            <Nav.Link href="../routes/contact" className="navi">Contact us</Nav.Link>
                            <span className="dots">&bull;</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;