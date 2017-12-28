import React from 'react';

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentDidMount() {
        var countDownDate = new Date("March 11, 2018 12:59:59").getTime();

        var x = setInterval(() => {
            
              // Get todays date and time
              let now = new Date().getTime();
            
              // Find the distance between now an the count down date
              let distance = countDownDate - now;
            
              // Time calculations for days, hours, minutes and seconds
              let inDays = Math.floor(distance / (1000 * 60 * 60 * 24));
              let inHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              let inMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              let inSeconds = Math.floor((distance % (1000 * 60)) / 1000);
            
              this.setState({
                  days: inDays,
                  hours: inHours,
                  minutes: inMinutes,
                  seconds: inSeconds
              });

              // If the count down is finished, write some text 
              if (distance < 0) {
                clearInterval(x);
              }

        }, 1000);
    }
    render() {
        return (
            <div id="countdown">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3 text-center">
                            <h1>{this.state.days}</h1>
                            <hr />
                            <h2>Days</h2>
                        </div>
                        <div className="col-xs-3 text-center">
                            <h1>{this.state.hours}</h1>
                            <hr />
                            <h2>Hours</h2>
                        </div>
                        <div className="col-xs-3 text-center">
                            <h1>{this.state.minutes}</h1>
                            <hr />
                            <h2>Minutes</h2>
                        </div>
                        <div className="col-xs-3 text-center">
                            <h1>{this.state.seconds}</h1>
                            <hr />
                            <h2>Seconds</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Countdown;