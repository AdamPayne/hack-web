import React from 'react';

class Headline extends React.Component {
    render() {
        return (
            <div className="headline">
                <h1>{this.props.children}</h1>
                <hr />
            </div> 
        );
    }
}

export default Headline;