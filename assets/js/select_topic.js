import React from 'react';
import axios from 'axios';
import EditTopic from './topic_form';

export default class SelectTopic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topics: [],
            editTopic: false,
        }
        this.loadTopicsFromServer = this.loadTopicsFromServer.bind(this)
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

    render() {
        if (this.props.currentScreen == "viewQuestions") {
            return (
                <div className="form-group">
                    <label>Topic:</label>
                    <select 
                        id="topicSelectId" 
                        name="topicSelect" 
                        className="form-control topic-select" 
                        onChange={this.props.handleChange} 
                        value={this.props.topicSelect}>
                        <option className="emphasize-select">Select..</option>
                    {this.state.topics.map((topic) =>
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    )}
                        <option className="emphasize-select" value="all">View All..</option>
                    </select>
                    <EditTopic editTopic={this.state.editTopic}/>
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
                        onChange={this.props.handleChange} 
                        value={this.props.topicSelect}>
                        <option className="emphasize-select">Select..</option>
                    {this.state.topics.map((topic) =>
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    )}
                        <option className="emphasize-select" value="new">New Topic..</option>
                    </select>
                    <EditTopic editTopic={this.state.editTopic}/>
                </div>
            )
        }
        else {
            return <h1>hmmm</h1>
        }
    }
}




