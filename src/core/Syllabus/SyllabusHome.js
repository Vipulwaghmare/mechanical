import React from 'react';
import SyllabusBase from './SyllabusBase';
import "../css/syllabus.css"
import './Notes/notes.css'
import Notes from './Notes';

const SyllabusHome = () => {
    return(
        <SyllabusBase>
            <Notes />
        </SyllabusBase>
    )
}

export default SyllabusHome;