import React from 'react';
import './index.css';
import Container from 'react-bootstrap/Container';
import gear from '../../assets/about_gear.png';
import GistArrow from '../../assets/gist-arrow.svg';
import Idea from '../../assets/idea.svg';
import Design from '../../assets/design.svg';
import Revise from '../../assets/revise.svg';
import { Col, Row } from 'react-bootstrap';
import Contact from '../Contact';
import MaterialIcon from 'material-icons-react';
import { SocialIcon } from 'react-social-icons';


class AboutPage extends React.Component{
    render() {
        return(
            <div>
                <section className="about-hero">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="about-container">
                                    <h1>About Us</h1>
                                    <p>We work with our clients. The need for intelligent technologies grow as bold ideas continue to flow in.</p>
                                    <p>With our know how and your vision the future can be realized.</p>
                                    <p>Learn more about how we work with companies, startups, people to Build The future</p>
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
                                    <p className="motto-text">We are a Consultancy that helps the most ambitious world changers build the future. We work alongside clients as partners with a common goal to We are a Consultancy that helps the most ambitious world changers build the future. We work alongside clients as partners with a common goal to acheive great results, build the future, and push man-kind to great heights. We utilize our many talents and expertise to deliver better, faster and solid outcomes. great results, build the future, and push man-kind to great heights. We utilize our many talents and expertise to deliver better, faster and solid outcomes.</p>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                        
                    </Container>
                </section>

                <section className="gist-section">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-sm-10 col-md-12 col-lg-10">
                            <div className="section-description">
                                <h2 className="font-weight-bold text-center pb-4">The Flow</h2>
                                <hr className="bg-warning mt-0 d-block mx-auto text-center mb-5" style={{width: "30%"}}/>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm col1 gist-col border-right">
                                        <h3>IDEA</h3>
                                        <img className="gist-col-icon" src={Idea} alt=""/>
                                        <div className="gist-arrow"><img src={GistArrow} alt=""/></div>
                                        <p className="gist-col-discription text-dark">We brainstorm to come up with a solution to the your problem.</p>
                                    </div>
                                    <div className="col-sm col3 gist-col border-right">
                                        <h3>DESIGN</h3>
                                        <img className="gist-col-icon" src={Design} alt=""/>
                                        <div className="gist-arrow"><img src={GistArrow} alt=""/></div>
                                        <p className="gist-col-discription text-dark">From paper to CAD we design and test the look and functionality of our proposed solution.</p>
                                    </div>
                                    <div className="col-sm col5 gist-col">
                                        <h3>REVISE</h3>
                                        <img className="gist-col-icon" src={Revise} alt=""/>
                                        <p className="gist-col-discription text-dark">We found that its better to revise than to plan plan plan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    </div>
                </section>
                <section className="bg-light py-5">
                    <div className="section-description text-center">
                        <h2 className="font-weight-bold text-center pb-4">Our Values</h2>
                        <hr className="bg-warning mt-0 d-block mx-auto text-center mb-5" style={{width: "30%"}}/>

                        <h3 className="text-center lead mx-auto" style={{width: '60%', fontSize: '1.9em'}}>We want to create value from human effort. Providing our clients with the best service and optimal solutions we help build the future.</h3>
                        <p></p>
                    </div>
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

export default AboutPage;