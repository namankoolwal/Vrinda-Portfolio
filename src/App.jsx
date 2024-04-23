
import './App.css'
import React from 'react';
import Homepage from './Homepage'
import Aboutme from './Aboutme'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CaseStudy2 from './CaseStudy2';
function App() {


  return (
    <Router>
     <Routes>
       <Route path="/" element ={<Homepage/>}/>
       <Route path="/about-me" element={<Aboutme/>}/>
       <Route path="/case-study2" element={<CaseStudy2/>}/>
       </Routes>
      </Router>
  )
}

export default App
