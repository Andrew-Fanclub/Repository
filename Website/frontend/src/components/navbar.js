import '../public/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form , FormControl, Button, Container, Header, pullRight} from 'react-bootstrap';
import React, { Component } from 'react';

function Navigation(){
    return(
        <div className="navi">
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>React-Bootstrap</a>
                    </Navbar.Brand>
                        <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}>
                            Link1
                        </NavItem>
                        <NavItem eventKey={2}>
                            Link2
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            Link1
                        </NavItem>
                        <NavItem eventKey={2}>
                            Link1
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;