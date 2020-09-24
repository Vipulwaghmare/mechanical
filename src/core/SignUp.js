import React, { useState } from 'react';
import Base from './Base';
import './css/signinup.css';
import {Link} from 'react-router-dom';
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
        success: ""
    })

    const { firstName, lastName, email, password, password2, phoneNumber, error, success } = values;

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
                    if(false){
                        setValues({
                            ...values,
                            error: data.error
                        })
                    } else {
                        setValues({
                            ...values,
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            password2: "",
                            phoneNumber: "",
                            error: "",
                            success: true,
                        })
                    }
                })
                .catch(setValues({...values, error:"Error in signup"}))
        }
    }

    const errorMessage = (event) => {
        return(
            <div>
            {error}
            </div>
        )
    }

    return(
        <Base>
        <div className="signin-main">
            <div className="signin-div">
                Sign up with your email and password
                <div className="test"> {errorMessage()} </div>
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
        </Base>
    )
}

export default SignUp