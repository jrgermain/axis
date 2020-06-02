import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import DefineAxes from './DefineAxes';
import WriteQuestions from './WriteQuestions';

class CreatePage extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            axes: null,
            questions: null,
            meta: null
        }
    }

    render() {
        return (
            <div className="create">
                <h1>Quiz Builder</h1>
                <div className="quiz-builder">
                    <Switch>
                        <Route path="/create/define-axes" component={DefineAxes}></Route>
                        <Route path="/create/write-questions" component={WriteQuestions}></Route>
                        <Route path="/create/">
                            <Redirect to="/error" />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default CreatePage