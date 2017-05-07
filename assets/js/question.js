import React from 'react';


export default class Question extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            deleted: false,
            thisQuestion: this.props.item
        }
        this.editQuestion = this.editQuestion.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleCancelEdit = this.handleCancelEdit.bind(this)
    }

    editQuestion() {
        this.setState({ edit: true})
    } 

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value;
        var question = this.state.thisQuestion
        question[name] = value
        this.setState({
            thisQuestion: question,
        })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteQuestion(this.state.thisQuestion.id)
        this.setState({ 
            edit: false,
            deleted: true })
    }
    
    handleCancelEdit(e) {
        e.preventDefault();
        this.setState({ edit: false })
    }

    handleSave(e) {
        e.preventDefault();
        this.props.updateQuestion(this.state.thisQuestion);
        this.setState({ edit: false })
    }

    render() {
        if (this.state.edit) {
            return (
                <form>
                    <div className="form-group">
                        <label htmlFor="question">Question:</label>
                        <input id="editQuestionId" name="question" className="form-control" type="text" value={this.state.thisQuestion.question} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="correctAnswer">Correct Answer:</label>
                        <input id="editCorrectAnswerId" name="correctAnswer" className="form-control" type="text" value={this.state.thisQuestion.correctAnswer} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button onClick={this.handleCancelEdit} type="submit" className="btn btn-default btn-sm question-menu-buttons">Close</button>
                        <button onClick={this.handleSave} type="submit" className="btn btn-primary btn-sm question-menu-buttons">Save</button>
                        <button onClick={this.handleDelete} type="subtmi" className="btn btn-danger btn-sm question-menu-buttons">Delete</button>
                    </div>
                </form>
            )
        }
        else if (this.state.deleted) {
            return (
                <div>
                    <hr />
                    <h4 className="deleted-question-message">Question Deleted</h4>
                </div>
            )
        }
        return (
            <div className="question-box" onClick={this.editQuestion}>
                <hr />
                <strong>Question:</strong>
                <p>{this.props.item.question}</p>
                <strong>Answer:</strong>
                <p>{this.props.item.correctAnswer}</p>        
            </div>
        );
    }
}
