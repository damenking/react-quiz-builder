import React from 'react';

export default function ViewQuestion (props) {
    if (props.thisQuestion.questionType == 'multipleChoice') {
        return (
           <div className="question-box" onClick={props.editQuestion}>
                <hr />
                <strong>Question:</strong>
                <p>{props.thisQuestion.question}</p>
                <strong>Answer:</strong>
                <p>{props.thisQuestion.correctAnswer}</p>
                <strong>Incorrect Answers:</strong>
                <ul>
                    <li>{props.thisQuestion.incorrectAnswer1}</li>
                    <li>{props.thisQuestion.incorrectAnswer2}</li>
                    <li>{props.thisQuestion.incorrectAnswer3}</li>
                </ul>       
            </div> 
        )
    }
    return (
        <div className="question-box" onClick={props.editQuestion}>
            <hr />
            <strong>Question:</strong>
            <p>{props.thisQuestion.question}</p>
            <strong>Answer:</strong>
            <p>{props.thisQuestion.correctAnswer}</p>     
        </div> 
    )

}
        