import React from 'react';
import Headline from './Headline';

class AboutTheEvent extends React.Component {
    render() {
        return (
            <div id="about-the-event">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Headline>About the Event</Headline>
                            <p>Suspendisse nullas metus, dignissim non sem et, tincidunt hendrerit ante. In hac habitasse platea dictumst. Nullam vitae tortor sapien. Fusce elementum interdum neque, venenatis semper mi egestas at. Aliquam non sapien tincidunt, mattis tellus id, efficitur eros. Morbi et pharetra nisi. Fusce consectetur semper purus. Integer ac dictum neque.</p>
                            <p>Duis at mollis mauris. In mollis risus vel aliquam tincidunt. Nunc vitae felis vitae nunc tempus elementum in in nulla. Quisque tortor purus, fringilla ac magna eget, mattis sagittis nisl. Integer at quam nunc. Quisque ligula lorem, pretium eget dolor in, commodo pulvinar velit. Donec ullamcorper fringilla risus eu molestie.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutTheEvent;