import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css"
import logo from "../../imges/logo_white-7.png"
const Navigation = () => {
    return (
        <Navbar expand="lg" className="fixed-top container-navbar">
        <Container>
            <Navbar.Brand href="#home"><img className='img-navbar' src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle className='bg-lght' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="underline" defaultActiveKey="#home" className="me-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                    <Nav.Link href="#blog">BLOG</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default Navigation