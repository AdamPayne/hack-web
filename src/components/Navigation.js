import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#last-year">Last Year</a></li>
                    <li><a href="#about-the-event">About the Event</a></li>
                    <li><a href="#sign-up" className="button">Sign Up</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;