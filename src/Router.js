import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TimerView from './components/TimerView';
import Salas from './components/Salas';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TimerView />}/>
                    <Route path="/salas" element={<Salas />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}