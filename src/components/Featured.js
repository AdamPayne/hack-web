import React from 'react';

import FeaturedGraphic from './FeaturedGraphic';

class Featured extends React.Component {
    render() {
        return (
            <div id="featured">
                <div id="featured-overlay">
                    <div className="container">
                        <div className="row">
                            <FeaturedGraphic />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;
