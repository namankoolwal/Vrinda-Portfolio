
import './App.css'
import React, { useEffect, useRef, useState } from 'react';
import Homepage from './components/Homepage'
import Aboutme from './components/Aboutme'
import { Route, Routes } from "react-router-dom";
import CaseStudy2 from './components/CaseStudy2';
import Resume from './components/Resume';
import LandingPage from './components/LandingPage';
import wholeBackground from './assets/images/Background.png';
import CaseStudy1 from './components/CaseStudy1';
import Header from './components/Header';



function App() {

  return (
    <div className={`  font-Urbanist  `}>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route exact path='/landingPage' element={<LandingPage />}/> */}
        <Route exact path="/about-me" element={<Aboutme />} />
        <Route exact path="/case-study2" element={<CaseStudy2 />} />
        <Route exact path="/case-study1" element={<CaseStudy1 />} />
        <Route exact path="/resume" element={<Resume />} />

      </Routes>
    </div>
  )
}

export default App
