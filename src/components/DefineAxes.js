import React from 'react';
import LinkButton from './LinkButton';

function DefineAxes() {
    return (
        <div className="define-axes">
            <div className="intro">
                <h2>Define Axes</h2>
                <p>Define what the 2 directions of your graph represent</p>
            </div>
            <div className="left">
                <h3>X-axis</h3>
                <div>
                    <label for="left-axis-label">Left: </label>
                    <input id="left-axis-label" type="txt"></input>
                </div>
                <div>
                    <label for="right-axis-label">Right: </label>
                    <input id="right-axis-label" type="txt"></input>
                </div>
            </div>
            <div className="right">
                <h3>Y-axis</h3>
                <div>
                    <label for="top-axis-label">Top: </label>
                    <input id="top-axis-label" type="txt"></input>
                </div>
                <div>
                    <label for="bottom-axis-label">Bottom: </label>
                    <input id="bottom-axis-label" type="txt"></input>
                </div>
            </div>
            <div className="continue">
                <LinkButton url="/create/step2" label="Continue"></LinkButton>
            </div>
        </div>
    )
}

export default DefineAxes