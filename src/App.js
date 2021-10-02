import React, { useState } from "react";
import Hero from "./Components/Hero";

import Navbar from "./Components/Navbar";
import GlobalStyle from './GlobalStyles';
import { SliderData } from './data/SliderData';
import Dropdown from "./Components/Dropdown";


function App() {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderData}/>
        </>
    );
};

export default App;
