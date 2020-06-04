import React from 'react';
import LinkButton from './LinkButton';
import Compass from './Compass';
import { connect } from "react-redux";

class DefineAxes extends React.Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.storeLabels = this.storeLabels.bind(this);
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
                        <label htmlFor="left-axis-label">Left: </label>
                        <input id="left-axis-label" type="txt" data-key="leftAxisLabel" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="right-axis-label">Right: </label>
                        <input id="right-axis-label" type="txt" data-key="rightAxisLabel" onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="right">
                    <h3>Y-axis</h3>
                    <div>
                        <label htmlFor="top-axis-label">Top: </label>
                        <input id="top-axis-label" type="txt" data-key="topAxisLabel" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="bottom-axis-label">Bottom: </label>
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
                <div className="actions">
                    <span className="right">
                        <LinkButton url="/create/write-questions" label="Continue" beforeNavigate={this.storeLabels}></LinkButton>
                    </span>
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ [event.target.getAttribute("data-key")]: event.target.value });
    }

    storeLabels() { 
        this.dispatch({
            type: "SET_AXIS_LABELS",
            content: {
                left: this.state.leftAxisLabel,
                right: this.state.rightAxisLabel,
                top: this.state.topAxisLabel,
                bottom: this.state.bottomAxisLabel
            }
        });

    }
}

export default connect()(DefineAxes)