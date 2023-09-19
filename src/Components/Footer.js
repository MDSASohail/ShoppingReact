import React from 'react'
import insta from '../Images/insta.jpg';
import twi from '../Images/Twitter.png';
import git from '../Images/github.png';
import linked from '../Images/linkedIn.png'
function Footer() {
  return (
    <>
       <div id='footer' className='mt-28   flex  p-4 font-serif'>
         <div id="myself" className='footer-item-1'>
            <div className='header-text '>MDSA</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatem modi eaque sit consectetur neque quas officia? Recusandae ut voluptatem incidunt blanditiis praesentium minima, ab facere pariatur delectus deleniti vero?</div>
            <div className='flex'>
                 <div className='w-10 h-10 m-2'>
                     <a target='_blank' href="https://instagram.com/i_am_still_worthyy?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="><img src={insta} alt="" /></a>
                 </div>
                 <div className='w-10 h-10 m-2'>
                     <a target='_blank' href="https://www.linkedin.com/in/mohammad-sohail-ansari-a41ba0283"><img src={linked} alt="" /></a>
                 </div>
                 <div className='w-10 h-10 m-2'>
                     <a target='_blank' href="https://twitter.com/iAmStillWorthyy?t=cA6c7cEUs4pn2pl0EAiyFA&s=08"><img src={twi} alt="" /></a>
                 </div>
                 <div className='w-10 h-10 m-2'>
                     <a target='_blank' href="https://github.com/MDSASohail"><img src={git} alt="" /></a>
                 </div>
            </div>
         </div>
         <div id="usefulLinks " className='footer-item-2'>
             <p className='header-text text-center'>Usefull Links</p>
             <div className='flex justify-around'>
             <div className='flex flex-col'>
             <a href="#h">Mans Wear</a>
             <a href="#h">Kids Wear</a>
             <a href="#h">Wishlist</a>
             <a href="#h">Latest Fashion</a>
             <a href="#h">Accessories</a>
            
             </div>
             <div className='flex flex-col'>
             <a href="#h">Gadged</a>
             <a href="#h">Laptop</a>
             <a href="#h">Tracer Gears</a>
             <a href="#h">Decoration</a>
             <a href="#h">Kitchen Accessories</a>
             </div>
             </div>
         </div>

         <div id='Address' className='footer-item-3'>
            <h1 className='header-text'>Contact</h1>
             <p>Batla House, New Delhi, 11005</p>
             <p>999999999</p>
             <p>thisemailistakenbysohail@gmail.com</p>
         </div>
       </div>
    </>
  )
}

export default Footer
