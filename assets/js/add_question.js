import React from 'react';




// export {AddQuestion};

var AddQuestion = React.createClass({
    getInititalState: function() {
        return {
            question: "questionstate",
            answer: "answerstate"
        }
    },
    handleChange(event) {
        var name = event.target.name
        var value = event.target.value

        this.setState({
            [name]: value
        });
    },

    // sendQuestionToServer: function(newQuestion){
    //     $.ajax({
    //         type: "POST",
    //         url: this.props.url,
    //         datatype: 'json',
    //         data: newQuestion,
    //     })
    // },
    
    // axios npm package for making api post requests

    handleSubmit: function(e) {
    //prevent the default behavior of submitting a form??
    e.preventDefault();
    var newQuestion = this.state.question;
    var newAnswer = this.state.answer;

    this.addQuestionToServer({
        question: newQuestion,
        answer: newAnswer
    });
    this.setState({
        question: "",
        answer: ""
    });
    },

    render: function() {
        console.log(this.state);
        return (
            <form className="add-question" onSubmit={this.handleSubmit}>
                <h2>Add Question</h2>
                <input name="question" type="text" value={this.state.question} onChange={this.handleChange} required={true} />
                <br />
                <input name="answer" type="text" value={this.state.answer} onChange={this.handleChange} required={true} />
                <br />
                <input type="submit" value="submit" />
            </form>
        );
    }
});

export {AddQuestion};
