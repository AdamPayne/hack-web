import React from 'react';
import iconError from '../assets/icon_error.svg';
import iconSuccess from '../assets/icon_success.svg';

class Alert extends React.Component {
	renderMessage() {
		if (this.props.type === 'error') {
			return (
			<div className="error-alert">
				<img src={iconError} alt="Error Icon" />
				<p>{this.props.children}</p>
			</div>
			);
		} else if (this.props.type === "success") {
			return (
			<div className="success-alert">
				<img src={iconSuccess} alt="Success Icon" />
				<p>{this.props.children}</p>
			</div>
			);
		}
	}
	render() {
		return (
			<div className="alert-message">
				{this.renderMessage()}
			</div>
		);
	}
}

export default Alert;