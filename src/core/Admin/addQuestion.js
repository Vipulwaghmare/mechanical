import React, { useState } from 'react';
import { API } from '../../backend';
import Base from '../Base';

const AddQuestion = () => {

    const [values, setValues ] = useState({
        question: '',
        a: '',
        b: '', 
        c: '', 
        d: '',
        correct_option : '',
        ans: '',
        photo: '',
        answerPhoto: '',
        error: '',
        success: '',
        formData: new FormData()
    })

    const { question, a, b, c, d, correct_option, ans, error, success, formData } = values;

    const handleChange = event => {
        console.log(event.target)
        let { name, value } = event.target;
        if(event.name === "photo" || event.name === "answerPhoto"){
            value = event.target.files[0]
        }
        formData.set(name, value)
        setValues({
            ...values,
            [name] : value
        })
        console.log(formData)
    }

    const addquestion = (quest) => {
        return fetch(`${API}/addquestion`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quest)
        })
        .then(response => {
            return response.json()
        })
        .catch(error => console.log(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: ""})
        addquestion(formData).then(data => {
            if(data.error){
                setValues({
                    ...values,
                    error: data.error
                })
            } else {
                setValues({
                    ...values,
                    question: '',
                    a: '',
                    b: '', 
                    c: '', 
                    d: '',
                })
            }
        })
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
                Add Question 
                <div> 
                {errorMessage()}
                {successMessage()}
                </div>
                <form className="signin-form">
                <input 
                    type="text" 
                    name= "question"
                    value ={question}
                    className="signin-input"
                    placeholder="Question"
                    onChange={handleChange}
                ></input>
                <input 
                    type="file" 
                    name= "photo"
                    className="signin-input"
                    placeholder="Question Photo"
                    onChange={handleChange}
                ></input>
                <input 
                    type="text" 
                    name= "a"
                    value ={a}
                    className="signin-input"
                    placeholder="Option A"
                    onChange={handleChange}
                ></input>
                <input 
                    type="text" 
                    name= "b"
                    value ={b}
                    className="signin-input"
                    placeholder="Option B"
                    onChange={handleChange}
                ></input>
                <input 
                    type="text" 
                    name= "c"
                    value ={c}
                    className="signin-input"
                    placeholder="Option C"
                    onChange={handleChange}
                ></input>
                <input 
                    type="text" 
                    name= "d"
                    value ={d}
                    className="signin-input"
                    placeholder="Option D"
                    onChange={handleChange}
                ></input>
                <input 
                    type="text" 
                    name= "correct_option"
                    value ={correct_option}
                    className="signin-input"
                    placeholder="Correct Option"
                    onChange={handleChange}
                ></input>
                <input 
                    type="text" 
                    name= "ans"
                    value ={ans}
                    className="signin-input"
                    placeholder="Detailed Answer"
                    onChange={handleChange}
                ></input>
                <input 
                    type="file" 
                    name= "answerPhoto"
                    className="signin-input"
                    placeholder="Answer Photo"
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

export default AddQuestion;