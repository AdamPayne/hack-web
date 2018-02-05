import React from 'react';
import Headline from './Headline';

class AboutTheEvent extends React.Component {
    render() {
        return (
            <div id="about-the-event">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Headline>About HackAUBG</Headline>
                            <p>HackAUBG is the second hackathon to take place on the campus of the American University in Bulgaria after HackBlagoevgrad which happened in November of 2016. Much like it, HackAUBG is aimed at uniting the IT community in the city of Blagoevgrad and beyond. The chief organizing body behind the new hackathon is the Computer Science and IT Entrepreneurship club of AUBG, namely The Hub, along with the Coding Girls chapter to the university. </p>
                            <p>We are a small group of young and ambitious students, who again want to introduce to our university the fever of hosting a significant IT event. We further believe that getting together with like-minded individuals to exchange experience and ideas is the key ingredient needed to sparkle innovation and entrepreneurship into the minds and hearts of fellow enthusiasts.</p>
                            <p>Stay tuned for updates about the hackathon on this website and on our facebook page.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutTheEvent;