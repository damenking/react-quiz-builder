import React from 'react';

import {Welcome} from './welcome';
import {ViewQuestions} from './view_questions';
import {Menu} from './menu';
import {AddQuestion} from './add_question';

var MainWindow = React.createClass({
    getInitialState: function() {
        return { currentScreen: 'welcome' }
    },

    viewQuestionsScreen: function() {
    this.setState({ currentScreen: 'viewQuestions' })
    }, 
    viewWelcomeScreen: function() {
        this.setState({ currentScreen: 'welcome' })
    }, 
    addQuestionScreen: function() {
        this.setState({ currentScreen: 'addQuestion'})
    },


    render: function() {
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
});

export {MainWindow};




