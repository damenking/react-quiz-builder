import React from 'react';


export default function EditTopicForm (props){
    if (props.newTopic) {
        return (
            <div>
                <hr />
                <div className="form-group">
                    <label htmlFor="question">Topic Name:</label>
                    <input 
                        id="newTopicId" 
                        name="topicSelectName" 
                        className="form-control topic-select" 
                        type="text"
                        value={props.topicSelectName}
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <button onClick={props.handleCancelEdit} type="submit" className="btn btn-default btn-sm question-menu-buttons">Close</button>
                    <button type="submit" className="btn btn-primary btn-sm question-menu-buttons">Save</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <hr />
                <div className="form-group">
                    <label htmlFor="question">Topic Name:</label>
                    <input 
                        id="newTopicId" 
                        name="topicSelectName" 
                        className="form-control topic-select" 
                        type="text"
                        value={props.topicSelectName}
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <button onClick={props.handleCancelEdit} type="submit" className="btn btn-default btn-sm question-menu-buttons">Close</button>
                    <button onClick={props.handleSave} type="submit" className="btn btn-primary btn-sm question-menu-buttons">Save</button>
                    <button onClick={props.confirmDelete} type="submit" className="btn btn-danger btn-sm question-menu-buttons">Delete</button>
                </div>
            </div>
        )
    }
}

