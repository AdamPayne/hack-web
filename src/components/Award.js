import React from 'react';

import firstPlaceCup from '../assets/cup_first_place.png';
import secondPlaceCup from '../assets/cup_second_place.png';
import thirdPlaceCup from '../assets/cup_third_place.png';

class Award extends React.Component {
	render() {
		if(this.props.place === "first") {
			return (
				<div class="award" style={{backgroundImage: `url(${firstPlaceCup})`}}>
					<div class="awardPrize">{this.props.children}</div>
				</div>
			);
		} else if (this.props.place === "second") {
			return (
				<div class="award" style={{backgroundImage: `url(${secondPlaceCup})`}}>
					<div class="awardPrize">{this.props.children}</div>
				</div>
			);
		} else if (this.props.place === "third") {
			return (
				<div class="award" style={{backgroundImage: `url(${thirdPlaceCup})`}}>
					<div class="awardPrize">{this.props.children}</div>
				</div>
			);	
		}
	}
}

export default Award;
