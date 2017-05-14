import React from 'react';

import Welcome from './welcome';
import ViewQuestions from './view_questions';
import Menu from './menu';
import AddQuestion from './add_question';
import LoadQuizQuestions from './load_quiz_questions';


export default class MainWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentScreen: 'welcome',
        }
        this.viewQuestionsScreen = this.viewQuestionsScreen.bind(this)
        this.viewWelcomeScreen = this.viewWelcomeScreen.bind(this)
        this.addQuestionScreen = this.addQuestionScreen.bind(this)
        this.takeQuizScreen = this.takeQuizScreen.bind(this)
    }

    viewQuestionsScreen() {
        this.setState({ currentScreen: 'viewQuestions' })
    }
    viewWelcomeScreen() {
        this.setState({ currentScreen: 'welcome' })
    }
    addQuestionScreen() {
        this.setState({ currentScreen: 'addQuestion'})
    }
    takeQuizScreen() {
        this.setState({ currentScreen: 'takeQuiz'})
    }

    render() {
        if (this.state.currentScreen == 'welcome') {
            return (
             <div className="well main-window container">
                    <Welcome />
                    <Menu 
                        takeQuizScreen={this.takeQuizScreen} 
                        viewWelcomeScreen={this.viewWelcomeScreen} 
                        viewQuestionsScreen={this.viewQuestionsScreen} 
                        addQuestionScreen={this.addQuestionScreen} />
                </div>   
            )
        }
        else if (this.state.currentScreen == 'viewQuestions') {
            return (
                <div className="well main-window container">
                    <ViewQuestions url="/api/questions/" />
                    <Menu 
                        takeQuizScreen={this.takeQuizScreen} 
                        viewWelcomeScreen={this.viewWelcomeScreen} 
                        viewQuestionsScreen={this.viewQuestionsScreen} 
                        addQuestionScreen={this.addQuestionScreen} />
                </div>
            )
        }
        else if (this.state.currentScreen == 'addQuestion') {
            return (
                <div className="well main-window container">
                    <AddQuestion url="/api/questions/" />
                    <Menu 
                        takeQuizScreen={this.takeQuizScreen} 
                        viewWelcomeScreen={this.viewWelcomeScreen} 
                        viewQuestionsScreen={this.viewQuestionsScreen} 
                        addQuestionScreen={this.addQuestionScreen} />
                </div>
            )
        }
        else if (this.state.currentScreen == 'takeQuiz') {
            return (
                <div className="well main-window container">
                    <LoadQuizQuestions url="/api/questions/" />
                    <Menu 
                        takeQuizScreen={this.takeQuizScreen} 
                        viewWelcomeScreen={this.viewWelcomeScreen} 
                        viewQuestionsScreen={this.viewQuestionsScreen} 
                        addQuestionScreen={this.addQuestionScreen} />
                </div>
            )
        }         
    }
}






