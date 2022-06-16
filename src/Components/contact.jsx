import React from 'react';
import {
    FaEnvelope,
    FaPhone,
    FaGithub
} from "react-icons/fa";
import SectionTitle from "./section_title";

export default function Contact() {
    return (
        <div className="contact-area section-ptb" id="contact">
            <div className="container">
                <SectionTitle
                    title="CONTACT"
                    subTitle="Ways To Contact Me"
                />
            </div>
            <div className="container mt-45">
                <div className="row md-justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaEnvelope /></i>
                            </div>
                            <a className="btn-animation" href="#">audreythando@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaPhone /></i>
                            </div>
                            <a className="btn-animation" href="#">+27 (83) 396 8026</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 mb-lg-0">
                        <div className="contact-item">
                            <div className="ct-item-icon float-left ml-30 mr-20">
                                <i><FaGithub /></i>
                            </div>
                            <a className="btn-animation" href="https://github.com/audreythando">Portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
