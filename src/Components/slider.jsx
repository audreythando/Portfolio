import React from 'react';
import Slider from "react-slick";
import "../assets/css/slick.min.css";
import sliderImg01 from "../assets/images/slider/user7.gif";
import {
    FaLongArrowAltLeft,
    FaLongArrowAltRight,
    FaLongArrowAltDown
} from "react-icons/fa";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from "react-icons/fa";



export default function slider() {
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            >
                <FaLongArrowAltLeft />
            </div>
        );
    }
    const SampleNextvArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            >
                <FaLongArrowAltRight />
            </div>
        );
    }

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        padding: 20,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextvArrow />
    }
    return (
        <div className="container">
            <div className="slider-area">
                <div className="slider-activator">
                    <Slider {...settings}>
                        <div className="slide-item">
                            <div className="container pt-130 pl-xl-0 px-0">
                                <div className="row m-0">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                        <div className="slider-left">
                                            <div className="name">
                                                <h1>Audrey <br /> Mpalume<span className="pc">.</span></h1>
                                            </div>
                                            <div className="dash"></div>
                                            <div className="social-links mb-40">
                                                <ul className="mb-0 pl-0">
                                                    <li className="list-inline-item">
                                                        <a href="https://github.com/audreythando?tab=repositories"><i><FaGithub fontSize="32px"/></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#"><i><FaLinkedin fontSize="32px"/></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slider-cta">
                                                <Link
                                                    to="contact"
                                                    className="ct-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}>Contact me</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8 col-7 pl-0">
                                        <div className="profile-pic">
                                            <img className="img-fluid main-img" src={sliderImg01} alt="audrey img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-8 col-8 slider-area-intro">
                                        <div className="into-area">
                                            <div className="section-title">
                                                <h3 className="section-name pc">INTRODUCTION</h3>
                                                <h2>Software Developer</h2>
                                                <p className="pr-20">
                                                   
                                                   
                                                 
                                                    I am a Front End Developer, who primarly works on web development using React.
                                                    I have aspirations of becoming a full stack software developer.My daily bread is CSS and my mother tongue is Javascript.
                                                     I have keen interests in programming, psychology and fashion.
                                                    I gained my experience through shadowing senior developers at Danware Academy 
                                                    who got me exposed different concepts and projects.
                                                     .I am passionate about learning and currently seeking for a position as
                                                      an Intern/Junior Developer in a company with innovative ideas to help me build and improve my software development skills.</p>
                                            </div>
                                            <div className="intro-button">
                                                <Link
                                                    to="services"
                                                    className="btn-animation mr-btn"
                                                    smooth={true}
                                                    duration={2000}
                                                    activeClass="active"
                                                    spy={false}
                                                    offset={5}> Why l want to join SovTech &nbsp; <i><FaLongArrowAltDown /></i>
                                                    <p>My primary reason for wanting to join SovTech graduate program is because 
                                                        after an in-depth investigation of what SovTech does , I'm filled with 
                                                        so much excitement . Being given the opportunity to work at a #WorldClass 
                                                        software development company would be a privilege. I #GiveAShit about 
                                                        working in a flexible and fluid environment with opportunities to explore
                                                        different avenues and roles . I feel SovTech is one such place.
                                                    </p>
                                                    </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
