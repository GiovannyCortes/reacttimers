import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Login.css';

import Menu from './Menu';

export class Login extends Component {

    userbox = React.createRef();
    passwordbox = React.createRef();

    setLogin = (e) => {
        e.preventDefault();
        alert(this.userbox.current.value);
        alert(this.passwordbox.current.value);
    }

    render() {
        return (
            <div>
                <div className='noselect' style={{"marginTop":"10px"}}>
                    <Menu />
                </div>
                <form onSubmit={this.setLogin}>
                    <label htmlFor="userbox" className='form-label noselect'>Usuario</label>
                    <input type="text" id='userbox' className='form-control' ref={this.userbox}/> 
                    <label htmlFor="passwordbox" className='form-label noselect mt-2'>Contraseña</label>
                    <input type="text" id='passwordbox' className='form-control' ref={this.passwordbox}/> 
                    <button className='buttonform'>
                        Iniciar sesión
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;