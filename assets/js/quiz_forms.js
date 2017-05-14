import React from 'react';
import QuizQuestionForm from './quiz_question_form';

export default class QuizForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gradedQuestions: {},
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
            </div>
        )
    }

}


