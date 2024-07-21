import React from 'react'
import './TopBar.css'
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from '../../assets/logo.png'

const TopBar = () => {
    return (<div>
        <Navbar expand="lg" className="bg-transparent shadow-sm ">
            <Container>
                <Navbar.Brand href="#home"> <img src={Logo} alt="Logo" className="logo"
                                                 style={{
                                                     width: "100%", height: "100%", objectFit: 'cover'
                                                 }}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
                        <Nav.Link href="#home" className='text-secondary fw-bold'>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#home" className='text-secondary fw-bold'>
                            About Us
                        </Nav.Link>
                        <Nav.Link href="#home" className='text-secondary fw-bold'>
                            Contact
                        </Nav.Link>
                        <Nav.Link href="#home" className='text-secondary fw-bold'>
                            Testimonials
                        </Nav.Link>
                        <Nav.Link href="#home" className='text-secondary fw-bold text-decoration-none border-0'>
                            <Button size='sm' className=' bg_login fw-bold text-decoration-none'>Login</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>)
}
export default TopBar
