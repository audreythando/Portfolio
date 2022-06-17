import React from 'react';
import logoImg from "../assets/images/logo/logo.png";
import { Navbar } from "react-bootstrap";
import { Link as ReactLink } from "react-router-dom";

export default function headerTwo() {
    return (
        <div className="header-area">
            <div className="container mt-60">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-12 px-0">
                        <div className="menu-area">
                            <Navbar collapseOnSelect expand="lg" className="p-0">
                                <div className="logo-area">
                                    <ReactLink to="/">
                                        <img className="img-fluid" src={logoImg} />
                                    </ReactLink>
                                </div>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                                    <i className="text-white"><FaBars /></i>
                                </Navbar.Toggle>
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ml-auto align-items-center">
                                        <ReactLink to="/" className="nav-link">Home</ReactLink>
                                        <Nav.Link href="/#portfolio">Portfolios</Nav.Link>
                                        <Nav.Link href="/#contact">Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
    )
}
