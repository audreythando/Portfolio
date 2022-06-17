import React from 'react';
import Slider from "../Components/slider";
import SimpleReactLightbox from "simple-react-lightbox";
import Services from "../Components/services";
import Projects from "../Components/projects";
import Contact from "../Components/contact";
import Header from "../Components/header";
import Footer from "../Components/footer";

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
