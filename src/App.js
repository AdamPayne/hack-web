import React, { Component } from 'react';
import './style.css';
import './assets/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Featured from './components/Featured';
import Countdown from './components/Countdown';
import AboutTheEvent from './components/AboutTheEvent';
import Awards from './components/Awards';
import Partners from './components/Partners';
import FAQSignUp from './components/FAQSignUp';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Mentors from './components/Mentors';
import Jury from './components/Jury';
import Schedule from './components/Schedule';

class App extends Component {
  componentDidMount() {
    window.addEventListener("hashchange", function () {
      window.scrollTo(window.scrollX, window.scrollY - 150);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Featured />
        <Countdown />
        <AboutTheEvent />
		    <Awards />
        {/* <Mentors /> */}
        <Jury />
        <Schedule />
        <Partners />
        <FAQSignUp />
		    <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
