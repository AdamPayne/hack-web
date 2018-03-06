import React from 'react';

import YoutubeIcon from '../assets/icon_youtube.svg';
import FacebookIcon from '../assets/icon_facebook.svg';
import TwitterIcon from '../assets/icon_twitter.svg';
import InstagramIcon from '../assets/icon_instagram.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <p>&copy; HackAUBG 2018</p>
                        </div>
                        <div className="col-sm-6 text-right">
                            <div id="follow-us">
                                <h3>Follow us</h3>
                                <ul>
                                    <li><a href="https://www.facebook.com/TheHubAUBG" target="_blank"><img src={FacebookIcon} alt="Facebook" /></a></li>
                                    <li><a href="https://twitter.com/thehubaubg" target="_blank"><img src={TwitterIcon} alt="Twitter" /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UChdtBZBvaK9XZurP3GjPDug" target="_blank"><img src={YoutubeIcon} alt="Youtube" /></a></li>
                                    <li><a href="https://www.instagram.com/thehubaubg" target="_blank"><img src={InstagramIcon} alt="Instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;