import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import "../public/footer.css";
import userIcon from '../images/user-regular.svg';

function Footer() {
    return (
        <div className="fixed-bottom">
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
                            <form className="contact-form">
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="text" placeholder="Your Name" className="form-user-icon form-control" />
                                    </div>
                                    <div className="col">
                                        <input type="email" placeholder="E-mail" className="form-email-icon form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-7 me-3">
                                        <textarea placeholder="Leave your message" className="form-msg-icon form-control message"></textarea></div>
                                    <div className="col-sm">
                                        <button className="btn send-btn">SEND</button></div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </Container>
        </div >
    );
}

export default Footer;