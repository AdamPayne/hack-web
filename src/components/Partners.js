import React from 'react';
import Headline from './Headline';
import PartnersHeadline from './PartnersHeadline';

import microsoftLogo from '../assets/partners/microsoft.png';
import dreamixLogo from '../assets/partners/dreamix.png';
import scalefocusLogo from '../assets/partners/scalefocus.png';
import jobtigerLogo from '../assets/partners/jobtiger.png';
import documasterLogo from '../assets/partners/documaster.png';
import sitegroundLogo from '../assets/partners/siteground.png';
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
                            <PartnersHeadline color="#723191">General Partner</PartnersHeadline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="partner">
                                <img src={microsoftLogo} alt="Microsoft" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <PartnersHeadline color="#dbb860">Gold Partners</PartnersHeadline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <img src={dreamixLogo} alt="Dreamix" />
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <img src={scalefocusLogo} alt="ScaleFocus" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <img src={jobtigerLogo} alt="JobTiger" />
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <img src={documasterLogo} alt="Documaster" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <PartnersHeadline color="#b2b2b2">Silver Partners</PartnersHeadline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <img src={sitegroundLogo} alt="Siteground" />
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <img src={coresnetworksLogo} alt="CoresNetworks" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;