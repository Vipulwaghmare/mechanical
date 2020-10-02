import React from 'react';
import { Link } from 'react-router-dom';
import Calculator from './calculator/calculator';
import { isAuthenticated, signout } from './Backend/auth';

import { connect } from 'react-redux'
import { HIDECALCULATOR } from './Redux/action';
import SmallCalculator from './calculator/smallCalculator';

const Header = (props) => {

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
                        <Link className="nav-link" to="/signup">
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
                </ul>
            </nav>
            <div className="header-cal">
            {calculator()}
            </div>
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
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);