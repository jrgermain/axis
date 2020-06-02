import React from 'react';
import LinkButton from './LinkButton';
import Compass from './Compass';

class WriteQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xlab: "",
            ylab: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="write-questions">
                <div className="intro">
                    <h2>Write questions</h2>
                </div>
                <div className="continue">
                    <LinkButton url="/create/step2" label="Continue"></LinkButton>
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ [event.target.getAttribute("data-key")]: event.target.value });
    }
}

export default WriteQuestions