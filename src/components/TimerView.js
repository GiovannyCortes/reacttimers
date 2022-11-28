import React, { Component } from 'react';
import Timer from './Timer';
import './TimerView.css';

export class TimerView extends Component {
    state = {
        time : 0
    }

    render() {
        return (
            <div>
                <div className='maincircle shadow'>
                    <span className='valuecircle noselect'>
                        <Timer />
                    </span>
                </div>
            </div>
        )
    }
}

export default TimerView;