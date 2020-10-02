import React from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';
import './css/home.css'

const Home = () => {
    return(
        <Base>
            <div className="home-title-div">
                <h2 className="home-title-h2">Crack Gate / ESE Mechanical </h2>
                <h3 className="home-title-h3">Study and solve papers</h3>
                <div className="home-title-menu">
                    <Link 
                        to="/gate">
                    <button 
                        className="home-title-button">
                        Gate
                    </button>
                    </Link>
                    <Link to="/ese">
                    <button className="home-title-button">
                    Ese
                    </button>
                    </Link>
                    <Link to="/syllabus">
                    <button className="home-title-button">
                    Syllabus
                    </button>
                    </Link>
                </div>
            </div>
        </Base>
    )
}

export default Home