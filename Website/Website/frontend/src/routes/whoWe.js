import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/navbar';
import Footer from '../components/footer';

function WhoWe(){
    return(
        <div>
            <nav>
                <Navigation />
            </nav>
            <div className='pageDesign'>
                <p>Description of who we are</p>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default WhoWe;