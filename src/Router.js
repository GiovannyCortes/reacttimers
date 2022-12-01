import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TimerView from './components/TimerView';
import Menu from './components/Menu';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TimerView />}/>
                    <Route path="/menu" element={<Menu />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}