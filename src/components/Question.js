import React from 'react';

function Question({text = "", agreeX = 0, agreeY = 0, disagreeX = 0, disagreeY = 0}, index) {
    return (
        <div className="question" key={++Question.key}>
            <span className="question-text">
                <h2>Question Text</h2>
                <input type="txt" defaultValue={text} className="text" id={"text-" + Question.key}></input>
            </span>
            <hr></hr>
            <span className="question-results">
                <h2>Question Results</h2>
                <div>
                    <h3>Fully Agree:</h3>
                    <span className="x">
                        <label>X Score:</label>
                        <input type="number" defaultValue={agreeX} className="agreeX" id={"agreeX-" + Question.key}></input>
                    </span>
                    <span className="y">
                        <label>Y Score:</label>
                        <input type="number" defaultValue={agreeY} className="agreeY" id={"agreeY-" + Question.key}></input>
                    </span>
                </div>
                <div>
                    <h3>Fully Disagree:</h3>
                    <span className="x">
                        <label>X Score:</label>
                        <input type="number" defaultValue={disagreeX} className="disagreeX" id={"disagreeX-" + Question.key}></input>
                    </span>
                    <span className="y">
                        <label>Y Score:</label>
                        <input type="number" defaultValue={disagreeY} className="disagreeY" id={"disagreeY-" + Question.key}></input>
                    </span>
                </div>
            </span>
        </div>
    )
}

Question.key = 0;

export default Question