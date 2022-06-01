import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <>
		<Navbar />

     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

		
    </>
  )
}

export default App
