import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Annoucements";
import { useState } from "react";
import Newsletter from './Newsletter'
import Footer from './Footer'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteProduct } from "../Rudux/CartRedux";
const data = [
  {
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    id: "1",
    size: "M",
    tiele: "LOUNGEWEAR LOVE",
    cost: 23,
  },
  {
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    id: "2",
    size: "XL",
    title: "AUTUMN COLLECTION",
    cost: 40,
  },
  {
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    id: "3",
    size: "L",
    title: "SUMMER SALE",
    cost: 88,
  },
];
function Cart() {
  
const allCartItem=useSelector(state=>state.cart.products)
  
  console.log("All item is ",allCartItem)
  return (
    <>
      <Navbar />
      <Announcement />
      
      <div className="flex justify-between" id="CartDiv">
        <div id="WholeItem">
          {allCartItem.map((item, index) => {
            
            return <EachItemCart  key={index} eachItem={item} />;
          })}
        </div>

        <Summery  />
        
      </div>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default Cart;

function Summery()
{
    // const [totalCost,setTotalCost]=useState(0);
    // console.log(totalCost);
    const totalQuantity=useSelector(state=>state.cart.quantity
      );
    const totalCost=useSelector(state=>state.cart.total)
 
    return(
        <>
           <div className=" p-4" id="summery">
            <h1 className="header-text text-center">ORDER SUMMERY All</h1>
            <p className="flex
             justify-between mb-2 "><strong>Total Quantity : </strong> {totalQuantity}</p>
             
             <p className="flex justify-between mb-2"><strong>Total </strong> Rs {totalCost}</p> 
             <p className=""><button className="w-full bg-black text-white">Checkout Now</button></p>
         </div>
        </>
    )
}

function EachItemCart({eachItem }) {
  const [item, setItem] = useState(1);

  function hangleItem(what) {
    if (what === "-" && item >= 2) {
      setItem(item - 1);
      return;
    }
    if (what === "+" && item < 5) {
      setItem(item + 1);
    }
    if (item === 5) alert("You can order maximum 5 item");
  }
  const dispatch=useDispatch();
  const handleClick=(id,item,cost)=>{
             
             dispatch(deleteProduct({id,item,cost}))
  }
  return (
    <>
      <div
        id="ceahCartDiv"
        className="flex items-center p-4 "
      >
        <div id="cartImg" className=" cartImg">
        <Link to={`/product/${eachItem.productt._id}`}><img src={eachItem.productt.img} alt="" className="w-full h-full" /></Link>
        </div>
        <div id="cartImgDetail" className="flex-1 ml-4">
          <div className="flex items-center justify-between">
          <p>
            <strong className="mr-3">Product</strong> {eachItem.productt.title}
          </p>
           <button className="hover:text-white hover:bg-black transition-colors bg-slate-700" onClick={()=>handleClick(eachItem.productt._id,eachItem.item,eachItem.productt.cost)}>Remove</button>
          </div>
          <p><strong>Description : </strong> <span>{eachItem.productt.des}</span></p>
          <div className="flex justify-between items-center">
            <p>
              <strong className="mr-3 relative">Color :<span style={{backgroundColor:`${eachItem.color}`}} className="inline-block w-6 h-6 absolute top-0 rounded-full ml-2 "></span></strong>
              
            </p>
            <div>
              <strong>Quantity : </strong> <span>{eachItem.item}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <p>
              <strong>Size : </strong> {eachItem.size}
            </p>
            <p><strong>Cost : </strong> Rs {eachItem.productt.cost}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
