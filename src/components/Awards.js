import React from 'react';
import Headline from './Headline';

import Award from './Award';

class Awards extends React.Component {
    render() {
        return (
            <div id="awards">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Headline>Awards</Headline>
							<div className="col-md-4">
								<Award place="first">3000 BGN</Award>
							</div>
							<div className="col-md-4">
								<Award place="second">2000 BGN</Award>
							</div>
							<div className="col-md-4">
								<Award place="third">1000 BGN</Award>
							</div>
                       	</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Awards;
