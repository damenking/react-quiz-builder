import React from 'react';

export default function SaveSuccessMessage (props) {
    if (props.savedQuestion && props.saveSuccess) {
        return <h4 className="question-save-success-message">Question "{props.savedQuestion}" successfully saved!</h4>
    }
    else if (props.savedQuestion && !props.saveSuccess) {
        return <h4 className="question-save-failur-message">Question "{props.savedQuestion}" failed to save.</h4>
    }
    return <div></div>
}