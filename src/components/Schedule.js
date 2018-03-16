import React from 'react';

import Headline from './Headline';

class Schedule extends React.Component {
    render() {
        return (
            <div id="schedule">
                <div class="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Headline>Schedule</Headline>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="day">Friday</div>
                            <table>
                                <tr>
                                    <td>07:00 PM</td>
                                    <td>Registration & Networking</td>
                                </tr>
                                <tr>
                                    <td>08:30 PM</td>
                                    <td>Opening</td>
                                </tr>
                                <tr>
                                    <td>09:00 PM</td>
                                    <td>Teams get formed</td>
                                </tr>
                                <tr>
                                    <td>10:00 PM</td>
                                    <td>Start working on the projects</td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-4">
                            <div className="day">Saturday</div>
                            <table>
                                <tr>
                                    <td>09:00 AM</td>
                                    <td>Breakfast</td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td>Coding & Mentorship</td>
                                </tr>
                                <tr>
                                    <td>01:00 PM</td>
                                    <td>Lunch</td>
                                </tr>
                                <tr>
                                    <td>01:30 PM</td>
                                    <td>Coding & Mentorship</td>
                                </tr>
                                <tr>
                                    <td>06:00 PM</td>
                                    <td>Progress Reports</td>
                                </tr>
                                <tr>
                                    <td>07:00 PM</td>
                                    <td>Dinner</td>
                                </tr>
                                <tr>
                                    <td>08:00 PM</td>
                                    <td>Coding</td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-4">
                            <div className="day">Sunday</div>
                            <table>
                                <tr>
                                    <td>09:00 AM</td>
                                    <td>Breakfast</td>
                                </tr>
                                <tr>
                                    <td>10:00 AM</td>
                                    <td>Coding & Mentorship</td>
                                </tr>
                                <tr>
                                    <td>01:00 PM</td>
                                    <td>Lunch</td>
                                </tr>
                                <tr>
                                    <td>01:30 PM</td>
                                    <td>Coding</td>
                                </tr>
                                <tr>
                                    <td>03:00 PM</td>
                                    <td>Preparing for presentations</td>
                                </tr>
                                <tr>
                                    <td>04:00 PM</td>
                                    <td>Team Presentations</td>
                                </tr>
                                <tr>
                                    <td>06:00 PM</td>
                                    <td>Award Ceremony</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;