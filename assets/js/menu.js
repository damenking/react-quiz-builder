import React from 'react'



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="menu-buttons">
                <hr />
                <h3>     
                    <button onClick={this.props.setScreenState('welcome')} className="btn btn-primary">Main Menu</button>
                    <button onClick={this.props.setScreenState('addQuestion')} className="btn btn-primary">Add Question</button>
                    <button onClick={this.props.setScreenState('viewQuestions')} className="btn btn-primary">View Questions</button>
                    <button className="btn btn-primary">Take Test</button>
                    
                </h3>        
            </div>  
        );
    }

}

export {Menu};

/*render() {
        return (
            <div className="menu-buttons">
                <hr />
                <h3>     
                    <button onClick={this.props.viewWelcomeScreen} className="btn btn-primary">Main Menu</button>
                    <button onClick={this.props.addQuestionScreen} className="btn btn-primary">Add Question</button>
                    <button onClick={this.props.viewQuestionsScreen} className="btn btn-primary">View Questions</button>
                    <button className="btn btn-primary">Take Test</button>
                    
                </h3>        
            </div>  
        );
    }*/
