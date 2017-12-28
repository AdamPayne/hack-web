import React, { Component } from 'react';
import './style.css';
import './assets/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Featured from './components/Featured';
import Countdown from './components/Countdown';
import LastYear from './components/LastYear';
import AboutTheEvent from './components/AboutTheEvent';
import FAQSignUp from './components/FAQSignUp';
import Footer from './components/Footer';

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
        <LastYear />
        <AboutTheEvent />
        <FAQSignUp />
        <Footer />
      </div>
    );
  }
}

export default App;
