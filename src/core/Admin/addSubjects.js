import React, { useState } from 'react';
import Base from '../Base';

const AddSubjects = () => {

    const [values, setValues ] = useState({
        name: "",
        shortName: "",
        error: ""
    })

    const { name, shortName } = values;

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signup({firstName, lastName, email, password,phoneNumber})
            .then(data => {
                if(data.error){
                    setValues({
                        ...values,
                        error: data.error
                    })
                } else {
                    setValues({
                        ...values,
                        name: "",
                        shortName: ""
                    })
                }
            })
            .catch(setValues({...values, error:"Error insignup"}))
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
                    name= "name"
                    value ={name}
                    className="signin-input"
                    placeholder="Subject Name"
                    onChange={handleChange}
                ></input>
                <input 
                    type="text" 
                    name ="shortName"
                    value={shortName}
                    placeholder="subject short name"
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

export default AddSubjects