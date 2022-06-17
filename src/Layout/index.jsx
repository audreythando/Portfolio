import React from 'react'
import HeaderTwo from "../Components/HeaderTwo";
import Footer from "../Components/Footer";
export default function Index(props) {
    return (
        <>      
        <HeaderTwo />
          {props.children}
         <Footer />
        </>
    )
}
