
import './App.css'
import React from 'react';
import Homepage from './components/Homepage'
import Aboutme from './components/Aboutme'
import {  Route, Routes } from "react-router-dom";
import CaseStudy2 from './components/CaseStudy2';
import Resume from './components/Resume';
function App() {


  return (
    <div className=''>

     <Routes>
       <Route exact path="/" element ={<Homepage/>}/>
       <Route exact path="/about-me" element={<Aboutme/>}/>
       <Route exact path="/case-study2" element={<CaseStudy2/>}/>
       <Route exact path="/resume" element={<Resume/>}/>
         
       </Routes>
    </div>
  )
}

export default App
