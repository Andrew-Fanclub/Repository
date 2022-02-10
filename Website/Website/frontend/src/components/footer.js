import { Container } from 'react-bootstrap';
import React from 'react';
import "../public/footer.css";

function Footer() {
    return (
        <div>
            <Container fluid className="footer-bg col">
                <div className="d-flex flex-row justify-content-between">
                    <div className="col footer-top left-col">
                        <section className="mt-3">
                            <p className="footer-topic">INFORMATION</p>
                            <div className="row">
                                <div className="col">
                                    <p className="footer-subtext">About AFCPlushies</p>
                                    <p className="footer-subtext">Take Our Quiz</p>
                                    <p className="footer-subtext">Things We Like</p>
                                </div>
                                <div className="col left-col-right">
                                    <p className="footer-subtext">FAQ</p>
                                    <p className="footer-subtext">Privacy Policy</p>
                                    <p className="footer-subtext">Terms of Service</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col footer-top ps-2">
                        <section className="mt-3">
                            <p className="footer-topic">CONTACT US</p>
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
