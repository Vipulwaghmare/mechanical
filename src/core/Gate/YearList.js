import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { getYears } from './backend/getpaperlist';

const Subjects= () => {
    const [years, setYears] = useState([])
    const [error, setError ] = useState(false)
    const subjectList = () => {
        getYears().then(data=>{
            if(data.error){
                setError(data.error)
            } else {
                setYears(data)
            }
        })
    }

    useEffect(()=>{
        subjectList()
    },[])
    
    const MainYear = (props) => {
        return(
            <div className="subject-name">
                <Link to={`/gate/${props.year}`} >
                    <b>{props.year}</b>
                </Link>
            </div>
        )
    }

    return(
        <div className="subject-topics">
            {years.map((subject)=>{
                return(
                    <MainYear 
                        key={subject._id}
                        year={subject.year}
                    />
                )
            })}
        </div> 
    )
}

export default Subjects