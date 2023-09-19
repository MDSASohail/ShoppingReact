import Home from "./Components/Home";
import './App.css'
import ProductList from './Components/ProductList';
import SingleProduct from "./Components/SingleProduct";
import LoginPage from './Components/LoginPage';
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import {Route,Routes,BrowserRouter as Router, useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App()
{

  const user=useSelector(state=>state.user.currentState);
  const Navigate=useNavigate();
  useEffect(()=>{
               if(user==null)
               Navigate('/login');
              else
              Navigate('/')
  },[user])
   return(
    <>
       
      <div className="">
         
           
           
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route  path="/productlist/:catagory" element={<ProductList/>}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/singup" element={<Register/>}/>
                <Route path="/login" element={<LoginPage/>}/>
              </Routes>
           
         
      </div>
      
    </>
   )
}


export default App;