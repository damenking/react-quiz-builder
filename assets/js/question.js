import React from 'react';
import EditQuestion from './edit_question_form';
import ViewQuestion from './view_question_instance';


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
                <EditQuestion 
                    thisQuestion={this.state.thisQuestion}
                    handleCancelEdit={this.handleCancelEdit}
                    handleChange={this.handleChange}
                    handleSave={this.handleSave}
                    handleDelete={this.handleDelete} />
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
        return <ViewQuestion editQuestion={this.editQuestion} thisQuestion={this.state.thisQuestion} />
    }
}
