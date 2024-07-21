import React from 'react'
import './TopBar.css'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from '../../assets/logo.png'

const TopBar = () => {
    return (<div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"> <img src={Logo} alt="Logo" className="logo"
                                                 style={{
                                                     width: "100%", height: "100%", objectFit: 'cover'
                                                 }}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                            Home
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>)
}
export default TopBar
