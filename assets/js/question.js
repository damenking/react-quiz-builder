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
        

    handleSave(e) {
        e.preventDefault();
        this.props.updateQuestion(this.state.thisQuestion);
        this.setState({ edit: false })
    }

    render() {
        if (this.state.edit) {
            return (
                <form className="update-question" onSubmit={this.handleSave}>
                    <input name="question" value={this.state.thisQuestion.question} onChange={this.handleChange} />
                    <input name="correctAnswer" value={this.state.thisQuestion.correctAnswer} onChange={this.handleChange} />
                    <input type="submit" value="save" /><button onClick={this.handleDelete}>Delete</button>
                </form>
            )
        }
        else if (this.state.deleted) {
            return <h4>Question Deleted</h4>
        }
        return (
            <div className="question-box" onClick={this.editQuestion}>
                <p>Question: {this.props.item.question}</p>
                <p>Answer: {this.props.item.correctAnswer}</p>
            </div>
        );
    }
}
