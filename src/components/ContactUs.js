import React from 'react';
import Headline from './Headline';

import emailIcon from '../assets/icon_email.svg';

class ContactUs extends React.Component {
    render() {
        return (
            <div id="contact-us">
                <div className="container">
					<div className="row">
						<div className="col-md-12">
							<Headline>Contact Us</Headline>	
						</div>
					</div>
                    <div className="row">
						<div className="col-md-3">
							<h4>Address</h4>
							<p class="addrP">Blagoevgrad</p>
							<p class="addrP">12 Svoboda Bachvarova Str.</p>
							<p class="addrP">American University in Bulgaria</p>
							<p class="addrP">America for Bulgaria Student Center</p>
							<br />
							<p class="addrP"><img src={emailIcon} alt="Email" /> thehub@hackaubg.org</p>
						</div>
						<div className="col-md-9"> 				
                   			<iframe width="100%" height="400" frameborder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=American%20University%20in%20Bulgaria%2C%20Svoboda%20Bachvarova%2012&key=AIzaSyBQi9s_THHKNcBxFwyv2C7BaQIFI7rQepw" allowfullscreen></iframe>
						</div>
                    </div>
				</div>
            </div>
        );
    }
}

export default ContactUs;
