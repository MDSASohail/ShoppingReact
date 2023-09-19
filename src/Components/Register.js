import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {registerApi} from './ApiCall'
function Register() {

  const [name,setName]=useState(null);
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [username,setUsername]=useState(null);

  const dispatch=useDispatch();
  const handleClick=(e)=>{
    e.preventDefault();
    registerApi(dispatch,{username,password,name,email});
    console.log(name,email,password,username);
  }

  
 
  return (
    <>
    {/* Here id is loginPage because i want the same layout as login */}
      <div id='loginPage' className=' h-screen'>
           <div className=' p-4 bg-white rounded-md' id="loginPageInnderDiv">
              <h1 className='header-text'>Sign Up</h1>
              <div className='border-2 border-gray-300 p-1 my-4'>
                 <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='full name' name="name" className='w-full outline-none'/>
              </div>
              <div className='border-2 border-gray-300 p-1 my-4'>
                 <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} name="username" className='w-full outline-none'/>
              </div>
              <div className='border-2 border-gray-300 p-1 my-4'>
                 <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} name="email" className='w-full outline-none'/>
              </div>
              <div className='border-2 border-gray-300 p-1 my-4'>
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} name="password"/>
              </div>
              <div>
                <button className='px-6 py-2 bg-green-800 text-white' onClick={handleClick}>Sign Up</button>
              </div>
              
              <Link to={'/login'}><p className='my-2 underline'><a href="#" className='ml-0 '>Already have an account.</a></p></Link>
           </div>
      </div>
    </>
  )
}

export default Register
