import React, { useState } from 'react';
import Base from './Base';
import './css/signinup.css';
import {Link, Redirect} from 'react-router-dom';
import { signup } from './Backend/auth';

const SignUp = () => {

    const [values, setValues ] = useState({
        firstName: "vipul",
        lastName: "waghmare",
        email: "vipulwaghmare222@gmail.com",
        password: "",
        password2: "",
        phoneNumber: "",
        error: "",
        success: "",
        didRedirect: false
    })

    const { firstName, lastName, email, password, password2, phoneNumber, error, success, didRedirect } = values;

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(password !== password2){
            setValues({...values, error: "Passwords doesn't match"})
        } else {
            signup({firstName, lastName, email, password, phoneNumber})
                .then(data => {
                    if(data.error){
                        setValues({
                            ...values,
                            error: data.error
                        })
                    } else {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    }
                })
                .catch(setValues({...values, error:"Error in signup"}))
        }
    }

    const errorMessage = (event) => {
        return(
            <div className="errorMessage">
            {error}
            </div>
        )
    }

    const successMessage = (event) => {
        return(
            success && <div className="successMessage">
                Signup successful
            </div>
        )
    }
    
    const handleRedirect = () => {
        if(didRedirect){
            return(
                <Redirect to="/signin" />
            )
        }
    }

    return(
        <Base>
        <div className="signin-main">
            <div className="signin-div">
                Sign up with your email and password
                <div> {errorMessage()} {successMessage()} </div>
                <form className="signin-form">
                <input 
                    type="text" 
                    name= "firstName"
                    value ={firstName}
                    className="signin-input"
                    placeholder="First Name"
                    onChange={handleChange}
                ></input>
                <input 
                    type="text" 
                    name ="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                    className="signin-input"
                ></input>
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={handleChange}
                    className="signin-input"
                ></input>
                <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password" 
                    className="signin-input"
                ></input>
                <input 
                    type="password" 
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                    placeholder="Enter Password Again" 
                    className="signin-input"
                ></input>
                <input 
                    type="number" 
                    name= "phoneNumber"
                    value={phoneNumber}
                    placeholder="Phone Number"
                    onChange={handleChange}
                    className="signin-input"
                ></input>
                <input 
                    onClick={handleSubmit}
                    type="submit"
                    className="signin-input signin-submit"
                ></input>
                </form>
            </div>
            <p className="signin-p">Already have an account? <Link to="/signin" className="">Log in</Link></p>
            </div>
            {handleRedirect()}
        </Base>
    )
}

export default SignUp