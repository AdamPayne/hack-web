import React from 'react';
import ReactDOM from 'react-dom';

class Biography extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'false',
        }
        this.handleBio = this.handleBio.bind(this);
        this.renderBio = this.renderBio.bind(this);
    }
    handleBio() {
        if(this.state.expanded === 'true') {
            this.setState({expanded: 'false'});
        } else {        
            this.setState({expanded: 'true'});
        }
    }
    renderBio() {
        if(this.state.expanded === 'false') {
            return (
                <div className="bio-headline">Biography</div>
            );
        } else {
            return (
                <div>
                    <div className="bio-headline">Biography</div>
                    <div className="bio">{this.props.children}</div>
                </div>
            );
        }
    }
    render() {
        return (
            <div id={this.props.id} className="item" onClick={this.handleBio}>
                {this.renderBio()}
            </div>
        );
    }
}

export default Biography;