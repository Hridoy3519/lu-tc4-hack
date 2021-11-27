import React from 'react';
import "./Navbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
// import logo from '../../../images/logo.png'
// import useAuth from '../../../hooks/useAuth';
// import { useLocation } from 'react-router';
// import { useHistory } from "react-router-dom";

const Header = () => {
    // const { user, logOut } = useAuth();
    // const location = useLocation();
    // const history = useHistory();
    // const handleLogOut = () => {
    //     logOut(location.pathname + location.hash, history);
    // }

    //fixed navbar
    const [isFixed, setIsFixed] = useState(false);

    window.addEventListener("scroll", function () {
        const scrollHeight = window.pageYOffset;
        const navHeight = 100;
        if (scrollHeight > navHeight) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    });

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

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/auctions">Auctions</Nav.Link>

                    {/* {
                        user.email ?
                            <Nav.Link className="text-center nav-btn" as={HashLink} to="/dashboard">DashBoard</Nav.Link> : ""
                    } */}

                    {
                        // user.email ? <Nav.Link className="text-center nav-btn" as={HashLink} to="/dashboard">{user.displayName}</Nav.Link> : ""
                    }

                    {
                        // user.email ? <Nav.Link className="text-center nav-btn" onClick={handleLogOut} >Log Out</Nav.Link>
                        //     : <Nav.Link className="text-center nav-btn" as={HashLink} to="/login">LogIn</Nav.Link>
                    }
                    <Nav.Link className="text-center primary-btn login-nav-btn" style={{ marginLeft: "15px" }} as={HashLink} to="/login">LogIn</Nav.Link>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;