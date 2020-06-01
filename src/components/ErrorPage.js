import React from 'react';
import LinkButton from './LinkButton';

function ErrorPage() {
    return (
        <div className="error">
            <h1>Oops!</h1>
            <p>That URL doesn't look right.</p>
            <LinkButton url="/" label="Back to Home"></LinkButton>
        </div>
    )
}

export default ErrorPage