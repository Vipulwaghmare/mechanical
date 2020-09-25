import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GateHome from './core/Gate/GateHome';
import EseHome from './core/Ese/EseHome';
import SignIn from './core/SignIn';
import SignUp from './core/SignUp';
import Home from './core/Home';
import SyllabusHome from './core/Syllabus/SyllabusHome';
import AddSubjects from './core/Admin/addSubjects';

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
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;