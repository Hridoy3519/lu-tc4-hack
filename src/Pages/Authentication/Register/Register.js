import React, { useState } from 'react';
import './Register.css';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Alert } from 'react-bootstrap';
import { FaRegEyeSlash, FaRegEye, FaGooglePlusSquare } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import Header from '../../Shared/Navbar/Navbar';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        loginData.name = loginData.fname.concat(" ",loginData.lname)
        registerUser(loginData.email, loginData.phone, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
        <Header></Header>
        <div style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center bg margin">
            <div className="form-container">
                <div className="log-in-header">Sign Up</div>
                <form >
                    <div className="d-flex justify-content-between">
                    <div className="form-floating mb-3 me-1 w-100 shadow-sm">
                        <input onChange={handleOnBlur} type="text" className="form-control" name="fname" id="floatingName" placeholder="Name" required />
                        <label htmlFor="floatingName">First Name</label>
                    </div>
                    <div className="form-floating mb-3 ms-1 w-100 shadow-sm">
                        <input onChange={handleOnBlur} type="text" className="form-control" name="lname" id="floatingName" placeholder="Name" required />
                        <label htmlFor="floatingName">Last Name</label>
                    </div>
                    </div>
                    <div className="form-floating mb-3 shadow-sm">
                        <input onChange={handleOnBlur} type="text" className="form-control" name="phone" id="floatingName" placeholder="Phone Number" required />
                        <label htmlFor="floatingName">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3 shadow-sm">
                        <input onChange={handleOnBlur} type="email" className="form-control" id="floatingEmail" name="email" placeholder="name@example.com" required />
                        <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3 shadow-sm">
                        <input onChange={handleOnBlur} type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3 shadow-sm">
                        <input onChange={handleOnBlur} type="password" className="form-control" name="password2" id="floatingPassword" placeholder="Retype Password" required />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <button onClick={handleLoginSubmit} className="btn-custom">SignUp</button>
                    <div className="mt-3">
                        Already have an account? <NavLink to="/login">Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
</>
    );
};

export default Register;