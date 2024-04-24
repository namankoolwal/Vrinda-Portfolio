
import './App.css'
import React from 'react';
import Homepage from './Homepage'
import Aboutme from './Aboutme'
import {  Route, Routes } from "react-router-dom";
import CaseStudy2 from './CaseStudy2';
function App() {


  return (
    <div className=''>

     <Routes>
       <Route exact path="/" element ={<Homepage/>}/>
       <Route exact path="/about-me" element={<Aboutme/>}/>
       <Route exact path="/case-study2" element={<CaseStudy2/>}/>
         
       </Routes>
    </div>
  )
}

export default App
