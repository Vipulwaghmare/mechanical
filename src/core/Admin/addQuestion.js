import React, { useState, useEffect} from 'react';
import { API } from '../../backend';
import { getEseYears } from '../Backend/ese';
import { getGateYears } from '../Backend/gate';
import Base from '../Base';
import '../css/addQuestion.css'

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
        gateYear: '', // to store selected value
        eseYear: '', // to store selected value
        gateYears: [], // to store all year list
        eseYears: [], // to store all year list
        allGateYears: [], // imported from db to select
        allEseYears: [], // imported from db to select
        error: '',
        success: '',
        formData: new FormData()
    })

    // destructing values for ease
    const { question, a, b, c, d, correct_option, ans, gateYear, eseYear, gateYears, eseYears, error, success, formData, allGateYears, allEseYears } = values;

    // saving years for selection
    useEffect(()=>{
        getGateYears().then(data => {
            data.map(x => allGateYears.push(x))
        })
        getEseYears().then(data=> {
            data.map(x => allEseYears.push(x))
        })
    },[])

    // Input change
    const handleChange = event => {
        let { name, value } = event.target;
        if(event.name === "photo" || event.name === "answerPhoto"){
            value = event.target.files[0]
        }
        formData.set(name, value)
        setValues({
            ...values,
            [name] : value,
            error: '',
        })
    }

    const handleGateYears = (e) =>{
        e.preventDefault()
        if(gateYears.indexOf(gateYear) === -1){
            gateYears.push(gateYear)
            setValues({...values, gateYear:'', success: "Gate Year Added"})
        }
    }

    const handleEseYears = (e) => {
        e.preventDefault()
        if(eseYears.indexOf(eseYear) === -1 ){
            eseYears.push(eseYear)
            setValues({
                ...values,
                eseYear: "",
                success: "Ese year added"
            })
        }
    }

    const addquestion = (quest) => {
        return fetch(`${API}/addquestion`,{
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: quest
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
                    accept="image"
                    className="signin-input"
                    placeholder="Question Photo"
                    onChange={handleChange}
                ></input>

                <div className="add-year">
                Add Gate Year: 
                {gateYear}
                <select
                    name="gateYear"
                    onChange={handleChange}
                    placeholder="Gate Years"
                    >
                    <option>Select</option>
                        {allGateYears &&
                        allGateYears.map(gate => (
                        <option     
                            key={gate._id} 
                            value={gate.year}>
                        {gate.year}
                    </option>
                    ))}
                </select>
                <button onClick={handleGateYears}>
                Add
                </button>
                </div>
                <div className="add-year">
                Add ESE year:
                {eseYear}
                <select
                    name="eseYear"
                    onChange={handleChange}
                    placeholder="Ese Years"
                    >
                    <option>Select</option>
                        {allEseYears &&
                        allEseYears.map(ese => (
                        <option 
                            key={ese._id} 
                            value={ese.year}>
                        {ese.year}
                    </option>
                    ))}
                </select>
                <button
                    onClick={handleEseYears}
                    >
                Add
                </button>
                </div>
                
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
                    accept="image"
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