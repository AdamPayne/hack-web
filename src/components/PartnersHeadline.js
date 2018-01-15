import React from 'react';

class PartnersHeadline extends React.Component {
    render() {
        return (
            <div className="partners-headline">
                <h1 style={{color: this.props.color}}>{this.props.children}</h1>
                <hr style={{borderColor: this.props.color}} />
            </div> 
        );
    }
}

export default PartnersHeadline;