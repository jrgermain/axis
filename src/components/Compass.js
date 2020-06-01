import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import DefineAxes from './DefineAxes';

function Compass({ animated, xlab, ylab, xScore, yScore }) {
    return (
        <figure className={"compass" + (animated ? " animated" : "")}>
            <span className="x-axis"></span>
            <label className="x-label">{xlab}</label>
            <span className="y-axis"></span>
            <label className="y-label">{ylab}</label>
            <span className="point" style={{ top: yScore + "%", left: xScore + "%" }}></span>
        </figure>
    )
}

export default Compass