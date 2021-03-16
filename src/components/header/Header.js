import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import {Navbar, Nav} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="light" variant="light" className=''>
            <Navbar.Brand>
                <Link to='/'>
                    <div className='logo text-dark'>toHabit</div>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
                <Nav className='justify-content-end'>
                    <Link to="/login" className='mr-2'>Log In</Link>
                    <Link to="/login">Log Out</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;