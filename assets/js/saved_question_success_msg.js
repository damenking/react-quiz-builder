import React from 'react';

export default function SaveSuccessMessage (props) {
    if (props.savedQuestion) {
        return <h4 className="question-save-success-message">Question "{props.savedQuestion}" successfully saved!</h4>
    }
    return <div></div>
}