import React from 'react';

export default function ModifyTopicLinks (props) {
    if (props.editTopic == false 
        && props.topicToEdit != 'select' 
        && props.topicToEdit != 'all' 
        && props.topicToEdit != '') {
        return (
            <p>
                <a className="topic-link" onClick={props.newTopicClick}>New</a>
                <a className="topic-link" onClick={props.editTopicClick}>Edit</a>
            </p>
        )
    }
    else
        return <a onClick={props.newTopicClick} className="topic-link">New</a>
}
