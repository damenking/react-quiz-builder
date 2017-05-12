import React from 'react';

export default function EditTopic (props) {
    if (props.editTopic == false) {
        return <p><a className="topic-link">Edit</a><a className="topic-link">Delete</a></p>
    }
}