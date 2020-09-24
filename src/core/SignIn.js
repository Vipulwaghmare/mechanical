import React from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';
import './css/signinup.css';

const SignIn = () => {
    return(
        <Base>
        <div className="signin-main">
        <div className="signin-div">
            Sign in with your email and password
            <form className="signin-form">
            <input 
                type="email" 
                placeholder="Email"
                className="signin-input"
            ></input>
            <input 
                type="password" 
                placeholder="Password" className="signin-input"
            ></input>
            <input 
                type="submit"
                className="signin-input signin-submit"
            ></input>
            </form>
        </div>
        <p className="signin-p">Don't have an account yet? <Link to="/signup" className="">Sign up</Link></p>
        </div>
        </Base>
    )
}

export default SignIn