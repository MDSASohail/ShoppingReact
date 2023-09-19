import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
export default function Navbar() {
  let qua=useSelector(state=>state.cart.quantity
    );

    let q=useSelector(state=>state.cart);
    console.log(q)
  console.log(qua);
  return (
    <>
      <nav className="border-2 flex justify-between items-center px-5 py-3">
        
        <div className="flex-1">MDSA</div>
        <div className="flex-1 flex justify-end">
           <div className="px-2 cursor-pointer"><Link to={'/singup'}>Register</Link></div>
           <div className="px-2 cursor-pointer"><Link to={'/login'}>Login</Link></div>
           <Link to='/cart'><div className="px-2 cursor-pointer relative"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
  </svg><span className='absolute top-0 left-6 bg-black text-white py-0 px-1 text-sm font-bold rounded-full'>{qua}</span></div></Link>
        </div>
      </nav>
    </>
  );
}
