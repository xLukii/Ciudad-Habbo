import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./Header.css";
import Logo from './chlogo.png';

class Header extends React.Component {
     render() {
          return(
               <header>
                    <Container>
                         <Row>
                             <Col>
                                   <Link to="/">
                                        <img src={Logo} alt="Ciudad Games" height="95" width="150" />
                                   </Link>
                              </Col>
                         </Row>
                    </Container>

                    <Navbar bg="light" expand="sm" sticky="top">
                         <Container>
                              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                              
                              <Navbar.Collapse id="basic-navbar-nav">
                                   <Nav className="mr-auto">
                                        <Nav.Item>
                                             <Link to="/" className="nav-link">Inicio</Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                             <Link to="/hoteles" className="nav-link">Hoteles</Link>
                                        </Nav.Item>
                                   </Nav>
                              </Navbar.Collapse>
                         </Container>
                    </Navbar>
               </header>
          )
     }
}

export default Header;