import React, { Component } from 'react';
import './css/PopUp.css';

export class PopUp extends Component {
    nindex = 0;
    state = {
        salas : [ "SALA 1", "SALA 2", "SALA 3", "SALA 4", "SALA 5", "SALA 6", "SALA 7", "SALA 8", "SALA 9", "SALA 10", "SALA 11"]
    }

    exit = () => { this.props.changeStatusPopUp(); }
    changeRoom = (name) => { 
        this.props.changeRoomName(name);
        this.exit();
    }

    render() {
        return (
            <div className='box-component'>
                <div className='box-popup'>
                    <span className='close-icon' onClick={ () => this.exit() }></span>
                    <span className='box-btns'>
                        {
                            this.state.salas.map((sala, index) => {
                                this.nindex = (this.nindex >= 5)? 1 : this.nindex + 1;
                                var scolor = "var(--s0" + this.nindex + ")";
                                return (
                                <button className='popup-btn-sala' 
                                        style={{"backgroundColor":scolor}}
                                        key={index}
                                        onClick={ () => this.changeRoom(sala)}>
                                    {sala}
                                </button>
                                );
                            })
                        }
                    </span>
                </div>
            </div>
        )
    }
}

export default PopUp;