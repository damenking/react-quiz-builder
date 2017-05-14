import React from 'react';
import axios from 'axios';
import Question from './question';
import SelectTopic from './select_topic';


export default class LoadQuizQuestions extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
            topicQuestions: [],
        };
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
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

    render() {
        return (
            <div>
                <h2>Take Quiz</h2>
                <h4>Please select a topic to be quized on</h4>
                <SelectTopic 
                        topicSelect={this.state.topicSelect} 
                        changeTopic={this.filterQuestionsByTopic}
                        currentScreen='viewQuestions' 
                        url="/api/topics/" />
            </div>
        );
    }
}

