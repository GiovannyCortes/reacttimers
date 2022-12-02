import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TimerView from './components/TimerView';
import Horario from './components/Horario';
import Salas from './components/Salas';
import Empresas from './components/Empresas';
import Login from './components/Login';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TimerView />}/>
                    <Route path="/horario" element={<Horario />}/>
                    <Route path="/salas" element={<Salas />}/>
                    <Route path="/empresas" element={<Empresas />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}