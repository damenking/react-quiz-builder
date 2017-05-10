import React from 'react';
import axios from 'axios';


export default class SelectTopic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topics: [],
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
        return (
            <div className="form-group">
                <label>Topic:</label>
                <select 
                    id="topicSelectId" 
                    name="topicSelect" 
                    className="form-control topic-select" 
                    onChange={this.props.handleChange} 
                    value={this.props.topicSelect}>
                    <option>Select..</option>
                {this.state.topics.map((topic) =>
                    <option key={topic.id} value={topic.id}>{topic.name}</option>
                )}
                </select>
            </div>
        )
    }

}


