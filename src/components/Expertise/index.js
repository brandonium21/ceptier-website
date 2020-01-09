import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap';
import Contact from '../Contact';
import MaterialIcon from 'material-icons-react';
import './index.css';


class ExpertisePage extends React.Component{
    render() {
        return(
            <div>
                <section className="expertise-hero">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="expertise-container">
                                    <h1>Expertise</h1>
                                    <p>Engineers at Ceptier continue to experiment with various tech architectures.</p>
                                    <p>We will help you choose an optimal technology stack for your next development project.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col>
                            </Col>

                            <Col>
                            </Col>

                            <Col>
                            </Col>

                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default ExpertisePage;