import React from "react";
import Hero from "./Components/Hero";

import Navbar from "./Components/Navbar";
import GlobalStyle from './GlobalStyles';
import { SliderData } from './data/SliderData';


function App() {

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Hero slides={SliderData}/>
        </>
    );
};

export default App;
