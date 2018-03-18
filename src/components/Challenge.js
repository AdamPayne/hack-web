import React from 'react';
import Headline from './Headline';

import ipadImage from '../assets/ipad.png';

class Challenge extends React.Component {
    render() {
        return (
            <div id="challenge">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Headline>HackerRank Challenge</Headline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={ipadImage} alt="iPad 9.7" />
                        </div>
                        <div className="col-md-7" style={{paddingLeft: '25px'}}>
                            <p style={{marginTop: '34px'}}>By solving the task of the challenger and showing up at the hackathon you get the chance to win a brand new iPad 9,7"!</p>
                            <p>In order to be eligible for the reward you should follow those 3 simple steps:</p>
                            <p>
                                <ol>
                                    <li>Solve the task</li>
                                    <li>Share the <a target="_blank" href="https://www.facebook.com/events/394761527632426/">HackAUBG</a> event with hashtag #HackAUBG</li>
                                    <li>Come and participate in the hackaton</li>
                                </ol>
                            </p>
                            <p>The winner will be randomly picked and announced on Sunday, 25th March, during the final presentations of the teams. You must be able to prove that you have completed all steps 3 days prior the event to be eligible for the reward.</p>
                            <p><a target="_blank" href="https://www.hackerrank.com/hack-aubg/" className="button">HackerRank Challenge</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Challenge;