import React from 'react';
import axios from 'axios';
import SaveSuccessMessage from './saved_question_success_msg';
import AddQuestionFormAddOn from './add_question_form_addon';
import SelectTopic from './select_topic';


export default class AddQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            saveSuccess: false,
            savedQuestion: '',
            newQuestion: '',
            newCorrectAnswer: '',
            newQuestionType: '',
            newIncorrectAnswer1: '',
            newIncorrectAnswer2: '',
            newIncorrectAnswer3: '',
            topicSelect: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTopicChange = this.handleTopicChange.bind(this)
    }

    handleChange(event) {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value,
        });
    }

    sendQuestionToServer(newQuestion){
        axios({
            method: 'post',
            url: this.props.url,
            
            data: {
                question: newQuestion.question,
                correctAnswer: newQuestion.correctAnswer,
                questionTopic: newQuestion.questionTopic,
                questionType: newQuestion.questionType,
                incorrectAnswer1: newQuestion.incorrectAnswer1,
                incorrectAnswer2: newQuestion.incorrectAnswer2,
                incorrectAnswer3: newQuestion.incorrectAnswer3
            },
            xsrfHeaderName: "X-CSRFTOKEN",
        })
        .then(response => {
            this.setState({ 
                saveSuccess: true,
                newQuestion: '',
                newCorrectAnswer: '',
                newIncorrectAnswer1: '',
                newIncorrectAnswer2: '',
                newIncorrectAnswer3: '', 
            })
        })
        .catch(error => {
            this.setState({ saveSuccess: false })
        })
    }
    
    ////////////////// one select behind...
    handleTopicChange(newTopicSelect) {
        this.setState({topicSelect: newTopicSelect});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        var newQuestion = this.state.newQuestion;
        var newQuestionType = this.state.newQuestionType;
        var newCorrectAnswer = this.state.newCorrectAnswer;
        var newQuestionTopic = this.state.topicSelect;
        var newIncorrectAnswer1 = this.state.newIncorrectAnswer1;
        var newIncorrectAnswer3 = this.state.newIncorrectAnswer3;

        this.sendQuestionToServer({
            question: newQuestion,
            questionType: newQuestionType,
            correctAnswer: newCorrectAnswer,
            questionTopic: newQuestionTopic,
            incorrectAnswer1: newIncorrectAnswer1,
            incorrectAnswer2: newIncorrectAnswer2,
            incorrectAnswer3: newIncorrectAnswer3
        });
        this.setState({
            savedQuestion: newQuestion,        
        });
    }

    render() {
        return (
            <div>
                <h2>Add Question</h2>
                <form>
                    <SelectTopic 
                        topicSelect={this.state.topicSelect} 
                        changeTopic={this.handleTopicChange}
                        currentScreen='addQuestion' 
                        url="/quiz_builder/api/topics/" />
                    <div className="form-group">
                        <label htmlFor="newQuestion">Question:</label>
                        <input 
                            id="newQuestionId" 
                            className="form-control" 
                            name="newQuestion" type="text" 
                            value={this.state.newQuestion} 
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newQuestionType">Question Type:</label><br />
                        <input type="radio" name="newQuestionType" value="trueOrFalse" onChange={this.handleChange} /> True/False<br />
                        <input type="radio" name="newQuestionType" value="multipleChoice" onChange={this.handleChange} /> Multiple Choice<br />
                        <input type="radio" name="newQuestionType" value="freeForm" onChange={this.handleChange} /> Freeform
                    </div>
                    <AddQuestionFormAddOn 
                        newQuestionType={this.state.newQuestionType} 
                        newCorrectAnswer={this.state.newCorrectAnswer}
                        newIncorrectAnswer1={this.state.newIncorrectAnswer1}
                        newIncorrectAnswer2={this.state.newIncorrectAnswer2}
                        newIncorrectAnswer3={this.state.newIncorrectAnswer3} 
                        handleChange={this.handleChange} />
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Save</button>
                </form>
                <SaveSuccessMessage savedQuestion={this.state.savedQuestion} saveSuccess={this.state.saveSuccess } />
            </div>
        );
    }
}
