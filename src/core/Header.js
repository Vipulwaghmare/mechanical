import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Calculator from './calculator/calculator';
import { isAuthenticated, signout } from './Backend/auth';

import { connect } from 'react-redux'
import { HIDECALCULATOR, HIDEPOMODORO } from './Redux/action';
import SmallCalculator from './calculator/smallCalculator';
import './css/pomodoro.css'

const Header = (props) => {
    const [time, setTime] = useState({
        date: new Date(),
        hour :new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds()
    })
    const [studyTime, setStudyTime] = useState('30')
    const [breakTime, setBreakTime] = useState('10')
    const [timeToBreak, setTimeToBreak] = useState(61)

    useEffect(()=>{
        setTimeout(()=>{
            updateTime()
        },1000)
        if(time.minute == timeToBreak){
            setTimeToBreak(61)
            alert(`You have studied for ${studyTime} minutes, 
            Take a break of ${breakTime} minutes and come back with fresh mind
            `)
        }
    })

    const updateTime = () => {
        setTime({
            hour :new Date().getHours().toLocaleString(),
            minute: new Date().getMinutes().toLocaleString(),
            second: new Date().getSeconds().toLocaleString()
        })
    }

    const calculator = () => {
        return(
            !props.hide_calculator && 
            <div>
            <div className="big-calc">
            <Calculator />
            </div>
            <div className="small-calc">
            <SmallCalculator />
            </div>
            </div>
        )
    }
    
    const handlePomoChange = (e) => {
        if(e.target.name === "study"){
            setStudyTime(e.target.value)
        }
        if(e.target.name === "break"){
            setBreakTime(e.target.value)
        }
    }

    const handlePomoSubmit = e => {
        e.preventDefault()
        let x = parseInt(time.minute)+ parseInt(studyTime)
        if(x< 60){
            setTimeToBreak(x)
        } else {
            setTimeToBreak(x - 60)
        }
    }

    const pomodoro = () => {
        return(
            !props.hide_pomodoro &&
            <div className="pomo-main">
            <h4 className="pomo-h4">Pomodoro Technique</h4>
            <span className="pomo-close"
                onClick={()=>props.hidepomodoro()}
            >x</span>
            <div className="pomo-section">
                <p className="pomo-title"> Study Time (min)</p>
                <input 
                    className="pomo-input"
                    type="radio" 
                    value="01"
                    onChange={handlePomoChange}
                    name="study"
                    defaultChecked
                    />30
                    
                <input
                    className="pomo-input"
                    type="radio" 
                    onChange={handlePomoChange}
                    name="study"
                    value="40"
                    /> 40
                <p className="pomo-title"> Break time (min)</p>
                <input 
                    className="pomo-input"
                    type="radio" 
                    onChange={handlePomoChange}
                    value="5"
                    name="break"
                    />5
                <input 
                    className="pomo-input"
                    name="break"
                    onChange={handlePomoChange}
                    type="radio" 
                    value="10"
                    defaultChecked
                    />10
                <input 
                    className="pomo-input"
                    name="break"
                    onChange={handlePomoChange}
                    type="radio"
                    value="15"
                    />15
                    
                    <br />
                <button 
                    className="pomo-submit"
                    onClick={handlePomoSubmit}
                    >
                Submit
                </button>
                <p>Pomodoro technique is studying for particular amount of time and taking a break for some time inbetween so keeping mind fresh and productive</p>
            </div>
        </div>
        )
    }


    // components 
    const SignIn = () => {
        return (!isAuthenticated() && 
            <li className="nav-li">
            <Link className="nav-link" to="/signin">
                Sign In
            </Link>
        </li>
        )
    }

    const SignUp = () => {
        return (
            !isAuthenticated() &&
                        <li className="nav-li">
                        <Link className="nav-link"  to="/signup">
                            Sign Up
                        </Link>
                    </li>
        )
    }

    const SignOut = () => {
        return (
            isAuthenticated() && 
                        <li className="nav-li">
                        <Link to="/signin" className="nav-link"
                            onClick={()=>{signout(()=>{})}} >
                            Sign Out
                        </Link>
                    </li>
        )
    }

    const AddSubject = () => {
        return(
            isAuthenticated() && 
            <li className="nav-li">
                    <Link className="nav-link" to="/addsubject">
                        Add Subject
                    </Link>
            </li>
        )
    }

    const AddGateYear = () => {
        return(
            isAuthenticated() && 
            <li className="nav-li">
                    <Link className="nav-link" to="/addgate">
                        Add Gate
                    </Link>
            </li>
        )
    }

    const AddEseYear = () => {
        return(
            isAuthenticated() && 
            <li className="nav-li">
                    <Link className="nav-link" to="/addese">
                        Add Ese
                    </Link>
            </li>
        )
    }

    const AddQuestion = () => {
        return(
            isAuthenticated() && 
            <li className="nav-li">
                    <Link className="nav-link" to="/addQuestion">
                        Add Question
                    </Link>
            </li>
        )
    }

    return(
        <header className="header">
            <div className="header-title">
                <Link to="/" className="nav-link">
                    Mechanical
                </Link>
            </div>
            <nav className="header-nav">
                <ul className="header-nav-ul">
                    <li className="nav-li">
                        <Link className="nav-link" to="/syllabus">
                            Syllabus
                    </Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/gate">
                            Gate
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/ese">
                            ESE
                        </Link>
                    </li>
                    <SignUp />
                    <SignIn />
                    <SignOut />
                    <AddSubject />
                    <AddGateYear />
                    <AddEseYear />
                    <AddQuestion />
                    <button 
                        onClick={()=>props.hidecalculator()}
                        className="calc-button"
                    >
                        Calculator
                    </button>
                    <button 
                        onClick={()=> props.hidepomodoro()}
                        className="pomo-button">
                    Pomodoro
                    </button>
                </ul>
            </nav>
            <div className="header-cal">
            {calculator()}
            {pomodoro()}
            </div>
            {time.hour}:{time.minute}:{time.second}
        </header>
    )
}

const mapStateToProps = (store) => {
    return store
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hidecalculator: ()=>dispatch({
            type: HIDECALCULATOR
        }),
        hidepomodoro: () => dispatch({
            type: HIDEPOMODORO
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);