import React from 'react';
import axios from 'axios';
import Question from './question';
import SelectTopic from './select_topic';


export default class ViewQuestions extends React.Component{
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
        this.handleTopicChange = this.handleTopicChange.bind(this)
        this.filterQuestionsByTopic = this.filterQuestionsByTopic.bind(this)
    }

    filterQuestionsByTopic() {
        var questionList = [];
        this.state.data.forEach(topic => {
            if (topic.id == this.state.topicSelect) {
                topic.questions.forEach(question => {
                    questionList.push(question)
                })
            }     
        }); 
        console.log(questionList)
        this.setState({topicQuestions: questionList})
    }

    loadQuestionsFromServer(){
        axios({
            method: 'get',
            url: "/api/topics/",
        }).then(response => {
            this.setState({
                // list of topics
                data: response.data
            }) 
            response.data.forEach(topic => {            
            })
        }).then(this.filterQuestionsByTopic())
    }

    componentDidMount() {
        this.loadQuestionsFromServer();
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

    handleTopicChange(newTopicSelect) {
        this.setState({topicSelect: newTopicSelect});
        console.log("top level topicSelect:", this.state.topicSelect)
        this.filterQuestionsByTopic()
        }

    render() {
        return (
            <div>
                <h2>Question List</h2>
                <SelectTopic 
                        topicSelect={this.state.topicSelect} 
                        changeTopic={this.handleTopicChange}
                        currentScreen='viewQuestions' 
                        url="/api/topics/" />
                {this.state.topicQuestions.map((question) =>
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
