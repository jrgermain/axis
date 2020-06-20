import React from 'react';
import LinkButton from './LinkButton';
import Compass from './Compass';
import { connect } from "react-redux";
import Question from "./Question";

class WriteQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { questions: [] };
        // this.handleChange = this.handleChange.bind(this);
        // this.getQuestionElement = this.getQuestionElement.bind(this);
        this.addEmptyQuestion = this.addEmptyQuestion.bind(this);
    }

    render() {
        return (
            <div className="write-questions">
                <div className="intro">
                    <h2>Write Questions</h2>
                </div>
                <form className="questions">
                    {this.state.questions.map(Question)}
                </form>
                <div className="actions">
                    <button className="stylish" onClick={this.addEmptyQuestion}>Add Question</button>
                    <span className="right">
                        <LinkButton url="/create/step2" label="Continue"></LinkButton>
                    </span>
                </div>
            </div>
        )
    }

    

    addEmptyQuestion() {
        this.setState((state) => {
            return { questions: state.questions.concat([{}]) };
        });
    }
}

export default connect()(WriteQuestions)