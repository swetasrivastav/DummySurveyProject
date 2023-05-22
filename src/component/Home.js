import React from 'react'
import mysurveys from "../assets/mysurveys.svg"
import requestedsurveys from "../assets/requestedsurveys.svg"

import {Link,Outlet} from "react-router-dom"

const Home = () => {
  return (
    <> 
    <div className='w-60 '>
    <div className='border-b-2 border-gray-200 ml-8'>
        <h1 className="font-bold text-xl mt-8 mb-4 " >
            Survey</h1>
      
    </div>
    <div className=' flex items-center border-l-4 border-[#1f6bd9] w-60 ml-8 mt-8 h-12'>
       
        <div className='ml-4'>
    <img src={mysurveys} alt='surveybook'/></div>
   
    <div className='text-[#1f6bd9] text-normal font-semibold ml-4'> 
    <Link to="MySurvey">
    My Survey
    </Link>
    <Outlet/>
  </div>
    
</div>
<div className=' flex items-center w-60 ml-8  h-12'>
       
       <div className='ml-4'>
   <img src={requestedsurveys} alt='surveybook' /></div>
  
   <div className='text-gray-400 text-normal font-semibold ml-4'>Requested Survey</div>
  
</div>


<div className='mt-96 ml-8'>
  <p className='text-sm font-semibold'>"Hard work will pay off later,<br/>laziness"</p>
  <h3 className='text-xs font-normal'>- Adam Smith</h3>
</div>
</div> 

    </>
  )
}

export default Home;