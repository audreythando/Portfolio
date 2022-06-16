import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';
import { Link as ReactLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-area">
            <div className="container mt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-12 px-0">
                        <div className="menu-area">
                            <Navbar collapseOnSelect expand="lg" className="p-0">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                                    <i className="text-white"><FaBars /></i>
                                </Navbar.Toggle>
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ml-auto mr-auto align-items-center">
                                        <ReactLink to="/" className="nav-link">Home</ReactLink>
                                        <Link className="nav-link" to="portfolio" smooth={true} duration={2000} activeClass="active" spy={false} offset={5}> Portfolios </Link>
                                        <Link className="nav-link" to="contact" smooth={true} duration={2000} activeClass="active" spy={false} offset={5}> Contact </Link>
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
