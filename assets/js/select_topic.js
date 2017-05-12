import React from 'react';
import axios from 'axios';
import ModifyTopicLinks from './topic_links';
import EditTopicForm from './topic_form';
import ConfirmTopicDelete from './confirm_topic_delete';

export default class SelectTopic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topics: [],
            editTopic: false,
            newTopic: false,
            confirmDelete: false,
            topicSelectId: '',
            topicSelectName: '',
        }
        this.loadTopicsFromServer = this.loadTopicsFromServer.bind(this)
        this.handleTopicChange = this.handleTopicChange.bind(this)
        this.editTopicClick = this.editTopicClick.bind(this)
        this.newTopicClick = this.newTopicClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleCancelEdit = this.handleCancelEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.confirmDelete = this.confirmDelete.bind(this)
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

////////// one select behind...
    handleTopicChange(event) {
        var value = event.target.value;
        console.log("event variable: ", value)
        console.log("pre setstate state selectTopic: ", this.state.topicSelectId)
        this.setState({topicSelectId: value});
        console.log("post setstate state selectTopic: ", this.state.topicSelectId)
        this.props.changeTopic(value)
        this.state.topics.forEach(topic => {
            if (topic.id == value)
                this.setState({topicSelectName:topic.name})
        })
    }

    editTopicClick() {
        this.setState({editTopic:true})
    }

    newTopicClick() {
        this.setState({
            newTopic:true,
            editTopic:true,
            topicSelectId:'',
        })
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value,
        })
        console.log(this.state)
    }

    confirmDelete(e) {
        e.preventDefault();
        this.setState({confirmDelete:true})
    }

    handleDelete(e) {
        e.preventDefault();
        // this.props.deleteQuestion(this.state.thisQuestion.id)
        this.setState({ 
            editTopic:false,
            newTopic:false,
            topicSelectId:'',
            topicSelectName:'',
            confirmDelete:false,
        })
    }

    handleCancelEdit(e) {
        e.preventDefault();
        this.setState({
            editTopic:false,
            newTopic:false,
            topicSelectId:'',
            topicSelectName:'',
            confirmDelete:false,
         })
    }

    handleSave(e) {
        e.preventDefault();
        //this.updateTopic(this.state.thisQuestion);
        this.setState({
            edit:false,
            newTopic:false,
            topicSelectId:'',
            topicSelectName:'',
            })
    }

    render() {
        if (this.state.confirmDelete) {
            return (
                <ConfirmTopicDelete handleDelete={this.handleDelete} handleCancelDelete={this.handleCancelEdit} />
            )
        }
        if (this.state.editTopic) {
            return (
                <EditTopicForm 
                    newTopic={this.state.newTopic} 
                    handleChange={this.handleChange} 
                    topicSelectName={this.state.topicSelectName}
                    handleCancelEdit={this.handleCancelEdit}
                    handleSave={this.handleSave}
                    confirmDelete={this.confirmDelete} />
            )
        }

        if (this.props.currentScreen == "viewQuestions") {
            return (
                <div className="form-group">
                    <label>Topic:</label>
                    <select 
                        id="topicSelectIdId" 
                        name="topicSelectId" 
                        className="form-control topic-select" 
                        onChange={this.handleTopicChange} 
                        value={this.state.topicSelectId}>
                        <option className="emphasize-select" value="select">Select..</option>
                    {this.state.topics.map((topic) =>
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    )}
                        <option className="emphasize-select" value="all">View All..</option>
                    </select>
                    <ModifyTopicLinks 
                        editTopic={this.state.editTopic} 
                        newTopic={this.state.newTopic} 
                        topicToEdit={this.state.topicSelectId}
                        editTopicClick={this.editTopicClick}
                        newTopicClick={this.newTopicClick} />
                </div>
            )
        }
        else if (this.props.currentScreen == "addQuestion") {
            return (
                <div className="form-group">
                    <label>Topic:</label>
                    <select 
                        id="topicSelectIdId" 
                        name="topicSelectId" 
                        className="form-control topic-select" 
                        onChange={this.handleTopicChange}
                        value={this.state.topicSelectId}>
                        <option className="emphasize-select" value="select">Select..</option>
                    {this.state.topics.map((topic) =>
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    )}
                    </select>
                    <ModifyTopicLinks 
                        editTopic={this.state.editTopic} 
                        newTopic={this.state.newTopic} 
                        topicToEdit={this.state.topicSelectId}
                        editTopicClick={this.editTopicClick}
                        newTopicClick={this.newTopicClick} />
                </div>
            )
        }
    }
}




