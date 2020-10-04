import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importing Components
import GateHome from './core/Gate/GateHome';
import EseHome from './core/Ese/EseHome';
import SignIn from './core/SignIn';
import SignUp from './core/SignUp';
import Home from './core/Home';
import SyllabusHome from './core/Syllabus/SyllabusHome';
import AddSubjects from './core/Admin/addSubjects';
import AddGate from './core/Admin/addGate';
import AddEse from './core/Admin/addEse';
import AddQuestion from './core/Admin/addQuestion';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/syllabus" exact component={SyllabusHome} />
                <Route path="/gate" exact component={GateHome} />
                <Route path="/ese" exact component={EseHome} />
                <Route path="/addsubject" exact component={AddSubjects} />
                <Route path="/addgate" exact component={AddGate} />
                <Route path="/addEse" exact component={AddEse} />
                <Route path="/addQuestion" exact component={AddQuestion} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;