import React from 'react';
import Base from '../Base';
import Subjects from './Subjects';

const SyllabusBase = ({children}) => {
    const [showLeft, setShowLeft] = React.useState(false) // for small screens

    // Menu for small screen 
    const Menu = () => {
        if(showLeft){
            return(
                <section className="section-left section-left-hide">
                    <Subjects />
                </section>
            )
        } else {
            return(
                <section className="section-left section-left-show">
                    <Subjects />
                </section>
            )
        }
    }


    return(
        <Base>
            <div className="syllabus-main">
                <Menu />
            <section className="section-right">
                {children}
            </section>
            </div>
            <div className="syllabus-menu"
                onClick={()=> setShowLeft(!showLeft)}
            >  </div>
        </Base>
    )
}

export default SyllabusBase;