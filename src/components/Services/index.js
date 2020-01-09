import React from 'react';
import './index.css';
import Container from 'react-bootstrap/Container';
import TeamIll from '../../assets/team-based-ill.svg';
import FixedIll from '../../assets/fixed-price-ill.svg';
import ModuleIll from '../../assets/module-based-ill.svg';
import { Col, Row, Card } from 'react-bootstrap';
import Contact from '../Contact';
import MaterialIcon from 'material-icons-react';


class ServicePage extends React.Component{
    render() {
        return(
            <div>
                <section className="service-hero">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="service-container">
                                    <h1>Services</h1>
                                    <p>From idea to Implementation, our dynamic combination of design thinking, effective engineering and in-depth analysis ensure we're are delivering value that helps your buisness grow into the future. </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="my-5">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col md={8}>
                                <div>
                                    <p className="motto-text text-center">We Offer 3 Options to bring your vision to life.</p>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                        
                    </Container>
                </section>

                <section>
                    <Container>
                        <Row>
                            <Col>
                            <Card className="shadow border-0 pl-4 pt-3 rounded">
                                    <div class="card-body pl-1">
                                        <Row>
                                            <Col lg={7} md={12}>
                                                <h5 className="card-title pt-2 pb-2 text-center">Team Based</h5>
                                            </Col>
                                            <Col lg={5} className="service-arrow">
                                                <span className="float-left pt-1"><MaterialIcon icon="arrow_forward" color="#252c63" size={32} /></span>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadow border-0 pl-4 pt-3 rounded">
                                    <div class="card-body pl-1">
                                        <Row>
                                            <Col lg={7} md={12}>
                                                <h5 className="card-title pt-2 pb-2 text-center">Fixed Price</h5>
                                            </Col>
                                            <Col lg={5} className="service-arrow">
                                                <span className="float-left pt-1"><MaterialIcon icon="arrow_forward" color="#252c63" size={32} /></span>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                            <Col>
                            <Card className="shadow border-0 pl-4 pt-3 rounded">
                                    <div class="card-body pl-1">
                                        <Row>
                                            <Col lg={7} md={12}>
                                                <h5 className="card-title pt-2 pb-2 text-center">Module</h5>
                                            </Col>
                                            <Col lg={5} className="service-arrow">
                                                <span className="float-left pt-1"><MaterialIcon icon="arrow_forward" color="#252c63" size={32} /></span>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="team-service" className="py-5 my-5 team-description">
                    <Container>
                        <Row>
                            <Col>
                                <h1>Team Based Projects</h1>
                                <p className="mt-5">Your idea is flexible and requirements may evolve - work with a curated team of professionals based on your project needs.</p>
                                <ul className="team-ul">
                                    <li>Multidisciplinary team provided based on features needed.</li>
                                    <li>Hire Ceptier developers starting with a  1 month long term</li>
                                    <li>Frequent updates allow you you play an active role in the development of your unique solution.</li>
                                </ul>

                                <h5 style={{ color: '#03104a'}}>Offers open ended access to a capable development team, when your project doesn't have a well defined end.</h5>
                            </Col>
                            <Col>
                            <img src={TeamIll} className="img-fluid mx-auto d-block pt-5" width={'80%'} alt="Team Illistration"></img>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="fixed-price-service" className="py-5 my-5 fixed-price-description">
                    <Container>
                        <Row>
                            <Col>
                                <h1>Fixed-Price Projects</h1>
                                <p className="mt-5">You know what you want and need help bringing it to life - we do a couple of discovery calls/meetings to understand the idea and give you an estimate.</p>
                                <ul className="team-ul">
                                    <li>Milestone defined model</li>
                                    <li>Build anything from simple prototypes, mvp’s to complex solutions.</li>
                                    <li>Frequent updates allow you you play an active role in the development of your unique solution.</li>
                                </ul>

                                <h5 style={{ color: '#03104a'}}>Offers minimum risk and transparent approach since you pay on completion of defined milestones.</h5>
                            </Col>
                            <Col>
                            <img src={FixedIll} className="img-fluid mx-auto d-block pt-5" width={'80%'} alt="Fixed Price Illistration"></img>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section id="module-service" className="py-5 my-5 team-description">
                    <Container>
                        <Row>
                            <Col>
                                <h1>Module</h1>
                                <p className="mt-5">You have a single problem that doesn't require buisness logic - Bug fixes, Low item count CAD design, Software library implementation</p>
                                <ul className="team-ul">
                                    <li>One developer - quicker dev cycle</li>
                                    <li>Frequent updates allow you you play an active role in the development of your unique solution.</li>
                                </ul>

                                <h5 style={{ color: '#03104a'}}>Offers a more intement, well-documented approach to solving your problem.</h5>
                            </Col>
                            <Col>
                            <img src={ModuleIll} className="img-fluid mx-auto d-block pt-5" width={'80%'} alt="Team Illistration"></img>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="get-in-touch-container">
                    <a href="/#contact" className="get-in-touch-a text-center">
                        <p className="text-center text-warning"><strong>What's Your Vision?</strong></p>
                        <p className="get-in-touch text-center"> Get in touch and see how our team can help you realize it.</p>
                        <div className="mx-auto"><MaterialIcon icon="arrow_forward" color="#252c63" size={32} /></div>
                    </a>
                </section>

            </div>
        );
    }
}

export default ServicePage;