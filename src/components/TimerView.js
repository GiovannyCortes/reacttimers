import React, { Component } from 'react';
import './TimerView.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

/* TEMPORAL */
import Timer from './Timer';

/* ASSETS */
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
                <header>
                    <nav style={{"backgroundColor":"blue", "height":"50px", "marginTop":"10px"}}>
                        mi bar
                    </nav>
                    <a className='mainsala' href='/'>
                        SALA 1
                    </a>
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