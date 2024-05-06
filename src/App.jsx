
import './App.css'
import React , {useRef, useState} from 'react';
import Homepage from './components/Homepage'
import Aboutme from './components/Aboutme'
import {  Route, Routes } from "react-router-dom";
import CaseStudy2 from './components/CaseStudy2';
import Resume from './components/Resume';
import LandingPage from './components/LandingPage';
import wholeBackground from './assets/images/Background.png';
// import curserIcon from './assets/Imp/curserIcon.cur';
function App() {

  return (
    <div className={`  font-Urbanist  `}>

     <Routes>
       <Route exact path="/" element ={<Homepage/>}/>
       <Route exact path='/landingPage' element={<LandingPage />}/>
       <Route exact path="/about-me" element={<Aboutme />}/>
       <Route exact path="/case-study2" element={<CaseStudy2 />}/>
       <Route exact path="/resume" element={<Resume/>}/>
         
       </Routes>
    </div>
  )
}

export default App
