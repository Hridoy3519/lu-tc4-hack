import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Alert } from 'react-bootstrap';
import { FaRegEyeSlash, FaRegEye, FaGooglePlusSquare } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

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
        console.log(loginData.name);
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
            <div className="form-container">
                <div className="log-in-header">SignUp Form</div>
                <form >
                    <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnBlur} type="text" className="form-control" name="name" id="floatingName" placeholder="Name"/>
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnBlur} type="email" className="form-control" id="floatingEmail" name="email" placeholder="name@example.com" />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnBlur} type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnBlur} type="password" className="form-control" name="password2" id="floatingPassword" placeholder="Retype Password" />
                            <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>
                        <button onClick={handleLoginSubmit} className="btn-custom">SignUp</button>
                    </form>
                <div className="login">
                    Already Signed up ? <NavLink to="/login"> LogIn now</NavLink>
                </div>
                <div className="links">
                        <button onClick={handleGoogleSignIn} className="google">
                            <FaGooglePlusSquare /><span>Google</span>
                        </button>
                    </div>
            </div>
        </div>

    );
};

export default Register;