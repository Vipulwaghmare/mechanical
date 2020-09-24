import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Calculator from './calculator/calculator';

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
                    <li className="nav-li">
                        <Link className="nav-link" to="/signup">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/signin">
                            Sign In
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-link" to="/signout">
                            Sign Out
                        </Link>
                    </li>
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