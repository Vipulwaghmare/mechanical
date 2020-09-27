import React, { useState } from 'react';
import { API } from '../../backend';
import Base from '../Base';

const AddEse = () => {

    const [values, setValues ] = useState({
        year: "",
        error: "",
        success: ""
    })

    const { year, error, success } = values;

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const AddYear = subject => {
        return fetch(`${API}/addEse`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(subject)
        })
        .then(response => {
            return response.json()
        })
        .catch(error=> console.log(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        AddYear({year})
            .then(data => {
                if(data.error){
                    setValues({
                        ...values,
                        error: data.error
                    })
                } else {
                    setValues({
                        ...values,
                        year: '',
                        error: '',
                        success: ''
                    })
                }
            })
            .catch(setValues({...values, error:"Cant add year"}))
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
            <div className="successMessage">
            {success}
            </div>
        )
    }

    return(
        <Base>
        <div className="signin-main">
            <div className="signin-div">
                Add Year
                <div> 
                {errorMessage()}
                {successMessage()}
                </div>
                <form className="signin-form">
                <input 
                    type="text" 
                    name= "year"
                    value ={year}
                    className="signin-input"
                    placeholder="Ese Year"
                    onChange={handleChange}
                ></input>
                <input 
                    onClick={handleSubmit}
                    type="submit"
                    className="signin-input signin-submit"
                ></input>
                </form>
                </div>
            </div>
        </Base>
    )
}

export default AddEse;