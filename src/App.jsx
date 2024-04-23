import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Programs from "./Component/Programs/Programs";
import Title from "./Component/Title/Title";
import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Title subtitle="our programs" title="What we offer" />
            <Programs />
            <About />
            <Title subtitle="gallery" title="How our campus looks" />
            <Campus />
            <Title subtitle="testimonial" title="What our students says" />
        </div>
    );
};

export default App;
