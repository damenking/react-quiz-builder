import React from 'react';
import axios from 'axios';

class ViewQuestions extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: []
        },
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this)
        this.updateState = this.updateState.bind(this)
    }

    loadQuestionsFromServer(){
        axios({
            method: 'get',
            url: this.props.url,
        }).then(function(response) {
            console.log(response)
            this.updateState;
        })
    }

    updateState() {
        this.setState({
            data: [{
                question: "how are you?",
                correctAnswer: "Greate!"
            }]
        })
    }
    //     loadQuestionsFromServer(){
    //     $.ajax({
    //         url: this.props.url,
    //         datatype: 'json',
    //         cache: false,
    //         success: function(data) {
    //             this.setState({data: data});
    //         }.bind(this)
    //     })
    // }

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