import React from 'react';
import "./Navbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    const handleLogOut = () => {
        logout();
    }

    return (
        <Navbar fixed='top' expand="lg"
            className="custom-nav">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="logo-div">
                            {/* <img src={logo} alt="" /> */}
                        </div>
                        <h4 className="brand-name"> Aqua Ticking</h4>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/">Home</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/auctions">All Auctions</Nav.Link>


                    {
                        user.email ? <Nav.Link className="text-center nav-btn" as={HashLink} to="/dashboard">Dashboard</Nav.Link> : ""
                    }
                    {
                        user.email ? <Nav.Link className="text-center nav-btn" as={HashLink} to="/dashboard">{user.displayName}</Nav.Link> : ""
                    }

                    {
                        user.email ? <Nav.Link className="text-center nav-btn" onClick={handleLogOut} >Log Out</Nav.Link>
                            : <Nav.Link className="text-center primary-btn login-nav-btn" style={{ marginLeft: "15px" }} as={HashLink} to="/login">LogIn</Nav.Link>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;