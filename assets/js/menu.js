import React from 'react'


export default function Menu (props) {
    return (
        <div className="menu-buttons">
            <hr />
            <h3>     
                <button onClick={props.viewWelcomeScreen} className="btn btn-primary">Main Menu</button>
                <button onClick={props.addQuestionScreen} className="btn btn-primary">Add Question</button>
                <button onClick={props.viewQuestionsScreen} className="btn btn-primary">View Questions</button>
                <button className="btn btn-primary">Take Test</button>               
            </h3>        
        </div>  
    );
}
