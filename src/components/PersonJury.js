import React from 'react';

import Question from './Question';
import Biography from './Biography';

class PersonJury extends React.Component {
	render() {
		return (
			<div className="person">
				<div className="photo-container">
					<img src={this.props.photo} />
				</div>
				<div className="name">{this.props.name}</div>
				<div className="position">{this.props.position}</div>
				<Biography>{this.props.biography}</Biography>
			</div>
		);
	}
}

export default PersonJury;