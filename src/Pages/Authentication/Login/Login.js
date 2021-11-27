import React, { useState } from 'react';
import './Login.css';
import { FaGooglePlusSquare, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {  loginUser, signInWithGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from?.pathname;

    const [showing, setShowing] = useState(false);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center bg">
                <div className="form-container">
                    {
                        path ?
                            <div className="log-in-header" style={{
                                fontSize: '25px',
                                color: "red"
                            }}>Please LogIn First</div>

                            : <div className="log-in-header">Login</div>
                    }
                   <form >
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnChange} type="email" className="form-control" id="floatingEmail" name="email" placeholder="name@example.com" />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input onChange={handleOnChange} type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button onClick={handleLoginSubmit} className="btn-custom">Login</button>
                    </form>
                    <div className="auth">
                        Or log in with
                    </div>
                    <div className="links">
                        <button onClick={handleGoogleSignIn} className="google">
                            <FaGooglePlusSquare /><span>Google</span>
                        </button>
                    </div>
                    <div className="signup">
                        Not a member?
                        <NavLink to={
                            {
                                pathname: '/register',
                                state: { from: path }
                            }
                        }> Signup now</NavLink>
                    </div>
                </div>
            </div>
    );
};

export default Login;