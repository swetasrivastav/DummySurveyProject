import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySurvey from './component/MySurvey';
import CreateSurvey from './component/CreateSurvey';

function App() {
  return (
    <>
   <BrowserRouter>
      <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="MySurvey/" element={<MySurvey/>}/>
    <Route path="MySurvey/CreateSurvey" element={<CreateSurvey/>}/>

   </Routes>
   
   </BrowserRouter>
 

  

</>
  )
}

export default App