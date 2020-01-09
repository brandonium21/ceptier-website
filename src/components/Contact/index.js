import React from 'react';
import Container from 'react-bootstrap/Container';
import './index.css';
import { Row, Col } from 'react-bootstrap';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class Contact extends React.Component{
    render() {
        return(
            <div className="contact-holder">
                <Container>
                    <div className="text-center">
                        <h1><strong>Want to Start a Project?</strong></h1>
                        <p>Tell us your needs and gain the support of a capable team and realize your vision.</p>
                    </div>
                    <div className="mt-5" style={{ height: 400}}>
                        <ReactTypeformEmbed url="https://brandonrice.typeform.com/to/P14yNJ" popup={false} style={{ position: 'relative'}} />
                    </div>   
                </Container>
                
            </div>
        );
    }
}

export default Contact;