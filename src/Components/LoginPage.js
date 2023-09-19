import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loginApi } from './ApiCall';
import {Link} from 'react-router-dom'
function LoginPage() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const handleClick=(e)=>{
    e.preventDefault();
    loginApi(dispatch,{username,password});
  }
  const {isFetching,error}=useSelector(state=>state.user)
  return (
    <>
      <div id='loginPage' className='w-full h-screen'>
           <div className=' p-4 bg-white rounded-md' id="loginPageInnderDiv">
              <h1 className='header-text'>Sign In</h1>
              <div className='border-2 border-gray-300 p-1 my-4'>
                 <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} name='username' className='w-full outline-none'/>
              </div>
              <div className='border-2 border-gray-300 p-1 my-4'>
                <input type="password" placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <div>
                <button className='px-6 py-2 bg-green-800 text-white' onClick={handleClick}>Login</button>
              </div>
              <span>{error?"Something went Wrong":""}</span>
              <p className='my-2 mx-2 underline'><a href="#" className='ml-0 '>Forgot Password</a></p>
              <Link to={'/singup'} className='underline'>Create New Account</Link>
           </div>
      </div>
    </>
  )
}

export default LoginPage
