import React from 'react';
import axios from 'axios';
import Question from './question';

class ViewQuestions extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
        };
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this)
 
    }

    loadQuestionsFromServer(){
        axios({
            method: 'get',
            url: this.props.url,
        }).then(response => {
            this.setState({
                data: response.data
            })      
        })
    }

    updateQuestion(updatedQuestion) {
        console.log(updatedQuestion.id)
        console.log(updatedQuestion.question)
        console.log(updatedQuestion.answer)
        // maybe need to chnage the url to specific to the id??
        axios({
            method: 'post',
            url: this.props.url,
            data: {
                id: updatedQuestion.id,
                question: updatedQuestion.question,
                correctAnswer: updatedQuestion.correctAnswer
            },
            xsrfHeaderName: "X-CSRFTOKEN",
        });
    }

    componentDidMount() {
        this.loadQuestionsFromServer();
    }

    render() {
        var questionList = this.state.data
        return (
            <div>
                <h2>Question List</h2>
                {questionList.map((question) =>
                    <Question item={question} key={question.id} updateQuestion={this.updateQuestion} />
                )}
            </div>
        );
    }
}

export {ViewQuestions};