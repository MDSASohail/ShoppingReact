import Annoucements from "./Annoucements"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Newsletter from "./Newsletter"
import {useDispatch} from 'react-redux';
import { useEffect, useState } from "react"
import {useLocation} from 'react-router-dom';
import axios from "axios"

import {addProduct} from '../Rudux/CartRedux'
function SingleProduct() {

    const [item,setItem]=useState(1);
    const [productt, setProductt] = useState({ size: [],color:[] });
    const [color,setColor]=useState("");
    const [size,setSize]=useState("");

    
     const location=useLocation();
    let id=location.pathname.split("/")[2];
    console.log(id);
    const dispatch=useDispatch();
    const handleClick=()=>{
      dispatch(addProduct({productt,item,color,size}))
    }
    
    useEffect(()=>{
               const data=async()=>{
                       try{
                        const d=await axios.get(`https://shopping-tau-seven.vercel.app/pro/${id}`)
                        setProductt(d.data);
                        console.log(productt)
                       }catch(err){
                              console.log(err);
                       }
               }

               data();
    },[id])
    function hangleItem(what)
    {
       console.log(productt);
         if(what==='-' && item>=2)
         {
            setItem(item-1);
             return;
         }
         if(what==='+' && item<5)
         {
            setItem(item+1);
         }
         if(item===5)
          alert("You can order maximum 5 item")

    }

   
    
  return (
    <>
      <Navbar/>
      <Annoucements/>
      <div id="SingleProductDetail" className="flex items-center   border-2 p-4 m-4 ">
         <div className="flex-1 h-1/2  p-2 ">
             <img src={productt.img} alt="" className="" />
         </div>
         <div id="singleDetail" className="flex-1">
               <p className="header-text text-center">{productt.title}</p>
               <p className="text-xl   mx-4">{productt.des}</p>
               <p className="m-4 text-2xl">Rs {productt.cost}</p>
               <div className="flex justify-start m-4 items-center">
                
                  <p className="text-xl mr-8">Color :<select onChange={(e)=>{setColor(e.target.value)}} name="" id="" className="border-2 p-2">
      {/* Conditional rendering to prevent mapping over undefined */}
      <option value="" disabled selected>Color</option>
      {productt.color.map((s, index) => (
        <option value={s} key={index}>{s}</option>
      ))}
    </select></p>  
                  <div className="flex items-center">
                      <p className="mr-2 text-xl">Size</p>
                      <select onChange={(e)=>setSize(e.target.value)} name="" id="" className="border-2 p-2">
      {/* Conditional rendering to prevent mapping over undefined */}
      <option value="" disabled selected>Size</option>
      {productt.size.map((s, index) => (
        <option value={s} key={index}>{s}</option>
      ))}
    </select>

                  </div>
               </div>

               <div id="countAndCart" className="m-4 flex items-center">
                   <button onClick={()=>{hangleItem('-')}} className="text-4xl p-2 ">-</button>
                   <span className="text-4xl mx-2">{item}</span>
                   <button onClick={()=>{hangleItem('+')}} className="text-4xl p-2 ">+</button>

                   <button className="text-xl border-2 ml-6 hover:bg-gray-300 transition-colors " onClick={handleClick}>Add to cart</button>
                    
               </div>
         </div>
      </div>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default SingleProduct
