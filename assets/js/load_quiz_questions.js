import React from 'react';
import axios from 'axios';
import Question from './question';
import SelectTopic from './select_topic';
import QuizForms from './quiz_forms';
import DisplayGrade from './display_quiz_grade';


export default class LoadQuizQuestions extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            topicQuestions: [],
            displayingGrade: false,
            takingTest: false,
            currentTopic: '',
            correctAnswerNumber: 0,
        };
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
        this.filterQuestionsByTopic = this.filterQuestionsByTopic.bind(this)
        this.handleTakeTestClick = this.handleTakeTestClick.bind(this)
        this.handleAnswerChange = this.handleAnswerChange.bind(this)
        this.shuffle = this.shuffle.bind(this)
        this.handleQuizSubmit = this.handleQuizSubmit.bind(this)
    }

    shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
        }
        return array;
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
        questionList = this.shuffle(questionList)
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

    handleQuizSubmit(e) {
        e.preventDefault();
        var correctQuestionNumber = 0
        this.state.topicQuestions.forEach(topicQuestion => {
            if (topicQuestion['correctAnswer'] == topicQuestion['userAnswer']) {
                correctQuestionNumber += 1;
            }
        })
        this.setState({
            displayingGrade:true,
            takingTest:false,
            correctAnswerNumber: correctQuestionNumber,
        })
    }

    handleAnswerChange(event) {
        var questionIndex = event.target.name
        var questionUserAnswer = event.target.value
        var updatedQuestionsAndAnswers = this.state.topicQuestions
        updatedQuestionsAndAnswers[questionIndex]['userAnswer'] = questionUserAnswer
        this.setState({topicQuestions:updatedQuestionsAndAnswers})
    }
    
    handleTakeTestClick() {
        this.setState({takingTest:true})
    }

    render() {
        var questionNumber = this.state.topicQuestions.length
        var quizResultPercent = (this.state.correctAnswerNumber / this.state.topicQuestions.length) * 100
        if (this.state.displayingGrade) {
            return (
                <div>
                    <h2>'{this.state.currentTopic.name}' Quiz Results: {quizResultPercent}%</h2>
                    <h3>{this.state.correctAnswerNumber} correct out of {this.state.topicQuestions.length} questions</h3>
                    {this.state.topicQuestions.map((submittedQuestion) => 
                        <DisplayGrade 
                            submittedQuestion={submittedQuestion} 
                            key={submittedQuestion.id}  />
                    )}
                    </div>
            )
            
        }
        if (this.state.takingTest == true) {
            return (
                <QuizForms 
                    quizQuestions={this.state.topicQuestions} 
                    topicName={this.state.currentTopic.name}
                    handleAnswerChange={this.handleAnswerChange}
                    handleQuizSubmit={this.handleQuizSubmit} />
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

