import React from 'react';
import logo from '../assets/logo.png';

import Navigation from './Navigation';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <a href="#featured">
                                <img src={logo} alt="HackAUBG Logo" />
                            </a>
                        </div>
                        <div className="col-md-10 text-right">
                            <Navigation />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;