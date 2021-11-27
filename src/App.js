import React, { useState } from "react";
import Hero from "./Components/Hero";

import Navbar from "./Components/Navbar";
import GlobalStyle from './GlobalStyles';
import { SliderData } from './data/SliderData';
import Dropdown from "./Components/Dropdown";
import InfoSection from "./Components/InfoSection";
import { InfoData } from './data/InfoData';

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
        <Hero slides={SliderData} />
        <InfoSection {...InfoData} />
      </>
    );
};

export default App;
