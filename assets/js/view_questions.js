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
        this.deleteQuestion = this.deleteQuestion.bind(this)
 
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

    deleteQuestion(questionId) {
        var instanceUrl = this.props.url + questionId + "/"
        axios({
            method: 'delete',
            url: instanceUrl,
            xsrfHeaderName: "X-CSRFTOKEN",
        })
    }

    updateQuestion(updatedQuestion) {
        var instanceUrl = this.props.url + updatedQuestion.id + "/"
        axios({
            method: 'put',
            url: instanceUrl,
            data: {
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
                    <Question item={question} key={question.id} updateQuestion={this.updateQuestion} deleteQuestion={this.deleteQuestion}/>
                )}
            </div>
        );
    }
}

export {ViewQuestions};