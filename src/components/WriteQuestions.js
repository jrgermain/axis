import React from 'react';
import LinkButton from './LinkButton';
import Compass from './Compass';

class WriteQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="write-questions">
                <div className="intro">
                    <h2>Write Questions</h2>
                </div>
                <div className="actions">
                    <button className="stylish">Add Question</button>
                    <span className="right">
                        <LinkButton url="/create/step2" label="Continue"></LinkButton>
                    </span>
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ [event.target.getAttribute("data-key")]: event.target.value });
    }
}

export default WriteQuestions