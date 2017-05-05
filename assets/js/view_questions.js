var React = require('react')
var ReactDOM = require('react-dom')

var ViewQuestions = React.createClass({
    loadQuestionsFromServer: function(){
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadQuestionsFromServer();
    }, 
    render: function() {
        if (this.state.data) {
            var questionList = this.state.data.map(function(question){
                return <li key={question.id}>Question: {question.question}<br />Answer: {question.correctAnswer}</li>
            })
        }
        return (
            <div>
                <h1>Question List</h1>
                <ul>
                    {questionList}
                </ul>
            </div>
        )
    }
})

export {ViewQuestions};