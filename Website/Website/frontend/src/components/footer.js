import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import "../public/footer.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <Container fluid className="footer-bg col">
                <div className="d-flex flex-row justify-content-between">
                    <div className="col footer-top left-col">
                        <section className="mt-3">
                            <p className="footer-topic mb-2">INFORMATION</p>
                            <div className="row">
                                <div className="col">
                                    <Link className="footer-subtext" to="/aboutUs">About AFCPlushies</Link>
                                    <p className="footer-subtext">Take Our Quiz</p>
                                    <p className="footer-subtext">Things We Like</p>
                                </div>
                                <div className="col left-col-right">
                                    <Link className="footer-subtext" to="/howItWorks">How It Works</Link>
                                    <p className="footer-subtext">Privacy Policy</p>
                                    <p className="footer-subtext">Terms of Service</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col footer-top ps-2">
                        <section className="mt-3">
                            <p className="footer-topic mb-2">CONTACT US</p>
                            <h5 id="footer-email" className="mb-4">afcplushies@gmail.com</h5>
                        </section>
                        <section>
                            <p className="footer-topic mb-2">GET IN TOUCH</p>
                            <p className="footer-subtext">Send us a message.</p>
                            <button className="btn send-btn"><a href="/contact">SEND MESSAGE</a></button>
                        </section>
                    </div>
                </div>
            </Container>
        </div >
    );
}

export default Footer;
