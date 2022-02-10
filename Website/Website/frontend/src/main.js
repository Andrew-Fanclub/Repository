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
            <div className='pageDesign'>
                <h1>AFCPlushies</h1>
                <h2>ROugh DrAft</h2>
                <p>Use websockets to get data held in sql database</p>
                <p>Two heroku servers one for front one for back?</p>
                <p>Has to list scraped plushies here</p>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Main;
