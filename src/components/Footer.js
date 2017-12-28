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
                            <p>&copy; Hack AUBG 2017</p>
                        </div>
                        <div className="col-sm-6 text-right">
                            <div id="follow-us">
                                <h3>Follow us</h3>
                                <ul>
                                    <li><a href="#facebook"><img src={FacebookIcon} alt="Facebook" /></a></li>
                                    <li><a href="#youtube"><img src={YoutubeIcon} alt="Youtube" /></a></li>
                                    <li><a href="#instagram"><img src={InstagramIcon} alt="Instagram" /></a></li>
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