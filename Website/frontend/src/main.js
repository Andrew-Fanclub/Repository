import React from 'react';
import ReactDOM from 'react-dom';
import './public/main.css';
import Navigation from './components/navbar.js';

function Main(){
    return(
        <div>
            <head>
                <title>AFCPlushies</title>
                <link rel="icon" href="/favicon.ico"></link>
            </head>
            <div>
                <Navigation />
            </div>
            <div>
                <h1>AFCPlushies</h1>
                <h2>ROugh DrAft</h2>
            </div>
        </div>
    );
}

export default Main;