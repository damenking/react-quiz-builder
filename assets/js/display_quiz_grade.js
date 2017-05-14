import React from 'react';

export default function DisplayGrade (props) {
    var imageSource = ''
    var imageAlt = ''
    if (props.submittedQuestion.correctAnswer == props.submittedQuestion.userAnswer) {
        imageSource = "https://img.clipartfest.com/83160fc59a5530f77473c4be0302dcab_green-check-mark-clipart-clipartfest-green-check-mark-clipart_600-461.png"
        imageAlt = "Correct Answer"
    }
    else {
        imageSource = "https://vignette4.wikia.nocookie.net/creation/images/7/7e/Red_x.png/revision/latest?cb=20160323201834"
        imageAlt = "Incorrect Answer"
    }
    return (
        <div>
            <hr />
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <strong>Question:</strong>
                        <p>{props.submittedQuestion.question}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <strong>Correct Answer:</strong>
                        <p>{props.submittedQuestion.correctAnswer}</p>
                    </div>
                    <div className="col-md-3">
                        <strong>Your Answer:</strong>
                        <p>{props.submittedQuestion.userAnswer}</p>
                    </div>
                    <div className="col-md-2 quiz-answer-result">
                        <img src={imageSource} alt={imageAlt} className="img-responsive"/>
                    </div>                   
                </div>
            <hr />
            </div> 
        </div>         
    )
}