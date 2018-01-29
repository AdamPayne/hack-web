import React from 'react';
import Headline from './Headline';
import PartnersHeadline from './PartnersHeadline';

import sitegroundLogo from '../assets/partners/siteground.png';
import skyscannerLogo from '../assets/partners/skyscanner.png';
import droxicLogo from '../assets/partners/droxic.png';
import scalefocusLogo from '../assets/partners/scalefocus.png';
import documasterLogo from '../assets/partners/documaster.png';
import coresnetworksLogo from '../assets/partners/coresnetworks.png';

class Partners extends React.Component {
    render() {
        return (
            <div id="partners">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Headline>Partners</Headline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <PartnersHeadline color="#91a3b0">Platinum Partners</PartnersHeadline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <img src={sitegroundLogo} alt="SiteGround" />
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <img src={skyscannerLogo} alt="Skyscanner" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <PartnersHeadline color="#dbb860">Gold Partners</PartnersHeadline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <div className="partner">
                                <img src={droxicLogo} alt="Droxic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;