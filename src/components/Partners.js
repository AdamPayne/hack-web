import React from 'react';
import Headline from './Headline';
import PartnersHeadline from './PartnersHeadline';

// Platinum
import experianLogo from '../assets/partners/experian.png';
import mobisystemsLogo from '../assets/partners/mobisystems.png';
import progressLogo from '../assets/partners/progress.png';
import sitegroundLogo from '../assets/partners/siteground.png';
import skyscannerLogo from '../assets/partners/skyscanner.png';

// Gold
import droxicLogo from '../assets/partners/droxic.png';

// Silver
import coresNetworksLogo from '../assets/partners/cores_networks.png';
import strypesLogo from '../assets/partners/strypes.png';

// Industry
import codingGirlsLogo from '../assets/partners/coding_girls.png';
import scalefocusLogo from '../assets/partners/scalefocus.png';
import documasterLogo from '../assets/partners/documaster.png';

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
                                <a href="https://www.experian.com"><img src={experianLogo} alt="Experian" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://www.mobisystems.com"><img src={mobisystemsLogo} alt="MobiSystems" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://www.progress.com"><img src={progressLogo} alt="Progress" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://www.siteground.com"><img src={sitegroundLogo} alt="SiteGround" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <div className="partner">
                                <a href="https://www.skyscanner.net"><img src={skyscannerLogo} alt="Skyscanner" /></a>
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
                                <a href="http://droxic.com"><img src={droxicLogo} alt="Droxic" /></a>
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
                                <a href="http://www.coresnet.bg"><img src={coresNetworksLogo} alt="Cores Networks" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://strypes.eu"><img src={strypesLogo} alt="Strypes" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <PartnersHeadline color="#2196F3">Industry Partners</PartnersHeadline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <div className="partner">
                                <a href="https://www.coding-girls.com"><img src={codingGirlsLogo} alt="Coding Girls" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;