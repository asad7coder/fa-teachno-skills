import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
        <Title title="Courses" />
        <Courses />
        <Title title="Contact us" />
        <Contact />
        <Title title="About" />
        <About />
        <Title title="Our Awesome Team" />
        <Team />
      </div>
      <Title title="Footer" />
      <Footer />
    </>
  );
};

export default App;
