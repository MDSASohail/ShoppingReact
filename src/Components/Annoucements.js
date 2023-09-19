import React from 'react'
import {useSelector} from 'react-redux'
function Annoucements() {

  const likedProduct=useSelector(state=>state.cart.like);
  return (
    <>
      <div className="bg-teal-400 text-center relative  text-lg font-bold">
        <p> Welcome to New Shop</p>
         <p className='absolute top-1 text-sm right-2'>Liked Product {likedProduct}</p>
      </div>
      
    </>
  )
}

export default Annoucements
