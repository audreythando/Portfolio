import React from 'react';
import servicIcon_01 from "../assets/images/icons/pen-yellow.png";
import servicIcon_02 from "../assets/images/icons/code.png";
import servicIcon_03 from "../assets/images/icons/search-yellow.png";
import servicIcon_04 from "../assets/images/icons/marketing.png";
import servicIcon_05 from "../assets/images/icons/code-white.png";
import servicIcon_06 from "../assets/images/icons/marketing-white.png";
import SingleCountdown from "../SingleFeatures/SingleCountdown";
import SectionTitle from "./section_title";

export default function services() {
    return (
        <div className="services-area section-ptb bgs" id="services">
            <div className="container">
                <SectionTitle
                    title="OVERVIEW"
                    subTitle="Why i want to join SovTech"
                    desc="My primary reason for wanting to join the SovTech graduate program is because after in-depth research of what SovTech does, 
                    I’m filled with so much excitement! Being given the opportunity to work at a #Wordclass software company would be a privilege. 
                    I #GiveAShit about working in a flexible and fluid environment that is filled with opportunities to explore different avenues 
                    and roles, I feel SovTech is one such place. Below is a brief overview of some of the skills i possess that would be valuable to
                    SovTech:"
                />
            </div>
            <div className="container">
                <div className="row service-row mt-45">
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_01} alt="design" />
                                <img className="d-none" src={servicIcon_01} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">UI/UX Design</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_05} alt="design" />
                                <img className="d-none" src={servicIcon_02} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Web Development</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_03} alt="design" />
                                <img className="d-none" src={servicIcon_03} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Research</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                        <div className="project-card text-center bgp">
                            <div className="icon mb-20">
                                <img src={servicIcon_06} alt="design" />
                                <img className="d-none" src={servicIcon_04} alt="design" />
                            </div>
                            <div className="skill-project">
                                <h4 className="mb-3">Business Analysis</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-area mt-45">
                <div className="container">
                    <div className="row">
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Lines of code written" start={0} end={1000} duration={5}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Projects" start={0} end={6} duration={10}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Contributions" start={0} end={15} duration={10}/>
                        <SingleCountdown extraClass="mb-4 mb-md-0" title="Cups of coffee consumed" start={0} end={200} duration={5}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
