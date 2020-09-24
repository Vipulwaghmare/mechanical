import React, {useState, useEffect} from 'react';
import { getAllSubjects } from './backend/getallsubjects';

const Subjects= () => {
    
    const [subjects, setSubjects] = useState([])
    const [error, setError ] = useState(false)

    const subjectList = () => {
        getAllSubjects().then(data=>{
            console.log(data)
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
        return(
            <div className="subject-subtopic">
            {props.subtopic}
            </div>
        )
    }
    
    const MainSubject = (props) => {
        console.log(props.subtopics)
        return(
            <div className="subject-name">
                {props.name}
                {props.subtopics.map((subtopic)=>{
                    return <SubTopics 
                        key={subtopic}
                        subtopic={subtopic}
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