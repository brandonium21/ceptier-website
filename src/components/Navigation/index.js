import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './index.css';
import Brand from '../../assets/logo-brand.png';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


class Navigation extends React.Component{
    render() {
        return(
            <Navbar sticky="top" className="shadow" bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href={ROUTES.HOME}>
                        <Image src={ Brand } height={30}></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-4">
                            <NavLink className="nav-link mr-4" exact to={ROUTES.ABOUT}>
                                Company
                            </NavLink>
                            <NavLink className="nav-link mr-4" exact to={ROUTES.TECHNOLOGY}>
                                Technology
                            </NavLink>
                            <NavLink className="nav-link mr-4" exact to={ROUTES.SERVICES}>
                                Services
                            </NavLink>
                        </Nav>
                        <a className="btn btn-warning" href="/#contact">Contact Us</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;