import React from 'react';
import Headline from './Headline';
import PartnersHeadline from './PartnersHeadline';

// Platinum
import documasterLogo from '../assets/partners/documaster.png';
import mobisystemsLogo from '../assets/partners/mobisystems.png';
import progressLogo from '../assets/partners/progress.png';
import sitegroundLogo from '../assets/partners/siteground.png';
import skyscannerLogo from '../assets/partners/skyscanner.png';
import sumupLogo from '../assets/partners/sumup.png';

// Gold
import droxicLogo from '../assets/partners/droxic.png';
import scalefocusLogo from '../assets/partners/scalefocus.png';

// Silver
import centroidaLogo from '../assets/partners/centroida.png';
import coresNetworksLogo from '../assets/partners/cores_networks.png';
import sapLogo from '../assets/partners/sap.png';
import sbtechLogo from '../assets/partners/sbtech.png';
import shielduiLogo from '../assets/partners/shieldui.png';
import strypesLogo from '../assets/partners/strypes.png';

// Media
import aubgDailyLogo from '../assets/partners/AUBG_Daily.png';
import auraLogo from '../assets/partners/auralogo-01.png';
import blagoevgradEuLogo from '../assets/partners/Blagoevgrad_eu.png';
import bnrBlagoevgradLogo from '../assets/partners/bnr_blagoevgrad.jpg';
import eventsMediaLogo from '../assets/partners/logo-eventsmedia.png';
import moveBgLogo from '../assets/partners/Move_bg.png';
import pamedia from '../assets/partners/logopamediа.png';
import peikaLogo from '../assets/partners/peika_bg.jpg';
import vipMagazineLogo from '../assets/partners/VIP_Magazine_logo.png';

// Industry
import telerikLogo from '../assets/partners/telerik_academy.png';
import codingGirlsLogo from '../assets/partners/coding_girls.png';


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
                                <a href="http://www.documaster.com/en"><img src={documasterLogo} alt="Documaster" /></a>
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
                                <a href="https://jobs.siteground.bg"><img src={sitegroundLogo} alt="SiteGround" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://www.skyscanner.net"><img src={skyscannerLogo} alt="Skyscanner" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://sumup.bg"><img src={sumupLogo} alt="SumUp" /></a>
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
                                <a href="http://droxic.com"><img src={droxicLogo} alt="Droxic" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="http://www.scalefocus.com"><img src={scalefocusLogo} alt="ScaleFocus" /></a>
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
                                <a href="https://www.centroida.ai"><img src={centroidaLogo} alt="Centroida" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="http://www.coresnet.bg"><img src={coresNetworksLogo} alt="Cores Networks" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://www.sap.com/bulgaria/index.html"><img src={sapLogo} alt="SAP" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://www.sbtech.com"><img src={sbtechLogo} alt="SBTech" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://www.shieldui.com"><img src={shielduiLogo} alt="Shield UI" /></a>
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
                            <PartnersHeadline color="#FF9800">Media Partners</PartnersHeadline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="http://aubgdaily.com"><img src={aubgDailyLogo} alt="AUBG Daily" /></a>
                            </div>
                        </div>
                        <div className="col-md-6  text-center">
                            <div className="partner">
                                <a href="http://www.radio-aura.org"><img src={auraLogo} alt="Radio AURA" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="http://www.blagoevgrad.eu"><img src={blagoevgradEuLogo} alt="Blagoevgrad.eu" /></a>
                            </div>
                        </div>
                        <div className="col-md-6  text-center">
                            <div className="partner">
                                <a href="http://bnr.bg/blagoevgrad"><img src={bnrBlagoevgradLogo} alt="Radio Blagoevgrad" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="https://www.eventsmedia.bg"><img src={eventsMediaLogo} alt="EventsMedia.bg" /></a>
                            </div>
                        </div>
                        <div className="col-md-6  text-center">
                            <div className="partner">
                                <a href="https://move.bg"><img src={moveBgLogo} alt="MOVE.BG" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="partner">
                                <a href="http://pa-media.net"><img src={pamedia} alt="PA Media" /></a>
                            </div>
                        </div>
                        <div className="col-md-6  text-center">
                            <div className="partner">
                                <a href="http://www.peika.bg"><img src={peikaLogo} alt="Peika.bg" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <div className="partner">
                                <a href="http://spisanievip.com"><img src={vipMagazineLogo} alt="VIP Magazine" /></a>
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