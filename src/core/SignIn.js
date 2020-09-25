import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { signin, authenticate } from './Backend/auth';
import Base from './Base';
import './css/signinup.css';

const SignIn = () => {
    const [values, setValues ] = useState({
        email: "vipulwaghmare222@gmail.com",
        password: "12345678",
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
                } else {
                    authenticate(data, ()=>{
                        setValues({
                            ...values
                        })
                    })
                }
            }).catch(setValues({
                ...values,
                error: "Sign in request failed"
            }))
    }

    const errorMessage = () => {
        return(
            error && <div>{error}</div>
        )
    }

    return(
        <Base>
        <div className="signin-main">
        <div className="signin-div">
            Sign in with your email and password
            <div>{errorMessage()}</div>
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