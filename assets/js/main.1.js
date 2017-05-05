import React from 'react';

import {Welcome} from './welcome';
import {ViewQuestions} from './view_questions';
import {Menu} from './menu';
import {AddQuestion} from './add_question';

class MainWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentScreen: 'welcome',
        }
    }



    // use es6 constructor to build classes and state null will be fixed.

    viewQuestionsScreen() {
        this.setState({ currentScreen: 'viewQuestions' })
    }

    viewWelcomScreen() {
        this.setState({ currentScree: 'welcome'})
    }

    addQuestionScreen() {
        this.setState({ currentScreen: 'addQuestion'})
    }

    render() {
        if (this.state.currentScreen == 'welcome') {
            return (
             <div className="well main-window container">
                    <Welcome />
                    <Menu viewWelcomeScreen={this.viewWelcomeScreen} viewQuestionsScreen={this.viewQuestionsScreen} addQuestionScreen={this.addQuestionScreen} />
                </div>   
            )
        }
        else if (this.state.currentScreen == 'viewQuestions') {
            return (
                <div className="well main-window container">
                    <ViewQuestions url="/api/questions/" />
                    <Menu viewWelcomeScreen={this.viewWelcomeScreen} viewQuestionsScreen={this.viewQuestionsScreen} addQuestionScreen={this.addQuestionScreen} />
                </div>
            )
        }
        else if (this.state.currentScreen == 'addQuestion') {
            return (
                <div className="well main-window container">
                    <AddQuestion url="/api/questions/" />
                    <Menu viewWelcomeScreen={this.viewWelcomeScreen} viewQuestionsScreen={this.viewQuestionsScreen} addQuestionScreen={this.addQuestionScreen} />
                </div>
            )
        }         
    }

} 

export default MainWindow;




