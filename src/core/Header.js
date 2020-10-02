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
        hour :new Date().getHours().toLocaleString(),
        minute: new Date().getMinutes().toLocaleString(),
        second: new Date().getSeconds().toLocaleString()
    })
    const [studyTime, setStudyTime] = useState('30')

    useEffect(()=>{
        setTimeout(()=>{
            updateTime()
        },1000)
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
    
    const pomodoro = () => {
        return(
            <div className="pomo-main">
            <h4 className="pomo-h4">Pomodoro Technique</h4>
            <div className="pomo-section">
                <p> Study Time </p>
                <input 
                    className="pomo-input"
                    type="radio" 
                    value="30"
                    name="study"
                    />30
                    
                <input
                    className="pomo-input"
                    type="radio" 
                    name="study"
                    value="40"
                    /> 40
                <p> Break time </p>
                <input 
                    className="pomo-input"
                    type="radio" 
                    value="5"
                    name="break"
                    />5
                <input 
                    className="pomo-input"
                    name="break"
                    type="radio" 
                    value="10"
                    />10
                <input 
                    className="pomo-input"
                    name="break"
                    type="radio"
                    value="15"
                    />15
                    
                    <br />
                <button 
                    className="pomo-submit"
                    onClick={()=>{setStudyTime(30)}}
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