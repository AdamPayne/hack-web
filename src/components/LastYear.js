import React from 'react';
import Headline from './Headline';

import movie from '../assets/movie.mp4';
import playIcon from '../assets/icon_play.svg';

class LastYear extends React.Component {
    componentDidMount() {
        const video = document.getElementById('last-year-video');
        const playButton = document.getElementById('play-button');
        playButton.addEventListener('click', function() {
            video.play();
            playButton.style.display = 'none';
        });
        video.addEventListener('click', function() {
            video.pause();
            playButton.style.display = 'block';
        });
    }
    render() {
        return (
            <div id="last-year">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Headline>Last Year</Headline>
                            <div id="video-container">
                                <video id="last-year-video" width="100%" height="auto">
                                    <source src={movie} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div id="play-button">
                                    <img src={playIcon} alt="Play Video" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LastYear;