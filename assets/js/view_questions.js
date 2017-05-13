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
        };
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this)
        this.deleteQuestion = this.deleteQuestion.bind(this)
        this.filterQuestionsByTopic = this.filterQuestionsByTopic.bind(this)
    }

    filterQuestionsByTopic(selectedTopicId) {
        var questionList = [];
        if (selectedTopicId == 'all') {
            this.state.data.forEach(topic => {
                topic.questions.forEach(question => {
                    questionList.push(question)
                })
            })
        }
        else {
            this.state.data.forEach(topic => {
                if (topic.id == selectedTopicId) {
                    topic.questions.forEach(question => {
                        questionList.push(question)
                    })
                }     
            }); 
        }
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

    render() {
        return (
            <div>
                <h2>Question List</h2>
                <SelectTopic 
                        topicSelect={this.state.topicSelect} 
                        changeTopic={this.filterQuestionsByTopic}
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
