import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { signin } from './Backend/auth';
import Base from './Base';
import './css/signinup.css';

const SignIn = () => {
    const [values, setValues ] = useState({
        email: "",
        password: "",
        error: ''
    })

    const { email, password, error } = values;

    const handleChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        signin({email, password})
            .then(data=> {
                if(data.error){
                    setValues({
                        ...values,
                        error: data.error
                    })
                }
            }).catch(setValues({
                ...values,
                error: "Error in logging in"
            }))
    }

    return(
        <Base>
        <div className="signin-main">
        <div className="signin-div">
            Sign in with your email and password
            <form className="signin-form">
            <input 
                type="email" 
                name="email"
                value={email}
                placeholder="Email"
                className="signin-input"
                onChange={handleChange}
                required
            ></input>
            <input 
                type="password" 
                name="password"
                value={password}
                placeholder="Password" 
                className="signin-input"
                onChange={handleChange}
                required
            ></input>
            <input 
                type="submit"
                className="signin-input signin-submit"
                onClick={handleSubmit}
            ></input>
            </form>
        </div>
        <p className="signin-p">Don't have an account yet? <Link to="/signup" className="">Sign up</Link></p>
        </div>
        </Base>
    )
}

export default SignIn