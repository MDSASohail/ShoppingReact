import React, { useState } from 'react'

import {data} from './Data';
function Slider() {

    const [value,setValue]=useState(0);

    function change(direction)
    {
        
        if(direction==='l' && value>-200 )
        {
           setValue(value-100);
           console.log(direction,value);
        }
        if(direction==='r' && value<0)
        {
          setValue(value+100);
        }

    }
  return (
    <div id='sliderMain'  className='flex overflow-hidden   justify-between items-center w-full    mx-0'>
       <div onClick={()=>{change('l')}} className='cursor-pointer absolute left-4 z-10 hover:-translate-x-1 transition-all '>
       <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
      </svg>
      </div>
      
      {/* Sliding div */}
      <div id="items" style={{
        transform: `translateX(${value}vw)`,
        
      }}  className='    flex h-screen        border-2  '>
          
      {data.map((item,index)=>{
          return (
            <div key={index} id="eachSlidiv" className='h-screen w-screen  eachDivlide p-8 items-center  flex'>
            <div className='flex-1 m-2 rounded-md overflow-hidden'>
              <img src={item.img} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='text-2xl font-bold text-center mb-8 font-serif'>{item.title}</h1>
                <p className='text-xl font-bold text-center'>{item.desc}</p>
            </div>
        </div>
          )
      })}
        
        
      
        
        
        
        
     </div>
      <div onClick={()=>{change('r')}} className='cursor-pointer absolute right-4 hover:translate-x-1 transition-all '>
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
        </svg>
      </div>
    </div>
  )
}

export default Slider
