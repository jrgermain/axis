import React from 'react';
import LinkButton from './LinkButton';
import Compass from './Compass';

class DefineAxes extends React.Component {
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
            <div className="define-axes">
                <div className="intro">
                    <h2>Define Axes</h2>
                    <p>Define what the two axes of your graph represent</p>
                </div>
                <div className="left">
                    <h3>X-axis</h3>
                    <div>
                        <label for="left-axis-label">Left: </label>
                        <input id="left-axis-label" type="txt" data-key="leftAxisLabel" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label for="right-axis-label">Right: </label>
                        <input id="right-axis-label" type="txt" data-key="rightAxisLabel" onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="right">
                    <h3>Y-axis</h3>
                    <div>
                        <label for="top-axis-label">Top: </label>
                        <input id="top-axis-label" type="txt" data-key="topAxisLabel" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label for="bottom-axis-label">Bottom: </label>
                        <input id="bottom-axis-label" type="txt" data-key="bottomAxisLabel" onChange={this.handleChange}></input>
                    </div>
                </div>
                <hr></hr>
                <div className="preview-label">
                    <h2>Preview</h2>
                </div>
                <span className="compass-center">
                    <Compass xScore="80" yScore="40" leftAxisLabel={this.state.leftAxisLabel} rightAxisLabel={this.state.rightAxisLabel} topAxisLabel={this.state.topAxisLabel} bottomAxisLabel={this.state.bottomAxisLabel} />
                </span>
                <div className="continue">
                    <LinkButton url="/create/write-questions" label="Continue"></LinkButton>
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ [event.target.getAttribute("data-key")]: event.target.value });
    }
}

export default DefineAxes