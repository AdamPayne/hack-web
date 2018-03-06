import React from 'react';

import Person from './Person';
import Headline from './Headline';
import Question from './Question';

import samplePhoto from '../assets/sample.jpg';

class Jury extends React.Component {
	render() {
		return (
			<div className="container" id="jury">
				<div className="row">
					<div className="col-md-12">
						<Headline>Jury</Headline>
                    </div>
                </div>
				<div className="row">
					<Person photo={samplePhoto} name="John Doe" position="Senior Developer">Biography is a long text.</Person>
					<Person photo={samplePhoto} name="John Doe" position="Senior Developer">Biography is a long text.</Person>
					<Person photo={samplePhoto} name="John Doe" position="Senior Developer">Biography is a long text.</Person>
					<Person photo={samplePhoto} name="John Doe" position="Senior Developer">Biography is a long text.</Person>
				</div>
			</div>
		);
	}
}

export default Jury;