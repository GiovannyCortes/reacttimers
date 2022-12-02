import React, { Component } from 'react';
import './css/Menu.css';

/* SUBCOMPONENTES */
import MenuPopUp from './MenuPopUp';

/* TEMPORAL */
import Timer2 from './Timer_2';

export class Menu extends Component {

    showHiddenMenu = () => {
        var sidemenu = document.getElementById("sidemenu");
        sidemenu.classList.toggle("menupopup-box-component-show");
        var divbg_black = document.getElementById("divbg_black");
        divbg_black.classList.toggle("background_black_show");
    }

    render() {
        return (
            <div style={{"width":"100%"}}>
                <div className='background_black' id='divbg_black'></div>
                <MenuPopUp showHiddenMenu={this.showHiddenMenu} divbg_black={this.divbg_black}/>
                <div className='menubar'>
                    <button className='menucircle' onClick={this.showHiddenMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                    <b className='menutag'>Tiempo restante... <span><Timer2 /></span></b>
                </div>
            </div>
        )
    }
}

export default Menu;