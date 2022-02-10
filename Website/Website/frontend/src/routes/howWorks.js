import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/navbar';
import Footer from '../components/footer';

function HowWorks(){
    return(
        <div>
            <nav>
                <Navigation />
            </nav>
            <div className='pageDesign'>
                <p>Description of how this shit works</p>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default HowWorks;