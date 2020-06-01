import React from 'react';
import { Link } from 'react-router-dom'

function LinkButton({ url, big, label }) {
    return (
        <Link to={url}>
            <button className={"stylish" + (big ? " big" : "")}>{label}</button>
        </Link>
    )
}

export default LinkButton