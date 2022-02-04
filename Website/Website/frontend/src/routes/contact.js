import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Navigation from '../components/navbar';

function Contact(){
    return(
        <div>
            <title>Contact</title>
            <div>
                <Navigation />
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                    <Form.Text className="text-muted">
                        All responses are considered private and are never shared with anyone else!
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="message" placeholder="Message" />
                </Form.Group>

                <Button variant="primary" type="send" ref="/process?contactus">
                    Send
                </Button>
            </Form>
        </div>
    );
}

export default Contact;