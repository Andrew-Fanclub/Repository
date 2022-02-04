import React from 'react';
import './public/main.css';
import Navigation from './components/navbar';
import Footer from './components/footer';

function Main() {
    return (
        <div>
            <nav>
                <Navigation />
            </nav>
            <div>
                <h1>AFCPlushies</h1>
                <h2>ROugh DrAft</h2>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Main;
