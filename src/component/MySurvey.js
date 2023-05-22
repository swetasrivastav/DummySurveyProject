import React from 'react'
import dropdown from "../assets/dropdown.svg"
import view from "../assets/view.svg"
import viewmenu from "../assets/viewmenu.svg"
import mysurveysImg from "../assets/mysurveysImg.svg"
import calendar1 from "../assets/calendar1.svg"
import { Link,Outlet } from 'react-router-dom'
import Home from './Home'
import coin from "../assets/coin.svg"
import girlimg from "../assets/girlimg.svg"

const MySurvey = () => {
  return (
    <div className='flex overflow-x-hidden'>
    <div>
    <Home/>
    </div>
   <div className='w-full  ml-4 bg-[#ededed] h-[700px]'>

    <div className='flex mt-10 justify-between mx-16'>
        <div className=''>
        <h1 className='font-bold text-2xl'>My Survey</h1>
        </div>
        <div className='flex'>
        <div className='flex items-center border-2 border-[#ffe482] w-48 h-10 '>
            <p className='px-4   text-xs'>Shotby:
                <span className='font-semibold text-gray-900 text-xs'> Date</span>
            </p>
            <div className='ml-12'>
   <img src={dropdown} alt='dropdown' />
   </div>
   </div>
       
        <div className='flex border border-gray-400 ml-6 w-24 h-10 rounded'>
           <div className='bg-[#1f6bd9] w-12'>
        <img src={view} alt='view' className=' my-3 ml-4' />
        </div>
    <div>
        <img src={viewmenu} alt='viewmenu' className=' mt-3 ml-3' />
        </div>
        </div>
            <div className='bg-[#1f6bd9] rounded-md ml-14'>
               
            <Link to="CreateSurvey">
                <button className="uppercase text-white px-4 py-2 text-sm">
               Create Survey 
                   </button>
                   </Link> 
                   <Outlet/>
            </div>
      
        </div>
        </div>
        <div className='flex mx-16 gap-8'>
       <div className='bg-white w-60 h-fit shadow-md p-2 mt-8'>
        <div className='bg-[#f6f2ee]'>
       <img src={mysurveysImg} alt='survey' className='px-8 py-4'  />
       </div>
       <h1 className='font-bold text-normal my-1'>Career-Skill feedback</h1>
       <div className='flex gap-3'>
       <img src={calendar1} alt='calender' />
       <p className='text-xs'>11 Mar 2020</p>

       </div>
       <div className='bg-[#1f6bd9] my-2 rounded-md '>
       <Link to="/">
        <p className='uppercase text-white py-2  ml-14 text-sm'>view response</p> 
        </Link>
       </div>
       </div>
       <div className='bg-white w-60 h-fit shadow-md p-2 mt-8'>
        <div className='bg-[#f6f2ee]'>
       <img src={mysurveysImg} alt='survey' className='px-8 py-4'  />
       </div>
       <h1 className='font-bold text-normal my-1'>Study material</h1>
       <div className='flex gap-3'>
       <img src={calendar1} alt='calender' />
       <p className='text-xs'>11 Mar 2020</p>

       </div>
       <div className='bg-[#1f6bd9] my-2 rounded-md '>
        <p className='uppercase text-white py-2 ml-14 text-sm'>view response</p> 
       </div>
       </div>

       <div className='bg-white w-60 h-fit shadow-md p-2 mt-8'>
        <div className='bg-[#f6f2ee]'>
       <img src={mysurveysImg} alt='survey' className='px-8 py-4'  />
       </div>
       <h1 className='font-bold text-normal my-1'>Designer`s World</h1>
       <div className='flex gap-3'>
       <img src={calendar1} alt='calender' />
       <p className='text-xs'>11 Mar 2020</p>

       </div>
       <div className='bg-[#1f6bd9] my-2 rounded-md '>
        <p className='uppercase text-white py-2 ml-14 text-sm'>view response</p> 
       </div>
       </div>
       <div className='bg-white w-60 h-fit shadow-md p-2 mt-8'>
        <div className='bg-[#f6f2ee]'>
       <img src={mysurveysImg} alt='Survey' className='px-8 py-4'  />
       </div>
       <h1 className='font-bold text-normal my-1'>Welcome to design</h1>
       <div className='flex gap-3'>
       <img src={calendar1} alt='calender' />
       <p className='text-xs'>11 Mar 2020</p>

       </div>
       <div className='bg-[#1f6bd9] my-2 rounded-md '>
        <p className='uppercase text-white py-2 ml-14 text-sm'>view response</p> 
       </div>
       </div>
       </div>
       <div className='flex mt-44 justify-end mr-12 gap-2'> 
        <p className='mt-12'>
            Created or Answer <span className="font-bold mt-12">10</span> survey & earn
        </p>
        <div className='mt-12'>
        <img src={coin} alt='coin' />
        </div>
        <span className="font-bold text-[#1f6bd9] mt-12">200</span>
    <div className='px-6'>
         <img src={girlimg} alt='girlimg'/> 
         </div>
       </div>
         </div> 
        </div>
  )
}

export default MySurvey