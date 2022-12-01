import React, { Component } from 'react';
import './css/Menu.css';

/* TEMPORAL */
import Timer2 from './Timer_2';

export class Menu extends Component {
    render() {
        return (
            <div style={{"width":"100%"}}>
                <div className='menubar'>
                    <button className='menucircle'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                    <b className='menutag'>Tiempo restante... <span><Timer2 /></span></b>
                </div>
            </div>
        )
    }
}

export default Menu