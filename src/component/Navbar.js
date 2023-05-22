import React from 'react'
import calender from "../assets/calender.svg"
import notification from "../assets/notification.svg"
import manager from "../assets/manager.svg"
import coin from "../assets/coin.svg"
import Iconimage from "../assets/Iconimage.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
  <nav> 
   <div className=" bg-[#1f6bd9]">
    <ul className="flex justify-end space-x-10 py-3 ">
      <li className='text-white flex items-center '>
        <Link to='#' className='text-sm font-normal hover:scale-110'>Learn
           </Link>
            <div>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </div>
            </li>
        <li className='text-white flex items-center'>
        <Link to='#' className='text-sm font-normal hover:scale-110 ' >
         Network
         </Link>
        <div>
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </div>
      </li> 
      <li className='text-white flex items-center'>

      <Link to='#' className='text-sm font-normal hover:scale-110 '>Evaluate
      </Link>
        <div>
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
      </div>
        </li>
        <li className='flex items-center'>
        <Link to='#' className='text-sm font-normal hover:scale-110 text-white'>
               Job
            </Link>
            </li>
 
  <li className='text-white flex items-center gap-2'>
<img src={manager} alt='manager' className='hover:scale-110  '/>
<div className='text-xs'>
  1350<br/>
  profilescore
</div>
  
  </li>
  <li className='text-white flex items-center gap-2'>
<img src={coin} alt='coin' className='hover:scale-110  '/>
<div className='text-xs'>
  400<br/>
 Tokens
</div>
  
  </li>
        <li>
      <img src={calender} alt='calender' className='hover:scale-110'/>
               </li>
                 <li>
          <img src={notification} alt='calender' className='h-6 hover:scale-110'/>
               </li>
                <li className='flex items-center'>
                <div className=" flex  gap-2 items-center ">
          <img src={Iconimage} alt='girlimage' className='w-8 h-8 rounded-full'/>
          <h3 className='text-white text-sm '>
          Sweta
          </h3>
          </div>
          <div className='text-white mr-14 ml-6'>
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>

        </div>
        </li>
              </ul>
              </div>
  

    </nav>
  )
}

export default Navbar