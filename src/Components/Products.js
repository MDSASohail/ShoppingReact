import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { addProduct,licked,unlike } from "../Rudux/CartRedux";
import { Link } from "react-router-dom";
import axios from "axios";
function Products({cat,sort,filter}) {
  
  const [product,setProduct]=useState([]);
  const [filterProduct,setFilterProduct]=useState([]);
  useEffect(()=>{
       const getdata=async()=>{
         try {
            const res=await axios.get("https://shopping-tau-seven.vercel.app/pro/allproduct")
            setProduct(res.data);
         } catch (error) {
            console.log(error.message);
            
         }
       }

       getdata();
  },[cat])

  useEffect(() => {
    
    if (sort === 'new') {
      
        setFilterProduct(filterProduct => [...filterProduct].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'lth') {
     
        setFilterProduct(filterProduct => [...filterProduct].sort((a, b) => a.cost - b.cost));
    } else {
      
        setFilterProduct(filterProduct => [...filterProduct].sort((a, b) => b.cost - a.cost));
    }

    
}, [sort]);


  useEffect(()=>{
       cat && setFilterProduct(product.filter((item)=>Object.entries(filter).every(([key,value])=>item[key].includes(value))))
  },[cat,product,filter])
  return (
    <>
      <h1 className="header-text text-center mt-40">Our Popular Products</h1>
      <div className="flex flex-wrap justify-around p-2 ">
        {cat ?filterProduct.map((item2, index) => {
          return <Product key={index} item2={item2} />;
        }):product.map((item2, index) => {
          return <Product key={index} item2={item2} />;
        })}
      </div>
    </>
  );
}

export default Products;

function Product({ item2 }) {
  const color=item2.color[0];
  const size=item2.size[0];
  const productt=item2;
  const item=1;
  const dispatch=useDispatch();
  console.log(item2)
  const handleClick=()=>{
      dispatch(addProduct({productt,item,color,size}))
  }
   const [like,setActive]=useState(false);
   console.log(like)
  const likedProduct=()=>{
    setActive(!like);
    if(like==true)
    {
      dispatch(unlike());
      console.log(like,"In unlike")
    }
    else
    {
      
      dispatch(licked());
      console.log(like, "In like")
    }
    
  }
  return (
    <>
      <div className=" flex bg-gray-100 relative w-72 m-2">
        <div>
          <img src={item2.img} alt="" />
        </div>
        <div className="absolute popular-item flex justify-center items-center transition-all  opacity-0 hover:opacity-100 h-full w-full">
        <div onClick={handleClick} className="h-12 cursor-pointer rounded-full w-12 flex justify-center items-center  text-center p-2  bg-white m-2">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
              />
            </svg>
          </div>

          <Link to={`/product/${item2._id}`}>
          <div className="h-12 cursor-pointer rounded-full w-12 flex justify-center items-center  text-center p-2  bg-white m-2">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          </Link>
          <div onClick={()=>{likedProduct()}} className={like?"h-12 cursor-pointer rounded-full w-12 flex items-center justify-center  text-center p-2  bg-white m-2 active":"h-12 cursor-pointer rounded-full w-12 flex items-center justify-center  text-center p-2  bg-white m-2"}>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 19"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
