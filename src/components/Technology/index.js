import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap';
import Contact from '../Contact';
import MaterialIcon from 'material-icons-react';
import './index.css';
import Angular from '../../assets/tech/angularjs.png';
import Flutter from '../../assets/tech/flutter.png';
import Mongodb from '../../assets/tech/mongodb.png';
import Nodejs from '../../assets/tech/nodejs.png';
import Python from '../../assets/tech/python.png';
import Reactico from '../../assets/tech/react.png';
import Ethereum from '../../assets/tech/ethereum.png';
import Cplus from '../../assets/tech/c++.png';
import Aws from '../../assets/tech/aws.png';
import { SocialIcon } from 'react-social-icons';


class TechnologyPage extends React.Component{
    render() {
        return(
            <div>
                <section className="technology-hero">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="technology-container">
                                    <h1>Technology</h1>
                                    <p>Engineers at Ceptier continue to experiment with various tech architectures.</p>
                                    <p>We will help you choose an optimal technology stack for your next development project.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <h1 className="text-center py-3 mt-5">Technology</h1>
                <p className="text-center mb-5" style={{fontSize: "1.2em"}}>Below are the main programming languages, tools and frameworks we use.</p>
                <section className="bg-light py-5">
                    <Container>  
                        <Row>
                            <Col>
                                <h5>Web Development</h5>
                            </Col>

                            <Col>
                                <Row>
                                    <Col>
                                        <img src={Angular} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        <img src={Reactico} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        <img src={Python} alt="..." class="img-responsive"/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <img src={Mongodb} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        <img src={Nodejs} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        <img src={Aws} alt="..." class="img-responsive"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-5">
                    <Container>  
                        <Row>
                            <Col>
                                <h5>Mobile Development</h5>
                            </Col>

                            <Col>
                                <Row>
                                    <Col>
                                        <img src={Flutter} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        <img src={Aws} alt="..." class="img-responsive"/>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="bg-light py-5">
                    <Container>  
                        <Row>
                            <Col>
                                <h5>Blockchain</h5>
                            </Col>

                            <Col>
                                <Row>
                                    <Col>
                                        <img src={Ethereum} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        <img src={Cplus} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        <img src={Nodejs} alt="..." class="img-responsive"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-5">
                    <Container>  
                        <Row>
                            <Col>
                                <h5>IOT</h5>
                            </Col>

                            <Col>
                                <Row>
                                    <Col>
                                        <img src={Cplus} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        <img src={Nodejs} alt="..." class="img-responsive"/>
                                    </Col>
                                    <Col>
                                        <img src={Aws} alt="..." class="img-responsive"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="bg-light py-5 mb-5">
                    <Container>  
                        <Row>
                            <Col>
                                <h5>Embeded Software</h5>
                            </Col>

                            <Col>
                                <Row>
                                    <Col>
                                        <img src={Cplus} alt="..." class="img-responsive"/>
                                    </Col>

                                    <Col>
                                        
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="get-in-touch-container text-center">
                    <a href="/#contact" className="get-in-touch-a">
                        <p className="text-center text-warning"><strong>What's Your Vision?</strong></p>
                        <p className="get-in-touch text-center"> Get in touch and see how our team can help you realize it.</p>
                        <div className="mx-auto"><MaterialIcon icon="arrow_forward" color="#252c63" size={32} /></div>

                    </a>
                </section>

                <section className="py-3 mb-5 bg-warning" >
                    <Container>
                        <Row>
                            <Col>
                                <h3 className="text-center pt-3">Follow Us On Social Media...</h3>
                            </Col>
                            <Col className="text-center">
                                <div className="mt-4">
                                <SocialIcon url="https://twitter.com/ceptier" className="mr-2"/>
                            
                                <SocialIcon url="https://www.linkedin.com/company/ceptier" className="mr-2" />
                            
                                <SocialIcon url="https://www.facebook.com/ceptier" className="mr-2" />
                            
                                <SocialIcon url="https://medium.com/@brandon_rice_25900" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        );
    }
}

export default TechnologyPage;