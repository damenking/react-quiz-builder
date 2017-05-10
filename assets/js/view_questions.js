import React from 'react';
import axios from 'axios';
import Question from './question';
import SelectTopic from './select_topic';


class ViewQuestions extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            topicQuestions: [],
            topicSelect: '',
        };
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this)
        this.deleteQuestion = this.deleteQuestion.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.filterQuestionsByTopic = this.filterQuestionsByTopic.bind(this)
    }

    filterQuestionsByTopic(topicId) {
        var questionList = [];
        console.log(topicId)
        this.setState({ topicSelect: topicId })
        console.log(this.state.topicSelect)
        this.state.data.forEach(question => {
            if (question.questionTopic == this.state.topicSelect) {
                questionList.push(question)
            }
        }); 
        this.setState({topicQuestions: questionList})
    }

    loadQuestionsFromServer(){
        axios({
            method: 'get',
            url: this.props.url,
        }).then(response => {
            this.setState({
                data: response.data
            })      
        }).then(this.filterQuestionsByTopic(''))
    }

    componentDidMount() {
        this.loadQuestionsFromServer();
        console.log('rando', this.state.topicSelect)
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
                questionType: updatedQuestion.questionType,
                correctAnswer: updatedQuestion.correctAnswer,
                incorrectAnswer1: updatedQuestion.incorrectAnswer1,
                incorrectAnswer2: updatedQuestion.incorrectAnswer2,
                incorrectAnswer3: updatedQuestion.incorrectAnswer3,
                questionTopic: updatedQuestion.questionTopic
            },
            xsrfHeaderName: "X-CSRFTOKEN",
        });
    }

    handleChange(event) {
        var name = event.target.name
        var value = event.target.value
        console.log(name, value)
        this.setState({
            [name]: value,
        });
        console.log(this.state.topicSelect)
        if (name == 'topicSelect') {
            this.filterQuestionsByTopic(value)
        }
    }


    render() {
        return (
            <div>
                <h2>Question List</h2>
                <SelectTopic 
                        topicSelect={this.state.topicSelect} 
                        handleChange={this.handleChange} 
                        url="/api/topics/" />
                {this.state.data.map((question) =>
                    <Question 
                        item={question} 
                        key={question.id} 
                        updateQuestion={this.updateQuestion} 
                        deleteQuestion={this.deleteQuestion}/>
                )}
            </div>
        );
    }
}

export {ViewQuestions};