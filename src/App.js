import './App.css';
import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

import Navbar from './components/Navbar/Navbar';
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Service from "./views/Service/Service";
import Project from './views/Project/Project';
import Contact from "./views/Contact/Contact";
// import Skills from "./views/Skills/Skills";
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <div className='body'>
        <div id="loading_start" className='loading_start_none'>
          <p>Loading</p>
          <PulseLoader color={"#9acd32"} size={12} />
        </div>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Project />
        {/* <Skills /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default App;
