import React, { Component } from 'react';
import './css/TimerView.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

/* TEMPORAL */
import Timer from './Timer';

/* SUBCOMPONENTES */
import PopUp from './PopUp';
import Menu from './Menu';

/* ASSETS */
// import playlogo from '../assets/images/play.svg';
// import pauselogo from '../assets/images/pause.svg';

export class TimerView extends Component {
    state = {
        time : 0,
        room_name : "SALA",
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
            statusPopUp : !this.state.statusPopUp
        });
    }

    changeRoomName = (name) => {
        this.setState({
            room_name : name
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.statusPopUp && (
                        <PopUp changeStatusPopUp={this.changeStatusPopUp} changeRoomName={this.changeRoomName}/>
                    )
                }
                <header>
                    <div className='navbar noselect'>
                        <Menu />
                    </div>
                    <button className='mainsala noselect' onClick={ () => this.changeStatusPopUp() }>
                        {this.state.room_name}
                    </button>
                    <p className='maincompany noselect'>
                        <b>Está hablando:</b><br/><i>Nombre de la empresa</i>
                    </p>
                </header>
                <div className='maincircle mainshadow shadowcircle' onClick={ () => this.changeStatusPlay() }>
                    <span className='valuecircle noselect'>
                        <Timer /> {/* SOLO NECESITO UN DIV CON EL VALOR DE TIEMPO (mm:ss) ejemplo: 15:27 */}
                    </span>
                    {/* {
                        this.state.statusPlay === true?
                            (<img src={playlogo} alt="Logo de Play" className="iconsvg noselect transX2"/>) :
                            (<img src={pauselogo} alt="Logo de Pause" className="iconsvg noselect"/>)
                    } */}
                </div>
                <footer className='noselect'>
                    <b>Siguiente:</b>
                    <p>
                        <i>Nombre de la empresa </i>
                        (WORK)
                    </p>
                    <p>
                        <i>Nombre de la empresa </i>
                        (WORK)
                    </p>
                </footer>
            </div>
        )
    }
}

export default TimerView;