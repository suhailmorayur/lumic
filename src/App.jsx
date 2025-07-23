import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyBest from "./components/WhyBest";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";

const App = () => (
  <div className="font-sans">
    <Header />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <WhyBest />
    <ContactButtons/>
    <Footer />
  </div>
);

export default App;
