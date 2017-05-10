import React from 'react';

class Welcome extends React.Component{
    render() {
        return (
            <div className="welcome-info">
                <h1>Quiz Builder App</h1>
                <h4>
                This app is designed to be used as a study tool.  With it, you can enter questions under a specific 'topic'.
                You are then able to take a test on a specific topic and receive summary results on how you did.
                </h4>
            </div>
        );
    }
};

export {Welcome};

