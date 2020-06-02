import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import DefineAxes from './DefineAxes';
import Compass from './Compass';

function CreatePage() {
    return (
        <div className="create">
            <h1>Quiz Builder</h1>
            <div className="quiz-builder">
                <Switch>
                    <Route path="/create/define-axes" component={DefineAxes}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default CreatePage