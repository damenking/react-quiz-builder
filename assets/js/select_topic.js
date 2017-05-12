import React from 'react';
import axios from 'axios';
import ModifyTopicLinks from './topic_links';

export default class SelectTopic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topics: [],
            editTopic: false,
            topicSelect: '',
        }
        this.loadTopicsFromServer = this.loadTopicsFromServer.bind(this)
        this.handleTopicChange = this.handleTopicChange.bind(this)
    }

    loadTopicsFromServer(){
        axios({
            method: 'get',
            url: this.props.url,
        }).then(response => {
            this.setState({
                topics: response.data
            })
        })
    }

    componentDidMount() {
        this.loadTopicsFromServer();
    }

    handleTopicChange(event) {
        var value = event.target.value;
        console.log("event variable: ", value)
        console.log("pre setstate state selectTopic: ", this.state.topicSelect)
        this.setState({
            topicSelect: event.target.value,
        });
        console.log("post setstate state selectTopic: ", this.state.topicSelect)
        if (this.props.currentScreen == "viewQuestions") {
            this.props.changeTopic(this.state.topicSelect)
        }
    }

    render() {
        

        if (this.props.currentScreen == "viewQuestions") {
            return (
                <div className="form-group">
                    <label>Topic:</label>
                    <select 
                        id="topicSelectId" 
                        name="topicSelect" 
                        className="form-control topic-select" 
                        onChange={this.handleTopicChange} 
                        value={this.state.topicSelect}>
                        <option className="emphasize-select" value="select">Select..</option>
                    {this.state.topics.map((topic) =>
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    )}
                        <option className="emphasize-select" value="all">View All..</option>
                    </select>
                    <ModifyTopicLinks editTopic={this.state.editTopic} topicToEdit={this.state.topicSelect}/>
                </div>
            )
        }
        else if (this.props.currentScreen == "addQuestion") {
            return (
                <div className="form-group">
                    <label>Topic:</label>
                    <select 
                        id="topicSelectId" 
                        name="topicSelect" 
                        className="form-control topic-select" 
                        onChange={this.handleTopicChange}
                        value={this.state.topicSelect}>
                        <option className="emphasize-select" value="select">Select..</option>
                    {this.state.topics.map((topic) =>
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    )}
                    </select>
                    <ModifyTopicLinks editTopic={this.state.editTopic} topicToEdit={this.state.topicSelect}/>
                </div>
            )
        }
    }
}




