import React from 'react'

var Menu = React.createClass({
    render: function() {
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
    }
});

export {Menu};
