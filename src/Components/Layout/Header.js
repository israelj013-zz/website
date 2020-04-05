import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from './IJ.png'

function Header() {
    return (
        <Navbar bg="light" expand="lg">

            <Navbar.Brand href="/website">
                <img classname="logo" src={Logo} alt="logo" height="50"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavDropdown title="Projects" href="/website/projects" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Project</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another Project</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Some Other Project</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/website/projects">Bio</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header;