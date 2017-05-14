import React from 'react';
import QuizQuestionForm from './quiz_question_form';

export default class QuizForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var quizTopic = this.props.topicName
        return (
            <div>
                <h2>'{quizTopic}' Quiz</h2>
                {this.props.quizQuestions.map((question) =>
                    <QuizQuestionForm 
                        thisQuestion={question}
                        questionIndex={this.props.quizQuestions.indexOf(question)} 
                        key={question.id} 
                        handleAnswerChange={this.props.handleAnswerChange}
                        />
                )}
                <br />
                <br />
                <button onClick={this.props.handleQuizSubmit} type="button" className="btn btn-success btn-lg">Submit</button>
                <br />
            </div>
        )
    }

}


