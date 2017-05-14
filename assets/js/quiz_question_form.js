import React from 'react';



export default class QuizQuestionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            shuffledAnswers: this.shuffle([
                this.props.thisQuestion.correctAnswer,
                this.props.thisQuestion.incorrectAnswer1,
                this.props.thisQuestion.incorrectAnswer2,
                this.props.thisQuestion.incorrectAnswer3, 
            ])    
        }
        this.shuffle = this.shuffle.bind(this)
    }

    shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
        }
        return array;
    }

    render() {
        
        if (this.props.thisQuestion.questionType == 'trueOrFalse'){
            return (
                <div>
                    <hr />
                    <strong>Question:</strong>
                    <p>{this.props.thisQuestion.question}</p>
                    <strong>Answer:</strong>
                    <br />
                    <input 
                        type="radio" 
                        name={this.props.questionIndex} 
                        value="true"
                        onChange={this.props.handleAnswerChange}
                        checked={this.props.thisQuestion.userAnswer == "true"} /> True
                    <br />
                    <input 
                        type="radio" 
                        name={this.props.questionIndex} 
                        value="false"
                        onChange={this.props.handleAnswerChange}
                        checked={this.props.thisQuestion.userAnswer == "false"} /> False
                </div> 
            )
        }
        else if (this.props.thisQuestion.questionType == 'multipleChoice'){
            var multipleChoiceAnswers = this.state.shuffledAnswers
            return (
                <div>
                    <hr />
                    <strong>Question:</strong>
                    <p>{this.props.thisQuestion.question}</p>
                    <strong>Answer:</strong>
                    <br />
                    <input 
                        type="radio" 
                        name={this.props.questionIndex} 
                        value={multipleChoiceAnswers[0]}
                        onChange={this.props.handleAnswerChange}
                        checked={this.props.thisQuestion.userAnswer == multipleChoiceAnswers[0]} /> {multipleChoiceAnswers[0]}
                    <br />
                    <input 
                        type="radio" 
                        name={this.props.questionIndex} 
                        value={multipleChoiceAnswers[1]}
                        onChange={this.props.handleAnswerChange}
                        checked={this.props.thisQuestion.userAnswer == multipleChoiceAnswers[1]} /> {multipleChoiceAnswers[1]}
                    <br />
                    <input 
                        type="radio" 
                        name={this.props.questionIndex} 
                        value={multipleChoiceAnswers[2]}
                        onChange={this.props.handleAnswerChange}
                        checked={this.props.thisQuestion.userAnswer == multipleChoiceAnswers[2]} /> {multipleChoiceAnswers[2]}
                    <br />
                    <input 
                        type="radio" 
                        name={this.props.questionIndex} 
                        value={multipleChoiceAnswers[3]}
                        onChange={this.props.handleAnswerChange}
                        checked={this.props.thisQuestion.userAnswer == multipleChoiceAnswers[3]} /> {multipleChoiceAnswers[3]}
                </div>
            )
        }
        else if (this.props.thisQuestion.questionType == 'freeForm'){
            return (
                <div>
                    <hr />
                    <strong>Question:</strong>
                    <p>{this.props.thisQuestion.question}</p>
                    <strong>Answer:</strong>
                    <br />
                    <input 
                        type="text"
                        className="form-control answer-form"
                        name={this.props.questionIndex} 
                        onChange={this.props.handleAnswerChange} />
                </div> 
            )
        }
    }
}
