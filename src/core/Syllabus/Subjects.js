import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getAllSubjects } from './backend/getallsubjects';

const Subjects= (props) => {
    const [subjects, setSubjects] = useState([])
    const [error, setError ] = useState(false)
    const [showSubtopic, setShowSubtopic ] = useState(false)
    const [currentSubject, setCurrentSubject] = useState("")
    
    const subjectList = () => {
        getAllSubjects().then(data=>{
            if(data.error){
                setError(data.error)
            } else {
                setSubjects(data)
            }
        })
    }

    useEffect(()=>{
        subjectList()
    },[])


    const SubTopics = (props) => {
        return( showSubtopic && currentSubject === props.name && 
            <div className="subject-subtopic">
                <li>
                    <Link 
                className="nav-link"
                to={`/${props.subtopic}`}>
                        {props.subtopic}
                    </Link>
                </li>
            </div>
        )
    }
    
    const MainSubject = (props) => {
        return(
            <div className="subject-name">
                <b onClick={()=>{

                    setShowSubtopic(true)
                    setCurrentSubject(props.name)
                    }}>{props.name}</b>
                {props.subtopics.map((subtopic)=>{
                    return <SubTopics 
                        key={subtopic}
                        subtopic={subtopic}
                        name={props.name}
                    />
                })}
            </div>
        )
    }

    return(
        <div className="subject-topics">
            {subjects.map((subject)=>{
                return(
                    <MainSubject 
                        key={subject._id}
                        name={subject.name}
                        subtopics={subject.subtopics}
                    />
                )
            })}
        </div> 
    )
}

export default Subjects