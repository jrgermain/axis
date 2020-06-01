import React from 'react';
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import Compass from './Compass';

function HomePage() {
    return (
        <div className="home">
            <h1>Create 2D Quizzes</h1>
            <p>Axis lets you create quizzes that place people on a graph.</p>
            <p>You define what the x- and y-axes represent, and you're in charge of how your questions affect the results.</p>
            <Compass xScore="80" yScore="40" animated="true" />
            <LinkButton url="/create/define-axes" big="true" label="Get Started"></LinkButton>
        </div>
    )
}

export default HomePage