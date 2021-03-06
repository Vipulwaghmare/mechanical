import React, { useState } from 'react';
import { API } from '../../backend';
import Base from '../Base';

const AddSubjects = () => {

    const [values, setValues ] = useState({
        name: "",
        shortName: "",
        subtopic1: "",
        subtopics: [],
        error: "",
        success: ""
    })

    const { name, shortName, error, subtopics, subtopic1, success } = values;

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const createSubject = subject => {
        return fetch(`${API}/create/subject`,{
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

    const handleSubtopic = (event) => {
        event.preventDefault()
        if(subtopic1 !== ""){
            subtopics.push(subtopic1)
            setValues({
                ...values,
                subtopic1: "",
                success: `${subtopic1} added as subtopic`,
                error: ""
            })
        } else {
            setValues({
                ...values,
                error: "Enter a subtopic",
                success: ""
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createSubject({name, shortName, subtopics})
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
                        shortName: "",
                        error: '',
                        success: ''
                    })
                }
            })
            .catch(setValues({...values, error:"Error insignup"}))
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
                Add Subject
                <div> 
                {errorMessage()}
                {successMessage()}
                </div>
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
                    type="text" 
                    name ="subtopic1"
                    value={subtopic1}
                    placeholder="Subtopic"
                    onChange={handleChange}
                    className="signin-input"
                >
                </input>
                <button 
                    onClick={handleSubtopic}
                    className="signin-input signin-submit"
                >
                    Add subtopic
                </button>
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

export default AddSubjects