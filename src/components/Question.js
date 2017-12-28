import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            expanded: 'false',
        }
        this.handleQuestion = this.handleQuestion.bind(this);
    }
    handleQuestion() {
        const item = document.getElementById(this.props.id);
        const answer = item.getElementsByClassName('answer');
        if(this.state.expanded === 'true') {
            answer[0].style.display = 'none';
            this.setState({expanded: 'false'});
        } else {
            answer[0].style.display = 'block';          
            this.setState({expanded: 'true'});
        }
    }
    componentDidMount() {
        const item = document.getElementById(this.props.id);
        const question = item.getElementsByClassName('question');
        question[0].addEventListener('click', this.handleQuestion);
    }
    render() {
        return (
            <div id={this.props.id} className="item">
                <div className="question">{this.props.question}</div>
                <div className="answer">{this.props.answer}</div>
            </div>
        );
    }
}

export default Question;