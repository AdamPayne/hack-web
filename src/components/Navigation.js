import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#about-the-event">About the Event</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#awards">Awards</a></li>
                    <li><a href="#mentors">Mentors</a></li>
                    <li><a href="#jury">Jury</a></li>
                    <li><a href="#partners">Partners</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                    <li><a href="#sign-up" className="button">Sign Up</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;