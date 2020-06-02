import React from 'react';

function Compass({ animated, leftAxisLabel, rightAxisLabel, topAxisLabel, bottomAxisLabel, xScore, yScore }) {
    return (
        <figure className={"compass" + (animated ? " animated" : "")}>
            <span className="x-axis"></span>
            <label className="label-left">{leftAxisLabel}</label>
            <label className="label-right">{rightAxisLabel}</label>
            <span className="y-axis"></span>
            <label className="label-top">{topAxisLabel}</label>
            <label className="label-bottom">{bottomAxisLabel}</label>
            <span className="point" style={{ top: yScore + "%", left: xScore + "%" }}></span>
        </figure>
    )
}

export default Compass