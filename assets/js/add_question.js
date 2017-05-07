import React from 'react';
import axios from 'axios';


class AddQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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

    // redo this using axios npm package for making api post requests
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
    // prevent the default behavior of submitting a form??
        e.preventDefault();
        var newQuestion = this.state.newQuestion;
        var newAnswer = this.state.newAnswer;
        console.log(newQuestion, newAnswer)
        this.sendQuestionToServer({
            question: newQuestion,
            correctAnswer: newAnswer
        });
        this.setState({
            question: "",
            answer: ""
        });
    }

    render() {
        console.log("initial state: ", this.state.newQuestion, this.state.newAnswer)
        return (
            <form className="add-question" onSubmit={this.handleSubmit}>
                <h2>Add Question</h2>
                <input name="newQuestion" type="text" value={this.state.newQuestion} onChange={this.handleChange} />
                <br />
                <input name="newAnswer" type="text" value={this.state.newAnswer} onChange={this.handleChange} />
                <br />
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export {AddQuestion};
