import React from 'react';

export default function ConfirmTopicDelete (props) {
    return (
        <div className="confirm-delete-message">
            <h4>Are you sure you want to delete this topic? All associated questions will also be deleted...</h4>
            <button onClick={props.handleDelete} type="submit" className="btn btn-danger btn-sm question-menu-buttons">Delete</button>
            <button onClick={props.handleCancelDelete} type="submit" className="btn btn-default btn-sm question-menu-buttons">Cancel</button>
        </div>       
    )
}