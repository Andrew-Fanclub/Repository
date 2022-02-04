import React from 'react';
import ReactDOM from 'react-dom';
import './public/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/navbar.js';
import Contact from './routes/contact';

function Main(){
    return(
        <div>
            <head>
                <title>AFCPlushies</title>
                <link rel="icon" href="/favicon.ico"></link>
            </head>
            <div>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route path = '/' exact component={<Main/> } />
                        <Route path = '/contact' component={<Contact/>} />
                    </Routes>
                </Router>
            </div>
            <div>
                <h1>AFCPlushies</h1>
                <h2>ROugh DrAft</h2>
            </div>
        </div>
    );
}

export default Main;