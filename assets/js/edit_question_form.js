import React from 'react';

export default function EditQuestion (props) {
    if (props.thisQuestion.questionType == "freeForm")
        return (
            <form>
                <hr />
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <input 
                        id="editQuestionId" 
                        name="question" 
                        className="form-control" 
                        type="text" 
                        value={props.thisQuestion.question} 
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="correctAnswer">Correct Answer:</label>
                    <input 
                        id="editCorrectAnswerId" 
                        name="correctAnswer" 
                        className="form-control" 
                        type="text" 
                        value={props.thisQuestion.correctAnswer} 
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <button onClick={props.handleCancelEdit} type="submit" className="btn btn-default btn-sm question-menu-buttons">Close</button>
                    <button onClick={props.handleSave} type="submit" className="btn btn-primary btn-sm question-menu-buttons">Save</button>
                    <button onClick={props.handleDelete} type="submit" className="btn btn-danger btn-sm question-menu-buttons">Delete</button>
                </div>
            </form>
        )
    else if (props.thisQuestion.questionType == "trueOrFalse") {
        return (
            <form>
                <hr />
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <input 
                        id="editQuestionId" 
                        name="question" 
                        className="form-control" 
                        type="text" 
                        value={props.thisQuestion.question} 
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="correctAnswer">Correct Answer:</label>
                    <br />
                    <input 
                        name="correctAnswer" 
                        type="radio" value='true' 
                        onChange={props.handleChange} 
                        checked={props.thisQuestion.correctAnswer == 'true'} /> True
                    <br />
                    <input 
                        name="correctAnswer" 
                        type="radio" value='false' 
                        onChange={props.handleChange} 
                        checked={props.thisQuestion.correctAnswer == 'false'} /> False
                </div>
                <div className="form-group">
                    <button onClick={props.handleCancelEdit} type="submit" className="btn btn-default btn-sm question-menu-buttons">Close</button>
                    <button onClick={props.handleSave} type="submit" className="btn btn-primary btn-sm question-menu-buttons">Save</button>
                    <button onClick={props.handleDelete} type="subtmi" className="btn btn-danger btn-sm question-menu-buttons">Delete</button>
                </div>
            </form>
        )
    }
    else if (props.thisQuestion.questionType == "multipleChoice")
        return (
            <form>
                <hr />
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <input 
                        id="editQuestionId" 
                        name="question" 
                        className="form-control" 
                        type="text" 
                        value={props.thisQuestion.question} 
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="correctAnswer">Correct Answer:</label>
                    <input 
                        id="editCorrectAnswerId" 
                        name="correctAnswer" 
                        className="form-control" 
                        type="text" 
                        value={props.thisQuestion.correctAnswer} 
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <label>Incorrect Answers:</label>
                    <input 
                        id="incorrectAnswer1Id" 
                        name="incorrectAnswer1" 
                        className="form-control" 
                        type="text" 
                        value={props.thisQuestion.incorrectAnswer1} 
                        onChange={props.handleChange} />
                    <input 
                        id="incorrectAnswer2Id" 
                        name="incorrectAnswer2" 
                        className="form-control" 
                        type="text" 
                        value={props.thisQuestion.incorrectAnswer2} 
                        onChange={props.handleChange} />
                    <input 
                        id="incorrectAnswer3Id" 
                        name="incorrectAnswer3" 
                        className="form-control" 
                        type="text" 
                        value={props.thisQuestion.incorrectAnswer3} 
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <button onClick={props.handleCancelEdit} type="submit" className="btn btn-default btn-sm question-menu-buttons">Close</button>
                    <button onClick={props.handleSave} type="submit" className="btn btn-primary btn-sm question-menu-buttons">Save</button>
                    <button onClick={props.handleDelete} type="submit" className="btn btn-danger btn-sm question-menu-buttons">Delete</button>
                </div>
            </form>
        )
}