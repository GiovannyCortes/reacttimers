import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TimerView from './components/TimerView';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TimerView />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}