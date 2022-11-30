import React, { Component } from 'react';
import './TimerView.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

/* TEMPORAL */
import Timer from './Timer';
import PopUp from './PopUp';

/* ASSETS */
import playlogo from '../assets/images/play.svg';
import pauselogo from '../assets/images/pause.svg';

export class TimerView extends Component {
    state = {
        time : 0,
        statusPlay : true,
        statusPopUp : false
    }

    changeStatusPlay = () => {
        this.setState({
            statusPlay : !this.state.statusPlay
        });
    }

    changeStatusPopUp = () => {
        this.setState({
            statusPopUp : true
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.statusPopUp && (
                        <PopUp />
                    )
                }
                <header>
                    <div style={{"backgroundColor":"blue", "height":"50px"}}>
                        mi bar
                    </div>
                    <button className='mainsala' onClick={ () => this.changeStatusPopUp() }>
                        SALA 1
                    </button>
                </header>
                <div className='maincircle mainshadow shadowcircle' onClick={ () => this.changeStatusPlay() }>
                    <span className='valuecircle noselect'>
                        <Timer /> {/* SOLO NECESITO UN DIV CON EL VALOR DE TIEMPO (mm:ss) ejemplo: 15:27 */}
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