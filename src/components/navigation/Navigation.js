import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export class Navigation extends Component {
    
    render(){
        return(
            <Navbar bg="dark" expand="lg"> 
            <Navbar.Toggle aria-controls= "basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className = "d-inline p-2 bg-dark text-white" to="/sellers/new"> Sale Of Property</NavLink>
            <NavLink className = "d-inline p-2 bg-dark text-white" to="/buyers/new"> Purchasing Of Property</NavLink>
            <NavLink className = "d-inline p-2 bg-dark text-white" to="/buyers">List Of Investors</NavLink>
            <NavLink className = "d-inline p-2 bg-dark text-white" to="/sellers"> List Of Title Holders </NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}