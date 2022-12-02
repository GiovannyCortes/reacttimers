import React, { Component } from 'react';
import './css/MenuPopUp.css';
import arrowleft from '../assets/arrowleft.svg';

export class MenuPopUp extends Component {
    exit = () => {
        this.props.showHiddenMenu();
    }

    render() {
        return (
            <div className='menupopup-box-component' id='sidemenu'>
                <button className='menupopup-back' onClick={this.exit}>
                    <img src={arrowleft} alt="Flecha izquierda"/>
                    <i>Close NavBar</i>
                </button>
                <div className='menupopup-box-items'>
                    <a href='/'>Timer</a>
                    <a href='/horario'>Horario</a>
                    <a href='/salas'>Salas</a>
                    <a href='/empresas'>Empresas</a>
                    <a href='/login'>Login</a>
                </div>
            </div>
        )
    }
}

export default MenuPopUp;