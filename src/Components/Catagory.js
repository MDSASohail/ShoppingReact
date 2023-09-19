import React from 'react'
import { categories } from './Data'
import { Link } from 'react-router-dom'
function Catagory() {

    
  return (
    <>
        <div  className='p-2 flex-wrap flex justify-center   '>
           {categories.map((item,index)=>{
            return  <CatagoryItem key={index} item={item}/>
          })}
        </div>
    </>
  )
}

export default Catagory


function CatagoryItem({item})
{
   return(
    <>
        <div className='  h-auto flex justify-center items-center relative  m-2  w-96'>
            <div className='h-full'>
                <img src={item.img} alt="" className='h-full'/>
            </div>
            <div className='absolute '>
                <p className=' header-text font-bold text-white'>{item.title}</p>
                <div className='text-center'><Link to={`/productlist/${item.cat}`}><button className=' '>Shop Now</button></Link></div>
            </div>
        </div>
    </>
   )
}
