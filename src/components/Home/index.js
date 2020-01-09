import React from 'react';
import Container from 'react-bootstrap/Container';
import Contact from '../Contact';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Robo from '../../assets/RoboMichaelangelo600.png';
import './index.css';
import { Row, Col, Card } from 'react-bootstrap';
import MaterialIcon from 'material-icons-react';

class HomePage extends React.Component{
    render() {
        return(
            <div>
                <Container className="mb-5">
                    <h1 className="hero-title">BUILD THE FUTURE</h1>
                    <div className="hero-description">
                        <p>As the world progresses faster and faster. Ceptier provides the tools and expertise to keep businesses in pace. Great insights produce a solid future.</p>
                    </div>
                    <a className="hero-btn" href="/#headline">LEARN MORE</a>
                    <Image src={Robo} className="hero-img mx-auto" fluid />

                </Container>
                <section id="headline" className="headline-section">
                    <Container>
                        <h1 className="text-center mt-5 mb-3">We Empower Growth Stage Businesses and Startups with our Enthusiatic Engineering Team</h1>
                        <p className="text-center lead mt-5">We combine our many expertise to develop the right solution for you.</p>
                        <p className="text-center lead">Our end-to-end development expertise converts your vision into a powerful solution that drives company value.</p>
                    </Container>
                </section>
                
                <section className="icon-holder">
                    <Container className="shadow icon-container">
                        <Row>
                            <Col className="text-center bord" md={4} sm={6} lg={2}>
                                <MaterialIcon icon="people" size={34} />
                                <p className="icon-text">CONSUMER FOCUSED</p>
                            </Col>
                            <Col className="text-center bord" md={4} sm={6} lg={2}>
                                <MaterialIcon icon="gavel" size={34} />
                                <p className="icon-text">RAPID PROTOTYPING</p>
                            </Col>
                            <Col className="text-center bord" md={4} sm={6} lg={2}>
                                <MaterialIcon icon="fingerprint" size={34} />
                                <p className="icon-text">OWN YOUR IP</p>
                            </Col>
                            <Col className="text-center icon-ex bord" md={4} sm={6} lg={2}>
                                <MaterialIcon icon="account_tree" size={34} />
                                <p className="icon-text">TRANSPARENCY</p>
                            </Col>
                            <Col className="text-center icon-ex bord" md={4} sm={6} lg={2}>
                                <MaterialIcon icon="poll" size={34} />
                                <p className="icon-text">OPTIMIZED SOLUTIONS</p>
                            </Col>
                            <Col className="text-center icon-ex " md={4} sm={6} lg={2}>
                                <MaterialIcon icon="dashboard" size={34} />
                                <p className="icon-text">DIVERSE TEAMS</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="my-5">
                    <h3 className="text-center pt-5 mb-4"><strong>What We're Good At</strong></h3>
                    <hr className="pb-5" style={{ width: "30%", borderTop: "3px solid #f9c132" }} />
                    <Container className="mt-5">
                        <Row>
                            <Col md={6} sm={12} lg={3} className="mt-3">
                                <Card className="shadow border-0 pl-4 pt-4 rounded h-100">
                                    <MaterialIcon icon="layers" color="#252c63" size={55} />
                                    <div class="card-body pl-1">
                                        <h5 class="card-title pt-2 pb-2">Technology Consultant</h5>
                                        <ul className="home-ul">
                                            <li className="home-li">Product Development</li>
                                            <li className="home-li">UX/UI Design</li>
                                            <li className="home-li">Technology Architecure</li>
                                            <li className="home-li">Innovation Strategy</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={6} sm={12} lg={3} className="mt-3">
                                <Card className="shadow border-0 pl-4 pt-4 rounded h-100">
                                    <MaterialIcon icon="code" color="#252c63" size={55} />
                                    <div class="card-body pl-1">
                                        <h5 class="card-title pt-2 pb-2">Custom Software Development</h5>
                                        <ul className="home-ul">
                                            <li className="home-li">Web Development</li>
                                            <li className="home-li">Mobile Development</li>
                                            <li className="home-li">Embedded Software</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={6} sm={12} lg={3} className="mt-3">
                                <Card className="shadow border-0 pl-4 pt-4 rounded h-100">
                                    <MaterialIcon icon="memory" color="#252c63" size={55} />
                                    <div class="card-body pl-1">
                                        <h5 class="card-title pt-2 pb-2">Emerging Technologies</h5>
                                        <ul className="home-ul">
                                            <li className="home-li">Internet Of Things</li>
                                            <li className="home-li">Blockchain</li>
                                            <li className="home-li">AI/Machine Learning</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={6} sm={12} lg={3} className="mt-3">
                                <Card className="shadow border-0 pl-4 pt-4 rounded h-100">
                                    <MaterialIcon icon="devices_other" color="#252c63" size={55} />
                                    <div class="card-body pl-1">
                                        <h5 class="card-title pt-2 pb-2">Robotics And Engineering</h5>
                                        <ul className="home-ul">
                                            <li className="home-li">Electronics</li>
                                            <li className="home-li">Hardware Design</li>
                                            <li className="home-li">Robotics</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        );
    }
}

export default HomePage;