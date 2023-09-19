import React, { useState } from 'react'
import Navbar from './Navbar'
import Annoucements from './Annoucements'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

function ProductList() {
  const locaion=useLocation();
  // console.log(locaion.pathname.split("/")[2]);
  let cat=locaion.pathname.split("/")[2];
  const [filter,setFilter]=useState({});
  const [sort,setSort]=useState("newest");
  console.log(sort);
  const hanglefilter=(e)=>{
    
    let value=e.target.value
       
       setFilter({
        ...filter,
        [e.target.name]:value
       })
       
  }
  console.log(filter)
  return (
    <>
      <Navbar/>
      <Annoucements/>
      
      <h1 className='header-text ml-3'>Dresses</h1>
      <div className='flex justify-between px-4 ' id='filterThProduc'>
          <div className='flex  m-2'>
              <p className='p-4 font-bold text-2xl'>Filter Product</p>
              <select name="color" onChange={hanglefilter} id="" className='m-2 cursor-pointer border-2 p-2 '>
                <option value="color" disabled selected>Color</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="pink">pink</option>

              </select>
              <select name="size" onChange={hanglefilter} className='m-2 cursor-pointer  p-2 '  id="" >
                 <option value="" disabled>Size</option>
                 <option value="S">S</option>
                 <option value="M">M</option>
                 <option value="L">L</option>
                 <option value="XL">Xl</option>
              </select>
          </div>
          <div className='flex m-2 items-center ml-2  '>
            <p className='p-2 mr-2 font-bold text-2xl'>Sort Product</p>
            <select name="base" onChange={e=>setSort(e.target.value)} id="" className='m-2 cursor-pointer border-2 p-2 '>
                <option value="new">Newest</option>
                <option value="lth">Price Low to high</option>
                <option value="htl">Price high to low</option>
            </select>



          </div>
      </div>
      <Products cat={cat} sort={sort} filter={filter}/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default ProductList
