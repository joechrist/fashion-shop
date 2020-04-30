import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// <React.StrictMode> is a tool for detecting potential problems with an application
// It's display nothing -- Strict mode checks are performed only during development.
// They do not affect the version used in production .
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
