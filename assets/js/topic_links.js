import React from 'react';

export default function ModifyTopicLinks (props) {
    if (props.editTopic == false 
        && props.topicToEdit != 'select' 
        && props.topicToEdit != 'all' 
        && props.topicToEdit != '') {
        return <p><a className="topic-link">New</a><a className="topic-link">Edit</a><a className="topic-link">Delete</a></p>
    }
    else
        return <p><a className="topic-link">New</a></p>
}