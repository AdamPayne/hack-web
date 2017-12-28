import React from 'react';

import FAQ from './FAQ.js';
import SignUp from './SignUp.js';

class FAQSignUp extends React.Component {
    render() {
        return (
            <div id="faq-sign-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <FAQ />
                        </div>
                        <div className="col-md-6">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQSignUp;