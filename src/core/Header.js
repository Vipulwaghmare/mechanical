import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Calculator from './calculator/calculator';
import { isAuthenticated, signout } from './Backend/auth';

const Header = () => {
    const [showCal, setShowCal] = useState(false);
    
    const handleClick = () => {
        setShowCal(!showCal)
    }

    const calculator = () => {
        return(
            showCal && <Calculator />
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
                        <Link to="/" className="nav-link"
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
                    <button 
                        onClick={handleClick}
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

export default Header;