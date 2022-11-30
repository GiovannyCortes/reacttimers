import React, { Component } from 'react';
import './PopUp.css';

export class PopUp extends Component {
    state = {
        salas : [
            {
                nombre : "SALA 1",
                color : "red"
            },
            {
                nombre : "SALA 2",
                color : "green"
            },
            {
                nombre : "SALA 3",
                color : "blue"
            }
        ]
    }

    render() {
        return (
            <div className='box-popup'>
                <div>
                    <span className='close-icon'></span>
                    {
                        this.state.salas.map((sala, index) => {
                            return (
                              <button className={'popup-sala-btn ' + sala.color}>
                                {sala.nombre}
                              </button>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default PopUp;