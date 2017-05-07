import React from 'react';
import axios from 'axios';
import SaveSuccessMessage from './saved_question_success_msg';


export default class AddQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            savedQuestion: '',
            newQuestion: '',
            newAnswer: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value,
        });
    }

    sendQuestionToServer(newQuestion){
        axios({
            method: 'post',
            url: this.props.url,
            data: {
                question: newQuestion.question,
                correctAnswer: newQuestion.correctAnswer
            },
            xsrfHeaderName: "X-CSRFTOKEN",
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        var newQuestion = this.state.newQuestion;
        var newAnswer = this.state.newAnswer;
        this.sendQuestionToServer({
            question: newQuestion,
            correctAnswer: newAnswer
        });
        this.setState({
            savedQuestion: newQuestion,
            newQuestion: "",
            newAnswer: ""
        });
    }

    render() {
        return (
            <div>
                <h2>Add Question</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="newQuestion">Question:</label>
                        <input id="newQuestionId" className="form-control" name="newQuestion" type="text" value={this.state.newQuestion} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newAnswer">Correct Answer:</label>
                        <input id="newAnswerId" className="form-control" name="newAnswer" type="text" value={this.state.newAnswer} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Save</button>
                </form>
                <SaveSuccessMessage savedQuestion={this.state.savedQuestion} />
            </div>
        );
    }
}
