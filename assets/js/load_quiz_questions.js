import React from 'react';
import axios from 'axios';
import Question from './question';
import SelectTopic from './select_topic';
import QuizForms from './quiz_forms';


export default class LoadQuizQuestions extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            topicQuestions: [],
            takingTest: false,
            currentTopic: '',
        };
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
        this.filterQuestionsByTopic = this.filterQuestionsByTopic.bind(this)
        this.handleTakeTestClick = this.handleTakeTestClick.bind(this)
        this.handleAnswerChange = this.handleAnswerChange.bind(this)
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
                    this.setState({currentTopic:topic})
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

    handleAnswerChange(event) {
        var questionIndex = event.target.name
        var questionUserAnswer = event.target.value
        var updatedQuestionsAndAnswers = this.state.topicQuestions
        updatedQuestionsAndAnswers[questionIndex]['userAnswer'] = questionUserAnswer
        this.setState({topicQuestions:updatedQuestionsAndAnswers})
        console.log(this.state.topicQuestions)
    }
    
    handleTakeTestClick() {
        this.setState({takingTest:true})
    }

    render() {
        console.log(this.state.topicQuestions[0])
        var questionNumber = this.state.topicQuestions.length
        if (this.state.takingTest == true) {
            return (
                <QuizForms 
                    quizQuestions={this.state.topicQuestions} 
                    topicName={this.state.currentTopic.name}
                    handleAnswerChange={this.handleAnswerChange}/>
            )
        }
        if (this.state.topicQuestions.length == 0) {
            return (
                <div>
                    <h2>Take Quiz</h2>
                    <h4>Please select a topic to be quized on</h4>
                    <SelectTopic 
                            changeTopic={this.filterQuestionsByTopic}
                            currentScreen='takeQuiz' 
                            url="/api/topics/" />               
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2>Take Quiz</h2>
                    <h4>Please select a topic to be quized on</h4>
                    <SelectTopic 
                            topicSelect={this.state.topicSelect} 
                            changeTopic={this.filterQuestionsByTopic}
                            currentScreen='takeQuiz' 
                            url="/api/topics/" />
                    <button onClick={this.handleTakeTestClick} type="button" className="btn btn-success btn-lg">Take Quiz</button>
                    <span className="question-number-indicator"><p>({questionNumber} questions)</p></span>
                </div>
            );
        }
    }
}

