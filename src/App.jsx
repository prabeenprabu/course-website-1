import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Programs from "./Component/Programs/Programs";
import Title from "./Component/Title/Title";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Title subtitle="our programs" title="What we offer" />
            <Programs />
        </div>
    );
};

export default App;
