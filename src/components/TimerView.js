import React, { Component } from 'react';
import './TimerView.css';

import Timer from './Timer';

/* ASSETS */
import mivideo from '../assets/movies/video.mp4';
import playlogo from '../assets/images/play.svg';
import pauselogo from '../assets/images/pause.svg';

export class TimerView extends Component {
    state = {
        time : 0,
        statusPlay : true
    }

    changeStatusPlay = () => {
        this.setState({
            statusPlay : !this.state.statusPlay
        });
    }

    render() {
        return (
            <div>
                <div className="video-container">
                    <video src={mivideo} autoPlay loop muted/>
                </div>
                <div className='maincircle shadow shadowcircle' onClick={ () => this.changeStatusPlay() }>
                    <span className='valuecircle noselect'>
                        <Timer />
                    </span>
                    {
                        this.state.statusPlay === true?
                            (<img src={playlogo} alt="Logo de Play" className="iconsvg noselect transX2"/>) :
                            (<img src={pauselogo} alt="Logo de Pause" className="iconsvg noselect"/>)
                    }
                </div>
            </div>
        )
    }
}

export default TimerView;