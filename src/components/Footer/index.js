import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './index.css';
import * as ROUTES from '../../constants/routes';
import logo from '../../assets/logo-brand.png';



class Footer extends React.Component{
    render() {
        let technologies = ["react-js", "node-js", "flutter", "python", "embedded-c", "solidity"];
        let services = ["fixed-price", "project", "module"];
        let expertise = ["custom-software-development", "web-app-development", "mobile-app-development", "user-experience-and-design",
         "blockchain", "internet-of-things"];
        let expertiseTwo = ["artificial-intelligence", "machine-learning", "electronics-design", "mechanical-design", "embedded-software",
        "CAD"];
        return(
            <div>
            <Container className="bg-white footer-container">
                <Row>
                    <Col md={4} sm={6} lg={2}>
                        <h6><strong>COMPANY</strong></h6>
                        <ul class="list-group">
                            <li class="list-group-item border-0 pl-0 pb-1">
                                <Link className="footer-link" to={ROUTES.ABOUT}>About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} sm={6} lg={2}>
                        <h6><strong>TECHNOLOGIES</strong></h6>
                        <ul class="list-group">
                            {
                                technologies.map((tech) => 
                            <li class="list-group-item border-0 pl-0 pb-1">
                                <Link className="footer-link" to={ROUTES.TECHNOLOGY + tech}>{tech}</Link>
                            </li>
                                )} 
                        </ul>
                    </Col>
                    <Col md={4} lg={2}>
                        <h6><strong>SERVICES AREAS</strong></h6>
                        <ul class="list-group">
                            {
                                services.map((serv) => 
                            <li class="list-group-item border-0 pl-0 pb-1">
                                <Link className="footer-link" to={ROUTES.SERVICES + serv}>{serv}</Link>
                            </li>
                                )} 
                        </ul>
                    </Col>
                    <Col className="expert">
                        <h6><strong>EXPERTISE</strong></h6>
                        <Row>
                            <Col>
                                <ul class="list-group">
                                    {
                                        expertise.map((exp) => 
                                    <li class="list-group-item border-0 pl-0 pb-1">
                                        <p className="footer-link">{exp}</p>
                                    </li>
                                        )} 
                                </ul>
                            </Col>
                            <Col>
                                <ul class="list-group">
                                    {
                                        expertiseTwo.map((exp) => 
                                    <li class="list-group-item border-0 pl-0 pb-1">
                                        <p className="footer-link">{exp}</p>
                                    </li>
                                        )} 
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="sub-footer mt-5">
                    <Col>
                        <div class="footer-copyright text-center py-3">
                            <img class="footer-brand mx-auto" src={logo} alt=""/>
                            <span class=""><p>© 2020 Ceptier</p></span>
                            <span class="footer-copyright-text lead"><p class="m-0">This content is for general information purposes only, and should not be used as a substitute for consultation with professional advisors.</p></span>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Footer;