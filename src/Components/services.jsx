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
                    subTitle="SKILLS"
                    desc=""
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
                                <p>Experience with Figma as well as CSS Frameworks 
                                    such as Chakra UI and Bootstrap
                                </p>
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
                                <p>Responsive web design layout using Javascript , 
                                    ReactJS, NextJS , React Native
                                </p>
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
                                <p>Constantly learning new technologies and keeping up to date 
                                    with the lastest software development trends</p>
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
                                <p>Business Analysis:Udemy 
                                    Requirements elicitation and analysis :LinkedIn Learn 
                
                                </p>
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
