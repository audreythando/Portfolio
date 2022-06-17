import React from 'react';
import Slider from "../Components/Slider";
import SimpleReactLightbox from "simple-react-lightbox";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Slider />
            <Services />
            <SimpleReactLightbox>
            </SimpleReactLightbox>
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
