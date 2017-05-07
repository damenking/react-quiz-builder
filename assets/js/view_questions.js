import React from 'react';
import axios from 'axios';

class ViewQuestions extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: []
        };
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
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

    componentDidMount() {
        this.loadQuestionsFromServer();
    }

    render() {
        if (this.state.data) {
            var questionList = this.state.data.map(function(question){
                return <li key={question.id}>Question: {question.question}<br />Answer: {question.correctAnswer}</li>
            })
        }
        return (
            <div>
                <h1>Question List</h1>
                <ul>
                    {questionList}
                </ul>
            </div>
        )
    }
}

export {ViewQuestions};