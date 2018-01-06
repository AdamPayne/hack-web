import React from 'react';

import YoutubeIcon from '../assets/icon_youtube.svg';
import FacebookIcon from '../assets/icon_facebook.svg';
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
                                    <li><a href="https://www.facebook.com/TheHubAUBG"><img src={FacebookIcon} alt="Facebook" /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UChdtBZBvaK9XZurP3GjPDug"><img src={YoutubeIcon} alt="Youtube" /></a></li>
                                    <li><a href="https://www.instagram.com/thehubaubg"><img src={InstagramIcon} alt="Instagram" /></a></li>
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