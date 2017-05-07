import React from 'react';


export default class Question extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            thisQuestion: this.props.item
        }
        this.editQuestion = this.editQuestion.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    render() {
        if (this.state.edit) {
            return (
                <form className="update-question" onSubmit={this.props.updateQuestion(this.state.thisQuestion)}>
                    <input name="question" value={this.state.thisQuestion.question} onChange={this.handleChange} />
                    <input name="correctAnswer" value={this.state.thisQuestion.correctAnswer} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
            )
        }
        return (
            <div className="question-box" onClick={this.editQuestion}>
                <p>Question: {this.props.item.question}</p>
                <p>Answer: {this.props.item.correctAnswer}</p>
            </div>
        );
    }
}
