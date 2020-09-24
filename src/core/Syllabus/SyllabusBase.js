import React from 'react';
import Base from '../Base';
import Subjects from './Subjects';

const SyllabusBase = ({children}) => {
    return(
        <Base>
            <div className="syllabus-main">
            <section className="section-left">
                <Subjects />
            </section>
            <section className="section-right">
                {children}
            </section>
            </div>
        </Base>
    )
}

export default SyllabusBase;