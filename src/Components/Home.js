import React from 'react'
import Navbar from './Navbar'
import Annoucements from './Annoucements'
import Slider from './Slider'
import Catagory from './Catagory'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'
const Home = () => {
  return (
    <div className=''>
      <Annoucements/>
      <Navbar/>
      <Slider/>
      <Catagory/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
    
  )
}

export default Home
