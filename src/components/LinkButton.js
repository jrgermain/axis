import React from 'react';
import { Link } from 'react-router-dom'

function LinkButton({ url, big, label, beforeNavigate }) {
    return (
        <Link to={url} onClick={beforeNavigate}>
            <button className={"stylish" + (big ? " big" : "")}>{label}</button>
        </Link>
    )
}

export default LinkButton