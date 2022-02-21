import React from 'react';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../public/whoWe.css";

function WhoWe() {
    return (
        <div className="bg">
            <nav>
                <Navigation />
            </nav>
            <div className="constraint mt-5 mb-3">
                <h1 className="title">About Us</h1>
                <section className='mb-5'>
                    <h3 className="subTitle">Our Project</h3>
                    <h4 className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi dignissimos maiores magni enim natus? Magnam laboriosam necessitatibus repellendus repudiandae, temporibus at cupiditate autem veritatis blanditiis qui maiores ex quas.</h4>
                </section>
                <section className="team">
                    <h3 className="subTitle">Our Team</h3>
                    <section className="ms-5">
                        <Row className="mb-3">
                            <Col><div className="square"></div></Col>
                            <Col className="me-5">
                                <h5 className='teamTextBold'>Marlon Burog</h5>
                                <p className='teamText'>1st year Software Engineering major</p></Col>
                            <Col><div className="square"></div></Col>
                            <Col className="me-5">
                                <h5 className='teamTextBold'>Catherine Nguyen</h5>
                                <p className='teamText'>3rd Year (Graduating Senior) Computer Science major</p></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><div className="square"></div></Col>
                            <Col className="me-5"><p className='teamText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sequi hic. Consequuntur veniam deleniti quas recusandae quaerat eaque blanditiis consectetur aperiam nobis id</p></Col>

                            <Col><div className="square"></div></Col>
                            <Col className="me-5"><p className='teamText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sequi hic. Consequuntur veniam deleniti quas recusandae quaerat eaque blanditiis consectetur aperiam nobis id</p></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><div className="square"></div></Col>
                            <Col className="me-5"><p className='teamText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sequi hic. Consequuntur veniam deleniti quas recusandae quaerat eaque blanditiis consectetur aperiam nobis id</p></Col>

                            <Col><div className="square"></div></Col>
                            <Col className="me-5"><p className='teamText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sequi hic. Consequuntur veniam deleniti quas recusandae quaerat eaque blanditiis consectetur aperiam nobis id</p></Col>
                        </Row>
                    </section>
                </section>
            </div>

            <footer>
                <Footer />
            </footer>
        </div >
    );
}

export default WhoWe;